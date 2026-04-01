# vsc-ui-react-storybook

Preview and Storybook site for the `vsc-ui-react` package.

This repository exists to visualize and validate the components shipped by [`vsc-ui-react`](https://github.com/huimiu/vsc-ui-react). It is not the source of truth for component logic, props, or behavior. Those live in the package repo.

## Purpose

- Preview VS Code-styled components in isolation.
- Mirror package styling through flat CSS override files.
- Keep a simple component registry and preview pages in sync with upstream exports.
- Build and publish a Storybook bundle for review.

## What Lives Here

- `components/`: static HTML preview pages for each tracked component area.
- `overrides/`: CSS overrides that mirror the package's SCSS output using `.fui-*` selectors.
- `scripts/layout.js`: shared layout, sidebar navigation, theme toggle, and component registry.
- `scripts/sync-check.js`: checks that local previews and overrides still align with upstream package exports.
- `src/stories/`: Storybook stories used for the interactive Storybook build.
- `styles/`: preview-only site styling and theme tokens.
- `storybook-static/`: generated Storybook output.

## Source Of Truth

All component definitions belong to [`vsc-ui-react`](https://github.com/huimiu/vsc-ui-react).

When working in this repo:

- Do not reimplement component behavior locally.
- Do not invent new component props or structure here.
- Keep CSS overrides aligned with the package styles.
- Keep preview-only helpers separate from component overrides.

If you need to change how a component behaves, make that change in the package repo first.

## Local Development

Install dependencies:

```bash
npm install
```

Start Storybook locally:

```bash
npm run storybook
```

Build the static Storybook site:

```bash
npm run build
```

Run the sync check:

```bash
npm run sync-check
```

## Sync Workflow

Before changing component styling in this repo:

1. Check the matching source in the `vsc-ui-react` repository.
2. Update the corresponding file in `overrides/` so it mirrors the upstream styles.
3. Keep VS Code theme tokens intact where they are already used.
4. Run `npm run sync-check` to catch missing pages, overrides, or registry drift.

When the package adds a new exported component, update this repo by adding:

1. A preview page in `components/`.
2. A matching CSS override file in `overrides/`.
3. A registry entry in `scripts/layout.js`.
4. Any related sync metadata in `scripts/sync-check.js`.

## Repository Layout

```text
.
|-- components/
|-- overrides/
|-- scripts/
|   |-- layout.js
|   `-- sync-check.js
|-- src/
|   `-- stories/
|-- styles/
|-- storybook-static/
|-- index.html
|-- package.json
`-- README.md
```

## Notes For Contributors

- `styles/site.css` is for preview-site layout and documentation helpers.
- `overrides/vscode-*.css` is for component styling that mirrors the package.
- Keep those concerns separate.
- Treat `storybook-static/` as generated output, not authored source.

## Scripts

- `npm run storybook`: start Storybook on port 6006.
- `npm run build`: generate the static Storybook site in `storybook-static/`.
- `npm run build-storybook`: alias for the static build.
- `npm run sync-check`: verify local previews and overrides against upstream exports.
