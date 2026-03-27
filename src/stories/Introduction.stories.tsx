import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Introduction",
};

export default meta;
type Story = StoryObj;

/* ── Styles ──────────────────────────────────────────────────────── */

const sectionStyle: React.CSSProperties = {
  marginBottom: 40,
};

const headingStyle: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 600,
  marginBottom: 8,
};

const descStyle: React.CSSProperties = {
  fontSize: 13,
  opacity: 0.7,
  lineHeight: 1.6,
  maxWidth: 640,
};

const codeBlock: React.CSSProperties = {
  fontFamily: "monospace",
  fontSize: 13,
  lineHeight: 1.6,
  padding: "16px 20px",
  borderRadius: 6,
  backgroundColor: "var(--code-bg, #1e1e1e)",
  border: "1px solid var(--code-border, #333)",
  overflow: "auto",
  whiteSpace: "pre",
};

const inlineCode: React.CSSProperties = {
  fontFamily: "monospace",
  fontSize: 12,
  padding: "2px 6px",
  borderRadius: 3,
  backgroundColor: "var(--badge-bg, rgba(255,255,255,0.08))",
};

const linkStyle: React.CSSProperties = {
  color: "var(--vscode-textLink-foreground, #3794ff)",
  textDecoration: "none",
};

/* ── Story ───────────────────────────────────────────────────────── */

export const Introduction: Story = {
  name: "Introduction",
  render: () => (
    <div style={{ maxWidth: 720 }}>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <div style={{ marginBottom: 48 }}>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginBottom: 8 }}>
          vsc-ui-react
        </h1>
        <p style={{ fontSize: 15, opacity: 0.7, lineHeight: 1.6, margin: 0 }}>
          VS Code styled Fluent UI components for React. This Storybook previews
          every component exported by the{" "}
          <a
            href="https://www.npmjs.com/package/vsc-ui-react"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            vsc-ui-react
          </a>{" "}
          NPM package with VS Code theme overrides applied.
        </p>
      </div>

      {/* ── Prerequisites & Setup ────────────────────────────── */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Prerequisites</h2>
        <ul style={{ ...descStyle, paddingLeft: 20, margin: "0 0 16px" }}>
          <li>
            <strong>React 18+</strong> and <strong>ReactDOM 18+</strong>
          </li>
          <li>
            <strong>@fluentui/react-components</strong> (peer dependency,
            auto-installed with npm v7+)
          </li>
          <li>
            A VS Code extension webview environment, or any React app where you
            want VS Code–styled components
          </li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Install</h2>
        <div style={codeBlock}>npm install vsc-ui-react</div>
        <p style={{ ...descStyle, marginTop: 12 }}>
          <code style={inlineCode}>@fluentui/react-components</code>,{" "}
          <code style={inlineCode}>react</code>, and{" "}
          <code style={inlineCode}>react-dom</code> are peer dependencies and
          will be installed automatically (npm v7+).
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Quick Start</h2>
        <p style={descStyle}>
          Wrap your app in a <code style={inlineCode}>FluentProvider</code>,
          then import any component:
        </p>
        <div style={{ ...codeBlock, marginTop: 12 }}>
          {`import { FluentProvider, webDarkTheme } from '@fluentui/react-components';
import { VscButton } from 'vsc-ui-react';

export function App() {
  return (
    <FluentProvider theme={webDarkTheme}>
      <VscButton appearance="primary" compact>
        Save
      </VscButton>
    </FluentProvider>
  );
}`}
        </div>
      </div>

      {/* ── Questions ────────────────────────────────────────── */}
      <div
        style={{
          ...sectionStyle,
          padding: "20px 24px",
          borderRadius: 8,
          border: "1px solid var(--page-border-color, #333)",
          backgroundColor: "var(--preview-bg, #252526)",
        }}
      >
        <h2 style={{ ...headingStyle, marginBottom: 12 }}>Questions?</h2>
        <p style={{ ...descStyle, margin: "0 0 12px" }}>
          This project is maintained by:
        </p>
        <table style={{ fontSize: 13, borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={{ padding: "4px 24px 4px 0", fontWeight: 600 }}>
                Amy Chen
              </td>
              <td style={{ padding: "4px 0" }}>
                <a
                  href="https://github.com/si-jin-chen"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  @si-jin-chen
                </a>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "4px 24px 4px 0", fontWeight: 600 }}>
                Hui Miao
              </td>
              <td style={{ padding: "4px 0" }}>
                <a
                  href="https://github.com/huimiu"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  @huimiu
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <p style={{ ...descStyle, margin: "16px 0 0", fontSize: 12 }}>
          Source:{" "}
          <a
            href="https://github.com/huimiu/vsc-ui-react"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            github.com/huimiu/vsc-ui-react
          </a>
        </p>
      </div>
    </div>
  ),
};
