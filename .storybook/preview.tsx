import React from "react";
import type { Preview, Decorator } from "@storybook/react";
import { themes } from "@storybook/theming";
import { FluentProvider } from "@fluentui/react-provider";
import { webDarkTheme, webLightTheme } from "@fluentui/react-theme";

/* ── Global CSS ─────────────────────────────────────────────────── */
import "../styles/theme-tokens.css";

/* Override CSS — the product this repo showcases */
import "../overrides/vscode-button-overrides.css";
import "../overrides/vscode-dropdown-overrides.css";
import "../overrides/vscode-input-overrides.css";
import "../overrides/vscode-menu-overrides.css";

/* ── FluentProvider decorator ───────────────────────────────────── */
const withFluent: Decorator = (Story, context) => {
  const scheme = context.globals.scheme ?? "dark";
  const isDark = scheme === "dark";
  const theme = isDark ? webDarkTheme : webLightTheme;

  // Toggle body class so theme-tokens.css light overrides kick in
  document.body.className = isDark ? "" : "light-mode";

  // Force the entire preview iframe background (canvas + docs wrapper)
  document.body.style.background = isDark ? "#1e1e1e" : "#ffffff";
  document.body.style.color = isDark ? "#cccccc" : "#424242";

  // Force docs wrapper backgrounds via CSS custom properties
  document.documentElement.style.setProperty(
    "--sb-docs-bg",
    isDark ? "#1e1e1e" : "#ffffff",
  );
  document.documentElement.style.setProperty(
    "--sb-docs-color",
    isDark ? "#cccccc" : "#424242",
  );

  return (
    <FluentProvider theme={theme}>
      <div style={{ padding: "24px" }}>
        <Story />
      </div>
    </FluentProvider>
  );
};

const preview: Preview = {
  globalTypes: {
    scheme: {
      name: "Color Scheme",
      description: "Dark / Light mode",
      toolbar: {
        icon: "mirror",
        items: [
          { value: "dark", title: "Dark" },
          { value: "light", title: "Light" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    scheme: "dark",
  },
  decorators: [withFluent],
  parameters: {
    layout: "padded",
    backgrounds: { disable: true },
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;
