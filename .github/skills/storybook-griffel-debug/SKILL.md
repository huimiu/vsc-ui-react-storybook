---
name: storybook-griffel-debug
description: "Debug Storybook docs styling mismatches and Griffel override regressions in vsc-ui-react-storybook. Use for Storybook docs vs overview differences, split-button chevron color bugs, icon color bugs, min-width regressions, input/dropdown/menu/tab/search-box styling drift, Griffel winning over vsc-ui-react CSS, and preview CSS guard updates."
---

# Storybook Griffel Debug

Use this workflow when a component looks correct in the legacy overview HTML but wrong in Storybook docs, or when Fluent/Griffel runtime styles appear to override the package-backed visuals.

## What To Remember

- This repo is not the source of truth for component behavior. Visual fixes must stay aligned with the `vsc-ui-react` package.
- Legacy overview pages and Storybook docs are different rendering/styling pipelines.
- Storybook docs stabilization belongs in `styles/storybook-preview.css`.
- Component override parity belongs in `overrides/vscode-*.css` and must mirror the package source.

## Debug Workflow

1. Confirm which surface is wrong:
   - Legacy overview HTML
   - Storybook docs/preview
2. Check the package source or compiled package output to verify the intended selector, slot, token, and visual contract.
3. Inspect the rendered Storybook DOM and computed styles before editing selectors.
4. If the issue is Storybook-docs-only, prefer a minimal fix in `styles/storybook-preview.css`.
5. If the issue reflects true package parity drift, update the matching override file only if the same rule exists upstream in `vsc-ui-react`.
6. If you discover a new recurring slot or state contract, add it to `scripts/griffel-guard.js` so CI can catch the regression next time.
7. Run `npm run griffel-guard` after changes to confirm the anti-Griffel contracts still hold.

## Common Fluent Slots To Inspect

Use this checklist before guessing on selectors. In this repo, the visual drift often comes from a nested Fluent slot keeping its own color, spacing, focus bar, or min-size rule.

- Buttons and split buttons:
  - `.fui-Button__icon`
  - `.fui-SplitButton__primaryActionButton`
  - `.fui-SplitButton__menuButton`
  - `.fui-MenuButton__menuIcon`
- Inputs and search boxes:
  - `.fui-Input__input`
  - `.fui-Input__contentBefore`
  - `.fui-Input__contentAfter`
  - root `::after` focus bar on `.fui-Input` or `.fui-SearchBox`
- Textareas:
  - `.fui-Textarea__textarea`
  - root `::after` focus bar on `.fui-Textarea`
- Dropdowns and comboboxes:
  - `.fui-Dropdown__button`
  - `.fui-Dropdown__expandIcon`
  - `.fui-Combobox__input`
  - `.fui-Combobox__expandIcon`
  - root `::after` focus bar on `.fui-Dropdown` or `.fui-Combobox`
- Menus:
  - `.fui-MenuItem__icon`
  - `.fui-MenuItem__content`
  - `.fui-MenuItem__secondaryContent`
  - `.fui-MenuItem__submenuIndicator`
  - item `::after` decorations
- Tabs:
  - `.fui-Tab__content`
  - `.fui-Tab__content--reserved-space`
  - `.fui-Tab__icon`
- Fields:
  - `.fui-Label`
  - `.fui-Label__required`
  - `.fui-Field__validationMessage`
  - `.fui-Field__hint`

## Typical Regression Shapes

- Color drift: icons, chevrons, submenu indicators, placeholder text, or secondary text stay on Fluent neutral tokens instead of inheriting the VS Code tokenized foreground.
- Size drift: buttons, triggers, or compact variants pick up Fluent default `min-width`, `min-height`, or line-height.
- Focus drift: Fluent root `::after` bars or focus visuals reappear when the package/override expects them removed.
- State drift: hover, focus, selected, disabled, readonly, and error states diverge because a nested slot still uses runtime-generated Griffel classes.

## How To Extend For Future Components

1. Identify the exact nested Fluent slot that is visually wrong.
2. Decide whether the fix belongs in Storybook-only preview CSS or in the mirrored override file.
3. Add the smallest selector contract that restores package parity.
4. If the contract is likely to recur, add a guard in `scripts/griffel-guard.js`.
5. Add a short note to this skill if the component family introduces a new slot pattern worth checking first.

## Known Case: Split Button Chevron

- Symptom: primary split-button chevron appears gray in Storybook docs but should be white.
- Common wrong assumption: targeting only `.fui-SplitButton__menuButton svg` is enough.
- Important Fluent detail: the chevron is rendered through MenuButton's separate slot `.fui-MenuButton__menuIcon`.
- If this regresses, inspect `.fui-MenuButton__menuIcon` first and verify that `styles/storybook-preview.css` still forces the primary foreground on that slot.

## Guardrails

- Do not invent local component behavior or styling that does not exist in the package.
- Keep fixes scoped and avoid broad unrelated reformatting.
- Prefer selector precision over escalating `!important` blindly.
- If you add a new anti-Griffel contract, update `scripts/griffel-guard.js` so CI can enforce it.

## Useful Files

- `.github/copilot-instructions.md`
- `.github/COMPONENT_SYNC.md`
- `styles/storybook-preview.css`
- `scripts/griffel-guard.js`
- `overrides/vscode-button-overrides.css`
