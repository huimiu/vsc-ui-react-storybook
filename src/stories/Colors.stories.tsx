import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Design Language/Colors",
};

export default meta;
type Story = StoryObj;

/* ── Styles ──────────────────────────────────────────────────────── */

const sectionStyle: React.CSSProperties = {
  marginBottom: 48,
};

const headingStyle: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 600,
  marginBottom: 4,
};

const descStyle: React.CSSProperties = {
  fontSize: 13,
  opacity: 0.7,
  marginBottom: 24,
  lineHeight: 1.5,
  maxWidth: 640,
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: 16,
};

const swatchContainerStyle: React.CSSProperties = {
  borderRadius: 8,
  overflow: "hidden",
  border: "1px solid var(--page-border-color, #333)",
};

const swatchStyle: React.CSSProperties = {
  height: 64,
  width: "100%",
};

const swatchLabelStyle: React.CSSProperties = {
  padding: "10px 12px",
  fontSize: 12,
  lineHeight: 1.4,
  backgroundColor: "var(--preview-bg, #252526)",
};

const tokenNameStyle: React.CSSProperties = {
  display: "block",
  fontWeight: 600,
  fontSize: 12,
  marginBottom: 2,
};

const tokenVarStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "monospace",
  fontSize: 10,
  opacity: 0.6,
  wordBreak: "break-all",
};

/* ── Data ────────────────────────────────────────────────────────── */

interface ColorSwatch {
  name: string;
  token: string;
  darkValue: string;
  lightValue: string;
}

const baseColors: ColorSwatch[] = [
  {
    name: "Foreground",
    token: "--vscode-foreground",
    darkValue: "#cccccc",
    lightValue: "#424242",
  },
  {
    name: "Description Foreground",
    token: "--vscode-descriptionForeground",
    darkValue: "#9d9d9d",
    lightValue: "#717171",
  },
  {
    name: "Disabled Foreground",
    token: "--vscode-disabledForeground",
    darkValue: "rgba(204,204,204,0.5)",
    lightValue: "rgba(66,66,66,0.5)",
  },
  {
    name: "Error Foreground",
    token: "--vscode-errorForeground",
    darkValue: "#f48771",
    lightValue: "#a1260d",
  },
  {
    name: "Focus Border",
    token: "--vscode-focusBorder",
    darkValue: "#007fd4",
    lightValue: "#0078d4",
  },
  {
    name: "Icon Foreground",
    token: "--vscode-icon-foreground",
    darkValue: "#cccccc",
    lightValue: "#424242",
  },
  {
    name: "Link Foreground",
    token: "--vscode-textLink-foreground",
    darkValue: "#3794ff",
    lightValue: "#0066bf",
  },
  {
    name: "Link Active Foreground",
    token: "--vscode-textLink-activeForeground",
    darkValue: "#3794ff",
    lightValue: "#0066bf",
  },
];

const buttonColors: ColorSwatch[] = [
  {
    name: "Primary Background",
    token: "--vscode-button-background",
    darkValue: "#0078d4",
    lightValue: "#0078d4",
  },
  {
    name: "Primary Foreground",
    token: "--vscode-button-foreground",
    darkValue: "#ffffff",
    lightValue: "#ffffff",
  },
  {
    name: "Primary Hover",
    token: "--vscode-button-hoverBackground",
    darkValue: "#026ec1",
    lightValue: "#026ec1",
  },
  {
    name: "Primary Border",
    token: "--vscode-button-border",
    darkValue: "rgba(255,255,255,0.07)",
    lightValue: "rgba(0,0,0,0.07)",
  },
  {
    name: "Secondary Background",
    token: "--vscode-button-secondaryBackground",
    darkValue: "#313131",
    lightValue: "#e5e5e5",
  },
  {
    name: "Secondary Foreground",
    token: "--vscode-button-secondaryForeground",
    darkValue: "#cccccc",
    lightValue: "#424242",
  },
  {
    name: "Secondary Hover",
    token: "--vscode-button-secondaryHoverBackground",
    darkValue: "#3c3c3c",
    lightValue: "#cccccc",
  },
];

