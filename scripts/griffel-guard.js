#!/usr/bin/env node

/**
 * griffel-guard.js — Fail fast when Storybook preview styling drifts in ways
 * that reintroduce Griffel override regressions.
 *
 * Scope:
 * - Verifies critical CSS imports in .storybook/preview.tsx
 * - Verifies Storybook anti-Griffel button guards stay present
 * - Verifies override files keep VS Code token usage + Fluent selectors
 */

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const paths = {
  preview: path.join(root, ".storybook", "preview.tsx"),
  storybookPreviewCss: path.join(root, "styles", "storybook-preview.css"),
  buttonOverrides: path.join(root, "overrides", "vscode-button-overrides.css"),
  inputOverrides: path.join(root, "overrides", "vscode-input-overrides.css"),
  dropdownOverrides: path.join(
    root,
    "overrides",
    "vscode-dropdown-overrides.css",
  ),
  menuOverrides: path.join(root, "overrides", "vscode-menu-overrides.css"),
  tabOverrides: path.join(root, "overrides", "vscode-tab-overrides.css"),
  overrideDir: path.join(root, "overrides"),
};

const overrideFiles = [
  "vscode-button-overrides.css",
  "vscode-dropdown-overrides.css",
  "vscode-input-overrides.css",
  "vscode-menu-overrides.css",
  "vscode-tab-overrides.css",
];

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assertContains(content, matcher, errorMessage, errors) {
  if (matcher instanceof RegExp) {
    if (!matcher.test(content)) errors.push(errorMessage);
    return;
  }
  if (!content.includes(matcher)) errors.push(errorMessage);
}

