import type { Router } from 'vue-router'

/** Fullwidth CJK opening punctuation at the start of a text block */
const OPEN_PUNCT = /^(\s*)([\u300C\u300E\u300A\u3008\uFF08\u3010\uFF3B\uFF5B])/

const TEXT_BLOCK_SELECTOR = [
  '.slidev-layout :is(p, li, h1, h2, h3, h4, h5, h6, blockquote, td, th)',
  '.slidev-layout .fact-row-value',
  '.slidev-layout .qa-text',
  '.slidev-layout .note-block-body',
  '.slidev-layout blockquote footer',
].join(', ')

const SKIP_SELECTOR = 'code, pre, kbd, .shiki, .cjk-open-start'

function hasDirectTextNodes(el: HTMLElement): boolean {
  return [...el.childNodes].some(
    (n) => n.nodeType === Node.TEXT_NODE && (n.textContent?.length ?? 0) > 0
  )
}

function usesFlexOrGrid(el: HTMLElement): boolean {
  const { display } = getComputedStyle(el)
  return (
    display === 'flex' ||
    display === 'inline-flex' ||
    display === 'grid' ||
    display === 'inline-grid'
  )
}

/**
 * Flex/grid containers treat each child as a separate item. Wrap direct content
 * in a single inline box so punct wrapping does not split text across items.
 */
function consolidateInlineContent(el: HTMLElement): HTMLElement {
  const existing = el.querySelector(':scope > .cjk-text-block')
  if (existing) return existing as HTMLElement

  if (!hasDirectTextNodes(el)) return el

  const hasElementChildren = el.querySelector(':scope > *') !== null
  const shouldConsolidate =
    usesFlexOrGrid(el) || el.matches('li') || (hasElementChildren && hasDirectTextNodes(el))

  if (!shouldConsolidate) return el

  const nodes = [...el.childNodes].filter(
    (n) => n.nodeType === Node.TEXT_NODE || n.nodeType === Node.ELEMENT_NODE
  )
  if (nodes.length === 0) return el

  const block = document.createElement('span')
  block.className = 'cjk-text-block'
  nodes.forEach((n) => block.appendChild(n))
  el.appendChild(block)
  return block
}

function isLeafTextBlock(el: HTMLElement, root: ParentNode): boolean {
  const blocks = [...root.querySelectorAll(TEXT_BLOCK_SELECTOR)] as HTMLElement[]
  return !blocks.some((other) => other !== el && el.contains(other))
}

export function wrapCjkOpenStart(el: HTMLElement): boolean {
  if (el.dataset.cjkOpenStart === 'done') return false
  if (el.closest(SKIP_SELECTOR)) return false

  const target = consolidateInlineContent(el)

  const walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT)
  let textNode: Text | null

  while ((textNode = walker.nextNode() as Text | null)) {
    if (textNode.parentElement?.closest('.cjk-open-start')) continue

    const text = textNode.textContent ?? ''
    const match = text.match(OPEN_PUNCT)

    if (!match) {
      if (text.trim().length > 0) break
      continue
    }

    const [, leading] = match
    let node: Text = textNode

    if (leading.length > 0) node = node.splitText(leading.length)!

    node.splitText(1)

    const span = document.createElement('span')
    span.className = 'cjk-open-start'
    node.parentNode!.insertBefore(span, node)
    span.appendChild(node)

    el.dataset.cjkOpenStart = 'done'
    return true
  }

  if (target !== el) el.dataset.cjkOpenStart = 'done'
  return false
}

export function applyCjkOpenStart(root: ParentNode = document): void {
  const blocks = [...root.querySelectorAll(TEXT_BLOCK_SELECTOR)] as HTMLElement[]

  blocks
    .filter((el) => isLeafTextBlock(el, root))
    .forEach((el) => {
      wrapCjkOpenStart(el)
    })
}

export function initCjkOpenStart(router?: Router): void {
  const run = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => applyCjkOpenStart())
    })
  }

  run()
  router?.afterEach(() => run())

  if (typeof window !== 'undefined') window.addEventListener('load', run)
}