const inputColors: ColorSwatch[] = [
  {
    name: "Input Background",
    token: "--vscode-input-background",
    darkValue: "#3c3c3c",
    lightValue: "#ffffff",
  },
  {
    name: "Input Foreground",
    token: "--vscode-input-foreground",
    darkValue: "#cccccc",
    lightValue: "#616161",
  },
  {
    name: "Input Border",
    token: "--vscode-input-border",
    darkValue: "#474747",
    lightValue: "#cecece",
  },
  {
    name: "Placeholder",
    token: "--vscode-input-placeholderForeground",
    darkValue: "#9d9d9d",
    lightValue: "#767676",
  },
  {
    name: "Option Active Background",
    token: "--vscode-inputOption-activeBackground",
    darkValue: "rgba(36,137,219,0.51)",
    lightValue: "rgba(0,120,212,0.3)",
  },
  {
    name: "Validation Error Border",
    token: "--vscode-inputValidation-errorBorder",
    darkValue: "#be1100",
    lightValue: "#be1100",
  },
  {
    name: "Validation Warning Border",
    token: "--vscode-inputValidation-warningBorder",
    darkValue: "#9d5d00",
    lightValue: "#9d5d00",
  },
  {
    name: "Validation Info Border",
    token: "--vscode-inputValidation-infoBorder",
    darkValue: "#007acc",
    lightValue: "#007acc",
  },
];

const dropdownColors: ColorSwatch[] = [
  {
    name: "Dropdown Background",
    token: "--vscode-dropdown-background",
    darkValue: "#3c3c3c",
    lightValue: "#ffffff",
  },
  {
    name: "Dropdown Foreground",
    token: "--vscode-dropdown-foreground",
    darkValue: "#f0f0f0",
    lightValue: "#616161",
  },
  {
    name: "Dropdown Border",
    token: "--vscode-dropdown-border",
    darkValue: "#474747",
    lightValue: "#cecece",
  },
  {
    name: "Dropdown List Background",
    token: "--vscode-dropdown-listBackground",
    darkValue: "#252526",
    lightValue: "#ffffff",
  },
];

const menuColors: ColorSwatch[] = [
  {
    name: "Menu Background",
    token: "--vscode-menu-background",
    darkValue: "#1f1f1f",
    lightValue: "#ffffff",
  },
  {
    name: "Menu Foreground",
    token: "--vscode-menu-foreground",
    darkValue: "#cccccc",
    lightValue: "#3b3b3b",
  },
  {
    name: "Menu Border",
    token: "--vscode-menu-border",
    darkValue: "#454545",
    lightValue: "#c8c8c8",
  },
  {
    name: "Selection Background",
    token: "--vscode-menu-selectionBackground",
    darkValue: "#04395e",
    lightValue: "#0078d4",
  },
  {
    name: "Selection Foreground",
    token: "--vscode-menu-selectionForeground",
    darkValue: "#ffffff",
    lightValue: "#ffffff",
  },
  {
    name: "Separator",
    token: "--vscode-menu-separatorBackground",
    darkValue: "#454545",
    lightValue: "#d4d4d4",
  },
];

const listColors: ColorSwatch[] = [
  {
    name: "Active Selection BG",
    token: "--vscode-list-activeSelectionBackground",
    darkValue: "#04395e",
    lightValue: "#0060c0",
  },
  {
    name: "Active Selection FG",
    token: "--vscode-list-activeSelectionForeground",
    darkValue: "#ffffff",
    lightValue: "#ffffff",
  },
  {
    name: "Hover Background",
    token: "--vscode-list-hoverBackground",
    darkValue: "#2a2d2e",
    lightValue: "#e8e8e8",
  },
  {
    name: "Hover Foreground",
    token: "--vscode-list-hoverForeground",
    darkValue: "#cccccc",
    lightValue: "#424242",
  },
];

const tabColors: ColorSwatch[] = [
  {
    name: "Active Foreground",
    token: "--vscode-tab-activeForeground",
    darkValue: "#ffffff",
    lightValue: "#333333",
  },
  {
    name: "Inactive Foreground",
    token: "--vscode-tab-inactiveForeground",
    darkValue: "#9d9d9d",
    lightValue: "#717171",
  },
  {
    name: "Toolbar Hover BG",
    token: "--vscode-toolbar-hoverBackground",
    darkValue: "rgba(90,93,94,0.31)",
    lightValue: "rgba(0,0,0,0.08)",
  },
  {
    name: "Toolbar Active BG",
    token: "--vscode-toolbar-activeBackground",
    darkValue: "rgba(99,102,103,0.31)",
    lightValue: "rgba(0,0,0,0.12)",
  },
];

