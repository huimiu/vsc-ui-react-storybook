# Copilot Instructions — vsc-ui-react-storybook

## Purpose

This repository is a **preview / Storybook site** that visualizes components
from the [`vsc-ui-react`](https://github.com/huimiu/vsc-ui-react) NPM package.
It is **not** the source of truth for component definitions.

## Critical Rules

1. **Never redefine component logic or props locally.**
   All component behavior, props, and structure are defined in the NPM package
   (`huimiu/vsc-ui-react`). This repo only contains CSS overrides and HTML
   preview pages.

2. **CSS overrides must mirror the NPM package styles exactly.**
   Every rule in `overrides/*.css` corresponds to a rule in the package's
   SCSS modules (`src/components/*/**.module.scss`). When editing overrides:
   - Match the same properties, values, and tokens used in the package
   - Use `.fui-*` class selectors (flat CSS) as the equivalent of the
     package's CSS-module `:global()` selectors
   - Do not invent new styling that doesn't exist in the package

3. **The NPM package repo is the single source of truth.**
   Before making any CSS change, verify the corresponding rule exists in:
   `https://github.com/huimiu/vsc-ui-react/tree/main/src/components/`

4. **Preview-only code must be clearly separated.**
   - Layout, demo grids, and documentation helpers → `styles/site.css`
   - Component overrides → `overrides/vscode-*.css`
   - Never mix the two

5. **Component registry must track package exports.**
   The `components` array in `scripts/layout.js` must list every component
   exported by the package's `src/index.ts`. Currently exported:
   - `VscButton`, `VscSplitButton`, `VscMenuButton` (Button family — all in `button.html`)
   - `VscInput` (Input)
   - `VscTextarea` (Textarea)
   - `VscField` (Field)
   - `VscSearchBox` (SearchBox)
   - `VscDropdown`, `VscCombobox`, `VscListbox`, etc. (Dropdown)
   - `VscMenuPopover`, `VscMenuList`, `VscMenuItem`, etc. (Menu)
   - `VscTabList`, `VscTab` (TabList)

   When the package adds a new export, this site needs:
   - A new `components/<name>.html` page
   - A new `overrides/vscode-<name>-overrides.css` file
   - A new entry in the `scripts/layout.js` registry

## Repository Structure

```
├── components/          # HTML preview pages (one per component)
├── overrides/           # CSS override files (mirror NPM package styles)
├── scripts/
│   ├── layout.js        # Shared nav + component registry
│   └── sync-check.js    # Verifies alignment with NPM package
├── styles/
│   ├── site.css         # Preview-only layout styles
│   └── theme-tokens.css # VS Code theme token definitions
├── index.html           # Landing page
└── .github/
    ├── COMPONENT_SYNC.md      # Full sync policy documentation
    ├── copilot-instructions.md # This file
    └── workflows/              # CI/CD
```

## When Asked to Modify Overrides

1. First check the NPM package source for the corresponding SCSS rule
2. Translate SCSS nesting + `:global()` to flat `.fui-*` CSS selectors
3. Preserve all VS Code theme tokens (`var(--vscode-*)`)
4. Keep the same section structure and comment blocks

## When Debugging Storybook Styling

1. Treat legacy overview HTML and Storybook docs as different styling pipelines
2. For Storybook docs icon or chevron color mismatches, inspect the rendered DOM/computed styles before changing selectors
3. For split-button chevrons, check Fluent's MenuButton slot `.fui-MenuButton__menuIcon`, not only `.fui-SplitButton__menuButton svg`
4. Run `npm run griffel-guard` before and after CSS changes that are intended to stop Griffel from winning
5. Consult `.github/skills/storybook-griffel-debug/SKILL.md` for the repo's repeatable debugging workflow when working on Storybook docs, split buttons, or Griffel override regressions

## Currently Tracking

**Package:** `vsc-ui-react@0.0.8`
**Components in package:** VscButton, VscSplitButton, VscInput, VscTextarea, VscField, VscSearchBox, VscDropdown, VscCombobox, VscListbox, VscMenuPopover, VscMenuList, VscMenuItem, VscTabList, VscTab
