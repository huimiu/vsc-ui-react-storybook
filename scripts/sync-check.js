#!/usr/bin/env node

/**
 * sync-check.js — Verify this Storybook site stays aligned with the NPM package.
 *
 * What it does:
 *   1. Fetches the package's src/index.ts from GitHub to discover exported components.
 *   2. Compares those exports against the local component registry (layout.js).
 *   3. Checks that each component has an HTML preview page and an override CSS file.
 *   4. Reports missing or extra items.
 *
 * Usage:
 *   node scripts/sync-check.js
 *
 * Exit codes:
 *   0 — Everything in sync
 *   1 — Drift detected (missing page, override, or registry entry)
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

/* ========================================================================== */
/*  CONFIG                                                                     */
/* ========================================================================== */

const PACKAGE_INDEX_URL =
  "https://raw.githubusercontent.com/huimiu/vsc-ui-react/main/src/index.ts";

// Map from NPM-export name → expected file names in this repo.
// This is the canonical mapping. When a new component is added to the package,
// add a row here.
const COMPONENT_MAP = {
  VscButton: {
    slug: "button",
    page: "components/button.html",
    override: "overrides/vscode-button-overrides.css",
  },
  // ── Future components ──────────────────────────────────────────────────
  // VscDropdown: {
  //   slug:     'dropdown',
  //   page:     'components/dropdown.html',
  //   override: 'overrides/vscode-dropdown-overrides.css',
  // },
  // VscInput: {
  //   slug:     'input',
  //   page:     'components/input.html',
  //   override: 'overrides/vscode-input-overrides.css',
  // },
  // VscMenu: {
  //   slug:     'context-menu',
  //   page:     'components/context-menu.html',
  //   override: 'overrides/vscode-menu-overrides.css',
  // },
};

/* ========================================================================== */
/*  HELPERS                                                                    */
/* ========================================================================== */

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          res.resume();
          return;
        }
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

/**
 * Parse `export { Foo } from '...'` and `export type { ... }` lines.
 * Returns an array of component names (ignoring type-only exports).
 */
function parseExports(indexSource) {
  const exports = [];
  // Match named exports: `export { A, B } from '...'`
  const re = /export\s+\{([^}]+)\}\s+from\s+['"]([^'"]+)['"]/g;
  let match;
  while ((match = re.exec(indexSource)) !== null) {
    // Skip type-only re-exports (e.g. `export type { VscButtonProps }`)
    const lineStart = indexSource.lastIndexOf("\n", match.index) + 1;
    const line = indexSource.slice(lineStart, match.index + match[0].length);
    if (/export\s+type\s+\{/.test(line)) continue;
    // Split the names list to handle multi-export statements
    const names = match[1].split(",").map((n) => n.trim()).filter(Boolean);
    exports.push(...names);
  }
  return exports;
}

/* ========================================================================== */
/*  MAIN                                                                       */
/* ========================================================================== */

async function main() {
  const root = path.resolve(__dirname, "..");
  let exitCode = 0;

  console.log("🔍  Fetching package index from GitHub…\n");

  let remoteSource;
  try {
    remoteSource = await fetchText(PACKAGE_INDEX_URL);
  } catch (err) {
    console.error(`❌  Could not fetch package index: ${err.message}`);
    console.log("    Falling back to local COMPONENT_MAP only.\n");
    remoteSource = null;
  }

  // ── Discover remote exports ────────────────────────────────────────────
  const remoteExports = remoteSource ? parseExports(remoteSource) : [];

  if (remoteExports.length) {
    console.log(`📦  Package exports: ${remoteExports.join(", ")}\n`);
  }

  // ── Check for components in the package that we don't track locally ────
  for (const name of remoteExports) {
    if (!COMPONENT_MAP[name]) {
      console.log(
        `⚠️   ${name} is exported by the package but NOT in COMPONENT_MAP.`,
      );
      console.log(`     → Add a mapping in scripts/sync-check.js`);
      console.log(`     → Create components/<slug>.html`);
      console.log(`     → Create overrides/vscode-<slug>-overrides.css`);
      console.log(`     → Add an entry in scripts/layout.js\n`);
      exitCode = 1;
    }
  }

  // ── Verify each tracked component has the required local files ─────────
  for (const [name, { slug, page, override }] of Object.entries(
    COMPONENT_MAP,
  )) {
    const pagePath = path.join(root, page);
    const overridePath = path.join(root, override);

    const hasPage = fs.existsSync(pagePath);
    const hasOverride = fs.existsSync(overridePath);

    if (!hasPage) {
      console.log(`❌  Missing preview page for ${name}: ${page}`);
      exitCode = 1;
    }
    if (!hasOverride) {
      console.log(`❌  Missing override CSS for ${name}: ${override}`);
      exitCode = 1;
    }
    if (hasPage && hasOverride) {
      console.log(`✅  ${name} — page ✓  override ✓`);
    }
  }

  // ── Check layout.js registry ───────────────────────────────────────────
  const layoutPath = path.join(root, "scripts", "layout.js");
  if (fs.existsSync(layoutPath)) {
    const layoutSrc = fs.readFileSync(layoutPath, "utf8");
    for (const [name, { slug }] of Object.entries(COMPONENT_MAP)) {
      if (
        !layoutSrc.includes(`'${slug}'`) &&
        !layoutSrc.includes(`"${slug}"`)
      ) {
        console.log(
          `⚠️   ${name} (slug: ${slug}) not found in layout.js registry.`,
        );
        exitCode = 1;
      }
    }
  }

  console.log("");
  if (exitCode === 0) {
    console.log("🎉  All components are in sync!");
  } else {
    console.log("💡  Some components need attention. See details above.");
  }

  process.exit(exitCode);
}

main();