/* ── Swatch component ────────────────────────────────────────────── */

const Swatch = ({ color }: { color: ColorSwatch }) => (
  <div style={swatchContainerStyle}>
    <div
      style={{
        ...swatchStyle,
        backgroundColor: color.darkValue,
      }}
    />
    <div style={swatchLabelStyle}>
      <span style={tokenNameStyle}>{color.name}</span>
      <span style={tokenVarStyle}>var({color.token})</span>
      <span
        style={{
          display: "block",
          fontFamily: "monospace",
          fontSize: 10,
          opacity: 0.5,
          marginTop: 2,
        }}
      >
        Dark: {color.darkValue} · Light: {color.lightValue}
      </span>
    </div>
  </div>
);

/* ── Color Section component ─────────────────────────────────────── */

const ColorSection = ({
  title,
  description,
  colors,
}: {
  title: string;
  description?: string;
  colors: ColorSwatch[];
}) => (
  <div style={sectionStyle}>
    <h3 style={headingStyle}>{title}</h3>
    {description && <p style={descStyle}>{description}</p>}
    <div style={gridStyle}>
      {colors.map((c) => (
        <Swatch key={c.token} color={c} />
      ))}
    </div>
  </div>
);

/* ── Stories ─────────────────────────────────────────────────────── */

export const Overview: Story = {
  name: "Colors",
  render: () => (
    <div style={{ maxWidth: 960 }}>
      {/* ── Intro ─────────────────────────────────────────────── */}
      <div style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 8 }}>
          Colors
        </h2>
        <p style={descStyle}>
          Our VS Code extension components use only{" "}
          <strong>official VS Code color tokens</strong> (
          <code
            style={{
              fontFamily: "monospace",
              fontSize: 12,
              padding: "2px 6px",
              borderRadius: 3,
              backgroundColor: "var(--badge-bg, rgba(255,255,255,0.08))",
            }}
          >
            var(--vscode-*)
          </code>
          ). No custom colors are defined — all values come from the active VS
          Code theme at runtime.
        </p>
        <div
          style={{
            padding: "16px 20px",
            borderRadius: 8,
            border: "1px solid var(--page-border-color, #333)",
            backgroundColor: "var(--preview-bg, #252526)",
            marginBottom: 8,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 13,
              lineHeight: 1.6,
            }}
          >
            <strong>Why VS Code tokens?</strong> Using only official{" "}
            <code
              style={{
                fontFamily: "monospace",
                fontSize: 12,
                padding: "1px 4px",
                borderRadius: 3,
                backgroundColor: "var(--badge-bg, rgba(255,255,255,0.08))",
              }}
            >
              --vscode-*
            </code>{" "}
            CSS variables means our components automatically adapt to any
            user-installed theme — Dark+, Light+, Monokai, Solarized, high
            contrast, and all community themes. No hardcoded colors needed.
          </p>
        </div>
        <p style={{ fontSize: 12, opacity: 0.5, margin: "8px 0 0" }}>
          Reference:{" "}
          <a
            href="https://code.visualstudio.com/api/references/theme-color"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--vscode-textLink-foreground, #3794ff)" }}
          >
            VS Code Theme Color Reference
          </a>
        </p>
      </div>

      {/* ── Color Sections ────────────────────────────────────── */}
      <ColorSection
        title="Base & Foreground"
        description="Core foreground and status colors used across the UI."
        colors={baseColors}
      />
      <ColorSection
        title="Button"
        description="Primary and secondary button colors for actions."
        colors={buttonColors}
      />
      <ColorSection
        title="Input"
        description="Text inputs, search boxes, textareas, and validation states."
        colors={inputColors}
      />
      <ColorSection
        title="Dropdown"
        description="Dropdown triggers and dropdown list panels."
        colors={dropdownColors}
      />
      <ColorSection
        title="Menu"
        description="Context menus and menu bar items."
        colors={menuColors}
      />
      <ColorSection
        title="List"
        description="Selection and hover states for list items and trees."
        colors={listColors}
      />
      <ColorSection
        title="Tabs & Toolbar"
        description="Tab labels and subtle toolbar interactions."
        colors={tabColors}
      />
    </div>
  ),
};
