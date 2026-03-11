# Component Sync Policy

## Single Source of Truth

The NPM package **[`vsc-ui-react`](https://github.com/huimiu/vsc-ui-react)** is the
**single source of truth** for all component definitions displayed in this
Storybook preview site.

## Rules

### 1. No Local Component Redefinitions

This repository **must not** redefine component logic, props, or behavior.
Components are authored and maintained exclusively in the
[`vsc-ui-react`](https://github.com/huimiu/vsc-ui-react) package.

### 2. CSS Overrides Mirror the Package

Every CSS override file in `overrides/` must **exactly reflect** the styles
shipped by the NPM package (currently in `src/components/*/**.module.scss`).

| Storybook override file                   | NPM package source                         |
| ----------------------------------------- | ------------------------------------------ |
| `overrides/vscode-button-overrides.css`   | `src/components/Button/button.module.scss` |
| `overrides/vscode-dropdown-overrides.css` | _(planned – Dropdown component)_           |
| `overrides/vscode-input-overrides.css`    | _(planned – Input component)_              |
| `overrides/vscode-menu-overrides.css`     | _(planned – Menu component)_               |

When the package updates a style rule, the corresponding override file here
**must** be updated to match.

### 3. Preview-Only Additions Are Allowed — But Marked

Storybook may add **visualization helpers** that don't exist in the package
(e.g., layout grids, demo-specific wrappers, token tables). These must:

- Live outside `overrides/` (use `styles/site.css` or inline styles)
- Never modify how the component itself renders
- Be clearly commented as `/* PREVIEW ONLY */`

### 4. Component Registry Tracks the Package

The component registry in `scripts/layout.js` must list every component
exported by the NPM package. When a new component is added to the package's
`src/index.ts`, a matching entry must be created here:

1. Add an HTML page in `components/`
2. Add a CSS override file in `overrides/`
3. Register the component in the `components` array in `scripts/layout.js`

### 5. Version Pinning

This repo should track the **latest published version** of `vsc-ui-react`.
When reviewing sync, compare against the package version noted in this file:

**Currently tracking:** `vsc-ui-react@0.0.3`

## How to Verify Sync

Run the sync-check script:

```bash
node scripts/sync-check.js
```

This will:

- Fetch the latest component list from the NPM package repo
- Compare against the local component registry
- Report any missing or extra components
- Flag override files that may be out of date

## Adding a New Component

When a new component (e.g., `VscDropdown`) is added to the NPM package:

1. **Override CSS:** Create `overrides/vscode-dropdown-overrides.css`
   translating the package's SCSS module into plain CSS with
   `.fui-*` selectors (class-name approach for static preview)
2. **Preview page:** Create `components/dropdown.html` with usage examples
3. **Registry:** Add the entry to `scripts/layout.js` → `components[]`
4. **Sync version:** Update the "Currently tracking" version above
