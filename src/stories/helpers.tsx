import React from "react";

/* ── Shared story layout helpers ─────────────────────────────────── */
/* PREVIEW ONLY — these are not part of the vsc-ui-react package.     */

export const Row = ({
  children,
  label,
  style,
}: {
  children: React.ReactNode;
  label?: string;
  style?: React.CSSProperties;
}) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: 16,
      alignItems: "flex-start",
      marginBottom: 12,
      ...style,
    }}
  >
    {label && (
      <span
        style={{
          fontSize: 11,
          opacity: 0.6,
          minWidth: 80,
          textTransform: "uppercase",
          letterSpacing: 0.5,
          fontWeight: 600,
        }}
      >
        {label}
      </span>
    )}
    {children}
  </div>
);

export const Section = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) => (
  <div style={{ marginBottom: 32 }}>
    <h3 style={{ margin: "0 0 4px", fontSize: 13, fontWeight: 600 }}>
      {title}
    </h3>
    {description && (
      <p style={{ margin: "0 0 12px", fontSize: 13, opacity: 0.7 }}>
        {description}
      </p>
    )}
    {children}
  </div>
);

export const Inline = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div style={{ display: "inline-flex", flexDirection: "column", gap: 4 }}>
    <span
      style={{
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: 0.5,
        fontWeight: 600,
        opacity: 0.6,
      }}
    >
      {label}
    </span>
    {children}
  </div>
);
