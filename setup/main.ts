import { defineAppSetup } from '@slidev/types'
import { initCjkOpenStart } from './cjk-open-start'

export default defineAppSetup(({ router }) => {
  initCjkOpenStart(router)
})
