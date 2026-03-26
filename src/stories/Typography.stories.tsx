import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Design Language/Typography",
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

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: 13,
};

const thStyle: React.CSSProperties = {
  textAlign: "left",
  padding: "8px 16px 8px 0",
  borderBottom: "1px solid var(--page-border-color, #333)",
  fontWeight: 600,
  fontSize: 11,
  textTransform: "uppercase",
  letterSpacing: 0.5,
  opacity: 0.6,
};

const tdStyle: React.CSSProperties = {
  padding: "12px 16px 12px 0",
  borderBottom: "1px solid var(--page-border-color, #333)",
  verticalAlign: "middle",
};

const changeTagStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "2px 8px",
  borderRadius: 4,
  fontSize: 11,
  fontWeight: 600,
  backgroundColor: "var(--vscode-button-background, #0078d4)",
  color: "var(--vscode-button-foreground, #fff)",
};

const unchangedTagStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "2px 8px",
  borderRadius: 4,
  fontSize: 11,
  fontWeight: 600,
  backgroundColor: "var(--badge-bg, rgba(255,255,255,0.08))",
  color: "var(--badge-text, #ccc)",
};

const codeStyle: React.CSSProperties = {
  fontFamily: "monospace",
  fontSize: 12,
  padding: "2px 6px",
  borderRadius: 3,
  backgroundColor: "var(--badge-bg, rgba(255,255,255,0.08))",
};

/* ── Data ────────────────────────────────────────────────────────── */

interface TypeRow {
  name: string;
  token: string;
  size: string;
  lineHeight: string;
  weight: string;
  sample: string;
  sampleStyle: React.CSSProperties;
}

