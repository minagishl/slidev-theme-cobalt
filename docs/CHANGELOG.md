# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `FactRow` component — two-column label and value row for metadata or specifications; required `label` prop and default slot for the value; stack multiple rows for a compact fact list
- `Badge` component — compact inline label for status or emphasis; default slot for text, optional `variant` prop (`solid` (default), `soft`, `outline`)
- `cards` layout — framed grid of feature cards; accepts a `cards` array with `title` and optional `description`, and an optional `columns` prop (`2`, `3`, `4`) that overrides the auto column count based on card count

### Changed

- npm publish workflow migrated to OIDC Trusted Publishing — `NPM_TOKEN` secret is no longer required

## [0.3.4] - 2026-03-04

### Added

- `NoteBlock` component — framed blue note block with Lucide icon; accepts a `type` prop (`info` (default), `warn`, `alert`) and can be used in any layout
- Documentation updates in `example.md` and `README.md` showing how to use `NoteBlock` and Markdown blockquotes

### Changed

- Global table styling updated for Markdown tables inside any layout — consistent cell padding and row borders using theme spacing and color variables
- Blockquote styling redesigned to match the theme and to override Slidev's default code-style quote UI

## [0.3.3] - 2026-03-04

### Added

- `section-index` layout — full blue section divider with a large muted number on the left and a vertical divider; accepts a `number` prop; pairs well with `toc`

### Changed

- Checkbox styling redesigned: unchecked state shows a square border, checked state shows a filled blue square with a white check mark icon sourced from `lucide-static`

## [0.3.2] - 2026-03-04

### Added

- `QA` component — question-and-answer pair; accepts a `question` prop for the question text and a default slot for the answer; multiple `<QA>` items stack vertically with automatic spacing

### Changed

- Split the monolithic `styles/layout.css` into per-category files under `styles/layouts/` and `styles/components/` for easier maintenance; `styles/layout.css` is now an entry point with `@import` statements only

### Fixed

- `Label` component overlapping with slide content text — padding is now increased on both top and bottom whenever a `Label` is present, covering `frame`, `cols`, and `comparison` layouts

## [0.3.1] - 2026-03-02

### Fixed

- `components` directory was missing from the npm package `files` field, causing `Label`, `Note`, `PageNumber`, and `Underline` components to be unavailable after installation

## [0.3.0] - 2026-03-02

### Added

- `Label` component — places a styled label in any corner of a slide (`top-left`, `top-right`, `bottom-left`, `bottom-right`); default is `top-left`
- `Note` component — small, muted annotation text with the same `position` prop as `Label`; default is `bottom-left`
- `PageNumber` component — displays the current page number, built on top of `Label`; supports `showTotal` prop for `current / total` format
- `stats` layout — framed layout displaying large metric cards; accepts a `stats` array with `value`, `label`, and optional `description`
- `timeline` layout — horizontal timeline; accepts an `events` array with `date`, `title`, and optional `description`
- `image-full` layout — full-bleed image inside a frame; supports `image`, `alt`, `dim`, and `color` (`blue` / `white`) props
- `comparison` layout — side-by-side comparison with column titles; accepts `leftTitle` / `rightTitle` props and `::left::` / `::right::` slots
- `cols` layout — replaces `two-cols`; supports 2 or 3 equal columns via the `cols` prop (default `2`); three-column mode adds a `::middle::` slot
- Active state for `toc` layout via `activeIndex` prop — highlights the active item and dims the rest
- Checkbox styles for task lists using Markdown `- [ ]` / `- [x]` syntax

### Changed

- `two-cols` layout renamed to `cols` to reflect multi-column support
- `image-full` layout now uses the standard frame border; frame color is switchable between `blue` (default) and `white`
- Inline code inside `image-full` content area uses dark text to prevent white-on-white contrast issue

### Fixed

- Font loading issue that prevented Inter and Noto Sans JP from loading correctly

## [0.2.2] - 2026-03-01

### Added

- `start` prop for `steps-layout` — sets the starting step number for continued step sequences across slides

### Changed

- Panel background updated to a lighter gray for better contrast
- Font settings refined: antialiasing enabled, line heights adjusted, font weights standardized to 100-weight increments, font weight variables extracted as CSS custom properties
- List styles updated for better spacing and readability
- Border sizes and `pre` element styles updated
- Code block and inline code styles updated

