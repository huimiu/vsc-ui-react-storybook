import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Field } from "@fluentui/react-field";
import { Input } from "@fluentui/react-input";
import { Textarea } from "@fluentui/react-textarea";
import { Section } from "./helpers";

const meta: Meta<typeof Field> = {
  title: "Components/Field",
  component: Field,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Field>;

/* ── Default ─────────────────────────────────────────────────────── */

export const Default: Story = {
  name: "Default",
  render: () => (
    <Section
      title="Field"
      description="Wraps an input with a label and optional validation message."
    >
      <div style={{ maxWidth: 360 }}>
        <Field
          label={
            <span className="vscode-field-label-row">
              <span className="vscode-field-label-text">Workspace Name</span>
              <span className="vscode-field-required-indicator">*</span>
            </span>
          }
          required
          className="vscode-field"
          style={{ marginBottom: 16 }}
        >
          <Input className="vscode-input" placeholder="my-workspace" />
        </Field>
        <Field
          label="Description"
          className="vscode-field"
          style={{ marginBottom: 16 }}
        >
          <Textarea
            className="vscode-textarea"
            placeholder="Optional description..."
            rows={3}
          />
        </Field>
        <Field
          label="Port"
          validationState="error"
          validationMessage="Port must be between 0 and 65535"
          className="vscode-field"
        >
          <Input
            className="vscode-input vscode-input-error"
            defaultValue="-1"
          />
        </Field>
      </div>
    </Section>
  ),
};

/* ── Full Example — Settings Form ────────────────────────────────── */

export const SettingsForm: Story = {
  name: "Full Example — Settings Form",
  render: () => (
    <Section
      title="Settings Form"
      description="A settings form combining multiple input types."
    >
      <div style={{ width: "100%", maxWidth: 640 }}>
        <Field
          label="Editor: Font Family"
          hint="Controls the font family. Accepts a comma-separated list."
          className="vscode-field"
          style={{ marginBottom: 16 }}
        >
          <Input
            className="vscode-input"
            defaultValue="'Cascadia Code', 'Fira Code', monospace"
          />
        </Field>
        <Field
          label="Editor: Font Size"
          className="vscode-field"
          style={{ marginBottom: 16 }}
        >
          <Input
            className="vscode-input vscode-input-small"
            type="number"
            defaultValue="14"
            style={{ width: 80 }}
          />
        </Field>
        <Field label="Terminal: Shell Args" className="vscode-field">
          <Textarea
            className="vscode-textarea"
            defaultValue="--login"
            rows={2}
          />
        </Field>
      </div>
    </Section>
  ),
};