const typeScale: TypeRow[] = [
  {
    name: "Caption 2",
    token: "fontSizeBase100",
    size: "10px",
    lineHeight: "14px",
    weight: "400 Regular",
    sample: "The quick brown fox jumps over the lazy dog",
    sampleStyle: { fontSize: 10, lineHeight: "14px", fontWeight: 400 },
  },
  {
    name: "Caption 2 Strong",
    token: "fontSizeBase100",
    size: "10px",
    lineHeight: "14px",
    weight: "600 Semibold",
    sample: "The quick brown fox jumps over the lazy dog",
    sampleStyle: { fontSize: 10, lineHeight: "14px", fontWeight: 600 },
  },
  {
    name: "Caption 1",
    token: "fontSizeBase200",
    size: "12px",
    lineHeight: "16px",
    weight: "400 Regular",
    sample: "The quick brown fox jumps over the lazy dog",
    sampleStyle: { fontSize: 12, lineHeight: "16px", fontWeight: 400 },
  },
  {
    name: "Caption 1 Strong",
    token: "fontSizeBase200",
    size: "12px",
    lineHeight: "16px",
    weight: "600 Semibold",
    sample: "The quick brown fox jumps over the lazy dog",
    sampleStyle: { fontSize: 12, lineHeight: "16px", fontWeight: 600 },
  },
  {
    name: "Caption 1 Stronger",
    token: "fontSizeBase200",
    size: "12px",
    lineHeight: "16px",
    weight: "700 Bold",
    sample: "The quick brown fox jumps over the lazy dog",
    sampleStyle: { fontSize: 12, lineHeight: "16px", fontWeight: 700 },
  },
  {
    name: "Body 1 (Default)",
    token: "fontSizeBase300",
    size: "14px",
    lineHeight: "20px",
    weight: "400 Regular",
    sample: "The quick brown fox jumps over the lazy dog",
    sampleStyle: { fontSize: 14, lineHeight: "20px", fontWeight: 400 },
  },
  {
    name: "Body 1 Strong",
    token: "fontSizeBase300",
    size: "14px",
    lineHeight: "20px",
    weight: "600 Semibold",
    sample: "The quick brown fox jumps over the lazy dog",
    sampleStyle: { fontSize: 14, lineHeight: "20px", fontWeight: 600 },
  },
  {
    name: "Body 1 Stronger",
    token: "fontSizeBase300",
    size: "14px",
    lineHeight: "20px",
    weight: "700 Bold",
    sample: "The quick brown fox jumps over the lazy dog",
    sampleStyle: { fontSize: 14, lineHeight: "20px", fontWeight: 700 },
  },
  {
    name: "Body 2",
    token: "fontSizeBase400",
    size: "16px",
    lineHeight: "22px",
    weight: "400 Regular",
    sample: "The quick brown fox jumps over the lazy dog",
    sampleStyle: { fontSize: 16, lineHeight: "22px", fontWeight: 400 },
  },
  {
    name: "Subtitle 2",
    token: "fontSizeBase400",
    size: "16px",
    lineHeight: "22px",
    weight: "600 Semibold",
    sample: "The quick brown fox jumps over the lazy dog",
    sampleStyle: { fontSize: 16, lineHeight: "22px", fontWeight: 600 },
  },
  {
    name: "Subtitle 2 Stronger",
    token: "fontSizeBase400",
    size: "16px",
    lineHeight: "22px",
    weight: "700 Bold",
    sample: "The quick brown fox jumps over the lazy dog",
    sampleStyle: { fontSize: 16, lineHeight: "22px", fontWeight: 700 },
  },
  {
    name: "Subtitle 1",
    token: "fontSizeBase500",
    size: "20px",
    lineHeight: "28px",
    weight: "600 Semibold",
    sample: "The quick brown fox jumps over the lazy dog",
    sampleStyle: { fontSize: 20, lineHeight: "28px", fontWeight: 600 },
  },
  {
    name: "Title 3",
    token: "fontSizeBase600",
    size: "24px",
    lineHeight: "32px",
    weight: "600 Semibold",
    sample: "The quick brown fox jumps over the lazy dog",
    sampleStyle: { fontSize: 24, lineHeight: "32px", fontWeight: 600 },
  },
  {
    name: "Title 2",
    token: "fontSizeHero700",
    size: "28px",
    lineHeight: "36px",
    weight: "600 Semibold",
    sample: "The quick brown fox jumps over the lazy dog",
    sampleStyle: { fontSize: 28, lineHeight: "36px", fontWeight: 600 },
  },
  {
    name: "Title 1",
    token: "fontSizeHero800",
    size: "32px",
    lineHeight: "40px",
    weight: "600 Semibold",
    sample: "The quick brown fox jumps",
    sampleStyle: { fontSize: 32, lineHeight: "40px", fontWeight: 600 },
  },
  {
    name: "Large Title",
    token: "fontSizeHero900",
    size: "40px",
    lineHeight: "52px",
    weight: "600 Semibold",
    sample: "The quick brown fox",
    sampleStyle: { fontSize: 40, lineHeight: "52px", fontWeight: 600 },
  },
  {
    name: "Display",
    token: "fontSizeHero1000",
    size: "68px",
    lineHeight: "92px",
    weight: "600 Semibold",
    sample: "Display",
    sampleStyle: { fontSize: 68, lineHeight: "92px", fontWeight: 600 },
  },
];

/* ── Stories ─────────────────────────────────────────────────────── */