## [0.2.1] - 2026-02-20

### Added

- `align` prop for `panel` and `frame-panel` layouts — supports `left`, `center` (default), and `right` alignment

### Changed

- Font sizes adjusted across several layouts

## [0.2.0] - 2026-02-19

### Changed

- Layouts migrated from direct HTML slot content to named slots (`::left::`, `::right::`, `::name::`, etc.) and front matter props — breaking change for slides using the old HTML-based approach

## [0.1.4] - 2026-02-19

### Added

- `process-flow` layout — horizontal process flow with circular steps and connecting arrows; accepts a `steps` array with `title` and `description`
- `quote` layout — centered testimonial/blockquote with an optional `::source::` slot for attribution
- `cols` layout (as `two-cols`) — two equal columns using `::left::` and `::right::` slots
- Multi-column support for `toc` layout — automatically switches to a 2-column grid when there are 5 or more items
- Image label feature for `image-left` and `image-right` — add a `label` prop to display a caption at the bottom of the image

### Fixed

- Syntax errors in layout templates

### Changed

- Spacing adjustments across several layouts
- Line height and margin above lists updated

## [0.1.3] - 2026-02-17

### Added

- `table` layout — framed layout optimized for Markdown tables with a styled header row and alternating row colors

### Changed

- Font weight updated for improved readability

## [0.1.2] - 2026-02-17

### Added

- `steps-layout` layout — numbered step list displayed in a 2-column grid; accepts a `steps` array with `title` and `body`
- Cloudflare Workers deployment support via `wrangler.jsonc`
- Build command (`bun run build`) for generating static export
- Live demo URLs in documentation

### Changed

- Configuration migrated from JSON to JSONC format
- Step layout design refined

### Removed

- Organization chart layout — removed after initial prototype

### Fixed

- Typo in layout templates

## [0.1.1] - 2026-02-17

### Added

- `image-left` and `image-right` layouts — split layouts with an image column and a text column
- License page support in the `panel` layout via the `heading` prop

### Changed

- Team member count changed to three in the default example
- Team member display design updated
- Profile list first-line font weight updated

## [0.1.0] - 2026-02-17

### Added

- Initial codebase with the following layouts: `cover`, `title`, `title-center`, `title-sandwich`, `intro`, `section`, `section-frame`, `toc`, `panel`, `frame-panel`, `profile`, `team`, `team-border`
- Deep cobalt blue color scheme using `oklch(37.9% 0.146 265.522)`
- Framed layout system with a blue border and white inner content area
- Inter Variable and Noto Sans JP Variable fonts for Latin and Japanese text
- CSS custom property system for spacing, typography, and color scales
- `Underline` component for inline blue-underlined text
- Prettier configuration for code formatting
- GitHub Actions workflow for automated npm publish
- GitHub issue and pull request templates

[Unreleased]: https://github.com/minagishl/slidev-theme-cobalt/compare/v0.3.4...HEAD
[0.3.4]: https://github.com/minagishl/slidev-theme-cobalt/compare/v0.3.3...v0.3.4
[0.3.3]: https://github.com/minagishl/slidev-theme-cobalt/compare/v0.3.2...v0.3.3
[0.3.2]: https://github.com/minagishl/slidev-theme-cobalt/compare/v0.3.1...v0.3.2
[0.3.1]: https://github.com/minagishl/slidev-theme-cobalt/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/minagishl/slidev-theme-cobalt/compare/v0.2.2...v0.3.0
[0.2.2]: https://github.com/minagishl/slidev-theme-cobalt/compare/v0.2.1...v0.2.2
[0.2.1]: https://github.com/minagishl/slidev-theme-cobalt/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/minagishl/slidev-theme-cobalt/compare/v0.1.4...v0.2.0
[0.1.4]: https://github.com/minagishl/slidev-theme-cobalt/compare/v0.1.3...v0.1.4
[0.1.3]: https://github.com/minagishl/slidev-theme-cobalt/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/minagishl/slidev-theme-cobalt/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/minagishl/slidev-theme-cobalt/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/minagishl/slidev-theme-cobalt/releases/tag/v0.1.0
