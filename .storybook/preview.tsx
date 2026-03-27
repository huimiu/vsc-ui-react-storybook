import React, { useEffect } from "react";
import type { Preview, Decorator } from "@storybook/react";
import { themes } from "@storybook/theming";
import { FluentProvider } from "@fluentui/react-provider";
import { webDarkTheme, webLightTheme } from "@fluentui/react-theme";
import { DocsPage } from "./DocsPage";

/* ── Global CSS ─────────────────────────────────────────────────── */
import "../styles/theme-tokens.css";
import "../styles/storybook-preview.css";

/* Override CSS — the product this repo showcases */
import "../overrides/vscode-button-overrides.css";
import "../overrides/vscode-dropdown-overrides.css";
import "../overrides/vscode-input-overrides.css";
import "../overrides/vscode-menu-overrides.css";
import "../overrides/vscode-tab-overrides.css";

const fluentThemeOverrides = {
  fontFamilyBase: "var(--vscode-font-family)",
  fontWeightRegular: "400",
  fontWeightSemibold: "600",
  fontSizeBase100: "10px",
  fontSizeBase200: "12px",
  fontSizeBase300: "14px",
  lineHeightBase100: "14px",
  lineHeightBase200: "16px",
  lineHeightBase300: "20px",
  colorBrandBackground: "var(--vscode-button-background)",
  colorBrandBackgroundHover: "var(--vscode-button-hoverBackground)",
  colorBrandBackgroundPressed: "var(--vscode-button-hoverBackground)",
  colorNeutralForegroundOnBrand: "var(--vscode-button-foreground)",
  colorNeutralForeground2: "var(--vscode-button-secondaryForeground)",
  colorNeutralForeground2Hover: "var(--vscode-button-secondaryForeground)",
  colorNeutralForeground2Pressed: "var(--vscode-button-secondaryForeground)",
  colorNeutralForeground2BrandHover: "var(--vscode-textLink-foreground)",
  colorNeutralForeground2BrandPressed:
    "var(--vscode-textLink-activeForeground)",
  colorSubtleBackground: "transparent",
  colorSubtleBackgroundHover: "var(--vscode-button-secondaryHoverBackground)",
  colorSubtleBackgroundPressed: "var(--vscode-button-secondaryHoverBackground)",
  colorTransparentBackgroundHover: "var(--vscode-toolbar-hoverBackground)",
  colorTransparentBackgroundPressed: "var(--vscode-toolbar-activeBackground)",
  colorStrokeFocus2: "var(--vscode-focusBorder)",
  colorNeutralForegroundDisabled: "var(--vscode-disabledForeground)",
};

/* ── FluentProvider decorator ───────────────────────────────────── */
const withFluent: Decorator = (Story, context) => {
  const scheme = context.globals.scheme ?? "dark";
  const isDark = scheme === "dark";
  const theme = {
    ...(isDark ? webDarkTheme : webLightTheme),
    ...fluentThemeOverrides,
  };

  useEffect(() => {
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

    document.documentElement.style.setProperty(
      "--vscode-font-family",
      '"Segoe UI", "Segoe UI Web (West European)", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
    );
  }, [isDark]);

  return (
    <FluentProvider theme={theme}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          padding: "24px",
          boxSizing: "border-box",
        }}
      >
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
    controls: { disable: true },
    docs: {
      theme: themes.dark,
      page: DocsPage,
      story: { inline: true, height: "auto" },
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Design Language",
          ["Typography", "Colors"],
          "Components",
          [
            "Button",
            "Input",
            "Textarea",
            "SearchBox",
            "Field",
            "Dropdown",
            "ContextMenu",
            "Tab",
          ],
        ],
      },
    },
  },
};

export default preview;