export const Overview: Story = {
  name: "Typography",
  render: () => (
    <div style={{ maxWidth: 900 }}>
      {/* ── Intro ──────────────────────────────────────────────── */}
      <div style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 8 }}>
          Typography
        </h2>
        <p style={{ ...descStyle, marginBottom: 16 }}>
          Our VS Code extension components use the same Fluent 2 type scale as
          the base design system, with one key override:
        </p>
        <div
          style={{
            padding: "16px 20px",
            borderRadius: 8,
            border: "1px solid var(--page-border-color, #333)",
            backgroundColor: "var(--preview-bg, #252526)",
            marginBottom: 24,
          }}
        >
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6 }}>
            <strong>Font family changed:</strong>{" "}
            <span
              style={{
                textDecoration: "line-through",
                opacity: 0.5,
              }}
            >
              Segoe UI
            </span>{" "}
            → <span style={{ fontWeight: 600 }}>SF Pro Text</span>
          </p>
          <p
            style={{
              margin: "8px 0 0",
              fontSize: 12,
              opacity: 0.6,
              lineHeight: 1.5,
            }}
          >
            All other typography settings — sizes, line heights, and weights —
            remain unchanged from the Fluent 2 defaults.
          </p>
        </div>
      </div>

      {/* ── Font Family ────────────────────────────────────────── */}
      <div style={sectionStyle}>
        <h3 style={headingStyle}>Font Family</h3>
        <p style={descStyle}>
          VS Code's UI uses the system font stack. On macOS, which is the
          primary environment for our extension, this maps to SF Pro Text.
        </p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Context</th>
              <th style={thStyle}>Font Stack</th>
              <th style={thStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>
                <strong>VS Code Override</strong>
              </td>
              <td style={tdStyle}>
                <code style={codeStyle}>
                  "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI",
                  Roboto, sans-serif
                </code>
              </td>
              <td style={tdStyle}>
                <span style={changeTagStyle}>Changed</span>
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>Fluent 2 Default</td>
              <td style={tdStyle}>
                <code style={codeStyle}>
                  "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto,
                  "Helvetica Neue", sans-serif
                </code>
              </td>
              <td style={tdStyle}>
                <span style={unchangedTagStyle}>Original</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── Type Scale ─────────────────────────────────────────── */}
      <div style={sectionStyle}>
        <h3 style={headingStyle}>Type Scale</h3>
        <p style={descStyle}>
          The type scale follows standard Fluent 2 sizing. No changes have been
          made to font sizes, line heights, or font weights.
        </p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Token</th>
              <th style={thStyle}>Size / Line Height</th>
              <th style={thStyle}>Weight</th>
              <th style={thStyle}>Preview</th>
            </tr>
          </thead>
          <tbody>
            {typeScale.map((row) => (
              <tr key={row.name}>
                <td style={tdStyle}>
                  <strong>{row.name}</strong>
                </td>
                <td style={tdStyle}>
                  <code style={codeStyle}>{row.token}</code>
                </td>
                <td style={tdStyle}>
                  {row.size} / {row.lineHeight}
                </td>
                <td style={tdStyle}>{row.weight}</td>
                <td style={{ ...tdStyle, maxWidth: 260 }}>
                  <span style={row.sampleStyle}>{row.sample}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Font Weights ───────────────────────────────────────── */}
      <div style={sectionStyle}>
        <h3 style={headingStyle}>Font Weights</h3>
        <p style={descStyle}>
          Four weights are defined in Fluent 2, unchanged from defaults.
        </p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Weight</th>
              <th style={thStyle}>Value</th>
              <th style={thStyle}>Usage</th>
              <th style={thStyle}>Preview</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>
                <strong>Regular</strong>
              </td>
              <td style={tdStyle}>
                <code style={codeStyle}>400</code>
              </td>
              <td style={tdStyle}>Body text, labels, descriptions</td>
              <td style={tdStyle}>
                <span style={{ fontWeight: 400, fontSize: 14 }}>
                  Regular weight text
                </span>
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>
                <strong>Medium</strong>
              </td>
              <td style={tdStyle}>
                <code style={codeStyle}>500</code>
              </td>
              <td style={tdStyle}>Secondary emphasis</td>
              <td style={tdStyle}>
                <span style={{ fontWeight: 500, fontSize: 14 }}>
                  Medium weight text
                </span>
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>
                <strong>Semibold</strong>
              </td>
              <td style={tdStyle}>
                <code style={codeStyle}>600</code>
              </td>
              <td style={tdStyle}>Headings, buttons, emphasis</td>
              <td style={tdStyle}>
                <span style={{ fontWeight: 600, fontSize: 14 }}>
                  Semibold weight text
                </span>
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>
                <strong>Bold</strong>
              </td>
              <td style={tdStyle}>
                <code style={codeStyle}>700</code>
              </td>
              <td style={tdStyle}>Stronger variants (e.g. Body 1 Stronger)</td>
              <td style={tdStyle}>
                <span style={{ fontWeight: 700, fontSize: 14 }}>
                  Bold weight text
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
};