function main() {
  const errors = [];

  const previewSrc = read(paths.preview);
  const storybookPreviewCss = read(paths.storybookPreviewCss);
  const buttonOverridesCss = read(paths.buttonOverrides);
  const inputOverridesCss = read(paths.inputOverrides);
  const dropdownOverridesCss = read(paths.dropdownOverrides);
  const menuOverridesCss = read(paths.menuOverrides);
  const tabOverridesCss = read(paths.tabOverrides);

  // 1) Import wiring in preview.tsx
  assertContains(
    previewSrc,
    'import "../styles/theme-tokens.css";',
    "Missing theme tokens import in .storybook/preview.tsx",
    errors,
  );
  assertContains(
    previewSrc,
    'import "../styles/storybook-preview.css";',
    "Missing storybook-preview.css import in .storybook/preview.tsx",
    errors,
  );

  for (const file of overrideFiles) {
    assertContains(
      previewSrc,
      `import "../overrides/${file}";`,
      `Missing override import in .storybook/preview.tsx: ${file}`,
      errors,
    );
  }

  const idxStorybookPreview = previewSrc.indexOf(
    'import "../styles/storybook-preview.css";',
  );
  const idxFirstOverride = Math.min(
    ...overrideFiles.map((file) =>
      previewSrc.indexOf(`import "../overrides/${file}";`),
    ),
  );
  if (idxStorybookPreview === -1 || idxFirstOverride === -1) {
    errors.push(
      "Could not validate import order between Storybook CSS and overrides.",
    );
  } else if (idxStorybookPreview > idxFirstOverride) {
    errors.push(
      "Expected storybook-preview.css import before override imports in .storybook/preview.tsx",
    );
  }

  // 2) Storybook anti-Griffel guards for button stories
  assertContains(
    storybookPreviewCss,
    /\.storybook-button-preview[\s\S]*\.fui-Button__icon[\s\S]*color:\s*currentColor\s*!important/i,
    "Missing icon currentColor guard in styles/storybook-preview.css",
    errors,
  );
  assertContains(
    storybookPreviewCss,
    /\.fui-SplitButton__menuButton\s+\.fui-MenuButton__menuIcon[\s\S]*color:\s*currentColor\s*!important/i,
    "Missing split menuIcon currentColor guard in styles/storybook-preview.css",
    errors,
  );
  assertContains(
    storybookPreviewCss,
    /\.storybook-button-preview--primary[\s\S]*var\(--vscode-button-foreground\)\s*!important/i,
    "Missing primary icon foreground guard in styles/storybook-preview.css",
    errors,
  );
  assertContains(
    storybookPreviewCss,
    /\.storybook-button-preview--primary[\s\S]*\.fui-MenuButton__menuIcon[\s\S]*var\(--vscode-button-foreground\)\s*!important/i,
    "Missing primary split menuIcon foreground guard in styles/storybook-preview.css",
    errors,
  );
  assertContains(
    storybookPreviewCss,
    /\.storybook-button-preview--split\s+\.fui-SplitButton__primaryActionButton[\s\S]*min-width:\s*auto\s*!important/i,
    "Missing split primaryActionButton min-width reset in styles/storybook-preview.css",
    errors,
  );
  assertContains(
    storybookPreviewCss,
    /\.storybook-button-preview--split\s+\.fui-SplitButton__menuButton[\s\S]*min-width:\s*auto\s*!important/i,
    "Missing split menuButton min-width reset in styles/storybook-preview.css",
    errors,
  );
  assertContains(
    storybookPreviewCss,
    /\.storybook-button-preview--button\s+\.fui-Button\s*\{[\s\S]*min-width:\s*auto\s*!important/i,
    "Missing base button min-width reset in styles/storybook-preview.css",
    errors,
  );

  // 3) Button override contract checks
  assertContains(
    buttonOverridesCss,
    /\.fui-Button\.vscode-primary[\s\S]*min-width:\s*auto\s*;/i,
    "Button override missing min-width:auto for .fui-Button.vscode-primary",
    errors,
  );
  assertContains(
    buttonOverridesCss,
    /\.fui-SplitButton\.vscode-primary[\s\S]*\.fui-Button__icon[\s\S]*var\(--vscode-button-foreground\)\s*!important/i,
    "Button override missing split primary icon color lock",
    errors,
  );

  // 3b) Input override contract checks
  assertContains(
    inputOverridesCss,
    /\.fui-Input\.vscode-input\s*\{[\s\S]*height:\s*26px\s*;/i,
    "Input override missing 26px root height contract",
    errors,
  );
  assertContains(
    inputOverridesCss,
    /\.fui-Input\.vscode-input::after\s*\{[\s\S]*display:\s*none\s*!important/i,
    "Input override missing Fluent focus-bar removal (::after display:none !important)",
    errors,
  );
  assertContains(
    inputOverridesCss,
    /\.fui-Input\.vscode-input:focus-within\s*\{[\s\S]*border-color:\s*var\(--vscode-focusBorder\)\s*;/i,
    "Input override missing focus-within border-color contract",
    errors,
  );

  // 3c) Dropdown override contract checks
  assertContains(
    dropdownOverridesCss,
    /\.fui-Dropdown\.vscode-dropdown\s*\{[\s\S]*height:\s*26px\s*;/i,
    "Dropdown override missing 26px root height contract",
    errors,
  );
  assertContains(
    dropdownOverridesCss,
    /\.fui-Dropdown\.vscode-dropdown::after\s*\{[\s\S]*display:\s*none\s*!important/i,
    "Dropdown override missing Fluent focus-bar removal (::after display:none !important)",
    errors,
  );
  assertContains(
    dropdownOverridesCss,
    /\.fui-Dropdown\.vscode-dropdown\s+\.fui-Dropdown__button\s*\{[\s\S]*min-height:\s*unset\s*;/i,
    "Dropdown override missing trigger min-height reset",
    errors,
  );

  // 3d) Menu override contract checks
  assertContains(
    menuOverridesCss,
    /\.fui-MenuPopover\.vscode-menu\s*\{[\s\S]*animation:\s*none\s*!important/i,
    "Menu override missing animation disable contract",
    errors,
  );
  assertContains(
    menuOverridesCss,
    /\.fui-MenuPopover\.vscode-menu\s*\{[\s\S]*transition:\s*none\s*!important/i,
    "Menu override missing transition disable contract",
    errors,
  );
  assertContains(
    menuOverridesCss,
    /\.fui-MenuItem\.vscode-menu-item::after\s*\{[\s\S]*display:\s*none\s*!important/i,
    "Menu override missing item ::after removal contract",
    errors,
  );

  // 3e) Tab override contract checks
  assertContains(
    tabOverridesCss,
    /\.vscode-tab\s*\{[\s\S]*transition:\s*none\s*!important/i,
    "Tab override missing root transition disable contract",
    errors,
  );
  assertContains(
    tabOverridesCss,
    /\.vscode-tab::after\s*\{[\s\S]*transition:\s*none\s*!important/i,
    "Tab override missing ::after transition disable contract",
    errors,
  );
  assertContains(
    tabOverridesCss,
    /\.vscode-tab\s*\{[\s\S]*height:\s*28px\s*;/i,
    "Tab override missing default 28px height contract",
    errors,
  );

  // 4) Every override file should use VS Code tokens + Fluent selectors
  for (const file of overrideFiles) {
    const cssPath = path.join(paths.overrideDir, file);
    const css = read(cssPath);
    assertContains(
      css,
      /var\(--vscode-/,
      `Override file missing VS Code token usage: overrides/${file}`,
      errors,
    );
    assertContains(
      css,
      /\.fui-/,
      `Override file missing Fluent selector usage: overrides/${file}`,
      errors,
    );
  }

  if (errors.length > 0) {
    console.error("❌ Griffel guard failed:\n");
    for (const err of errors) {
      console.error(`- ${err}`);
    }
    process.exit(1);
  }

  console.log("✅ Griffel guard passed.");
}

main();
