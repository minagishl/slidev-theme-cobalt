# Slidev Theme Cobalt

A Slidev theme featuring a deep cobalt blue color scheme with framed layouts, inspired by the v2.0 slide template.

## Preview

<table>
<tr>
<td align="center">
  <img src="./screenshots/cover.png" alt="Cover layout" width="400"/>
  <br/>
  <sub>Cover Layout</sub>
</td>
<td align="center">
  <img src="./screenshots/title-center.png" alt="Title Center layout" width="400"/>
  <br/>
  <sub>Title Center Layout</sub>
</td>
</tr>
</table>

## Install

Add the following frontmatter to your `slides.md`:

```
---
theme: cobalt
---
```

When you run Slidev, it will automatically install the `slidev-theme-cobalt` package.

Learn more about how to use a theme in the Slidev docs.

## Layouts

This theme provides the following layouts:

- `cover` - Full blue cover slide with centered content
- `title` - Left-aligned title on framed slide
- `title-center` - Centered title on framed slide
- `title-sandwich` - Three-part layout with top subtitle, centered title, and bottom footer
- `intro` - Centered content on framed slide (similar to title-center)
- `toc` - Table of contents with numbered badges
- `section` - Full blue section divider
- `section-frame` - Framed section divider with white background
- `panel` - Light gray panel on white background for quotes and content
- `team` - Panel layout for three team members with images
- `team-border` - Team layout with blue border frame
- `profile` - Framed profile/text pages with header
- `frame-panel` - Framed slide with inner panel and header
- `image-left` - Left image and right text (use `image-col` and `content-col` divs)
- `image-right` - Right image and left text (use `image-col` and `content-col` divs)

## Components

No custom components are required. Use the utility classes in `styles/layout.css` such as `text-blue`, `quote`, `member`, and `name`.

## Features

- **Deep Cobalt Blue**: Rich blue color palette (`oklch(37.9% 0.146 265.522)`) for professional presentations
- **Framed Layouts**: Elegant blue frames surrounding white content areas
- **Japanese Support**: Includes Noto Sans JP font for Japanese text
- **Multiple Layouts**: 15 layout options for various presentation needs

## Deploy (Cloudflare Workers)

You can deploy the built slides as static assets to Cloudflare Workers.

1. Log in at [Cloudflare](https://dash.cloudflare.com/) and run `bunx wrangler login` to authenticate (once).
2. Deploy: `bun run deploy` (runs `bun run build` then `wrangler deploy`).
3. After deployment, the slides are available at the shown `*.workers.dev` URL.

Configure the Worker name and options in `wrangler.jsonc` (e.g. edit `name` to change the subdomain).

## Contributing

- `bun install`
- `bun run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `bun run export` to generate the preview PDF
- `bun run screenshot` to generate the preview PNG

## License

MIT License - See [LICENSE](./LICENSE) file for details.
