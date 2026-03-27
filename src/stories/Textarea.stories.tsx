import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@fluentui/react-textarea";
import { Row, Section, Inline } from "./helpers";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

/* ── Default ─────────────────────────────────────────────────────── */

export const Default: Story = {
  name: "Default",
  render: () => (
    <>
      <Section title="Textarea" description="Multi-line text input.">
        <Row>
          <Textarea
            className="vscode-textarea"
            placeholder="Describe your issue..."
            rows={4}
            style={{ minWidth: 320 }}
          />
          <Textarea
            className="vscode-textarea"
            disabled
            defaultValue="This field is disabled"
            rows={4}
            style={{ minWidth: 320 }}
          />
        </Row>
      </Section>
      <Section title="Read-only">
        <Row>
          <Textarea
            className="vscode-textarea"
            readOnly
            defaultValue="This content is read-only and cannot be edited."
            rows={3}
            style={{ minWidth: 320 }}
          />
        </Row>
      </Section>
    </>
  ),
};

/* ── Validation States ───────────────────────────────────────────── */

export const ValidationStates: Story = {
  name: "Validation States",
  render: () => (
    <Section
      title="Validation States"
      description="Add a validation class to indicate form errors, warnings, or info."
    >
      <Row>
        <Inline label="Error">
          <Textarea
            className="vscode-textarea vscode-input-error"
            defaultValue="Invalid content"
            rows={3}
            style={{ minWidth: 240 }}
          />
        </Inline>
        <Inline label="Warning">
          <Textarea
            className="vscode-textarea vscode-input-warning"
            defaultValue="Check this content"
            rows={3}
            style={{ minWidth: 240 }}
          />
        </Inline>
        <Inline label="Info">
          <Textarea
            className="vscode-textarea vscode-input-info"
            defaultValue="FYI"
            rows={3}
            style={{ minWidth: 240 }}
          />
        </Inline>
      </Row>
    </Section>
  ),
};

/* ── Small ───────────────────────────────────────────────────────── */

export const Small: Story = {
  name: "Small",
  render: () => (
    <Section
      title="Small Textarea"
      description="Compact textarea with smaller padding and font."
    >
      <Row>
        <Textarea
          className="vscode-textarea vscode-textarea-small"
          placeholder="Small textarea..."
          rows={3}
          style={{ minWidth: 320 }}
        />
      </Row>
    </Section>
  ),
};
