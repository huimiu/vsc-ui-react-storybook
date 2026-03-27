import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@fluentui/react-input";
import { SearchRegular } from "@fluentui/react-icons";
import { Row, Section, Inline } from "./helpers";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

/* ── Text Input ──────────────────────────────────────────────────── */

export const TextInput: Story = {
  name: "Text Input",
  render: () => (
    <>
      <Section title="Default (26 px)">
        <Row>
          <Input className="vscode-input" placeholder="Enter a value..." />
          <Input className="vscode-input" placeholder="Disabled" disabled />
        </Row>
      </Section>
      <Section title="Small (24 px)">
        <Row>
          <Input
            className="vscode-input vscode-input-small"
            size="small"
            placeholder="Small input"
          />
        </Row>
      </Section>
      <Section title="Large (28 px)">
        <Row>
          <Input
            className="vscode-input vscode-input-large"
            size="large"
            placeholder="Large input"
          />
        </Row>
      </Section>
      <Section title="With Icon">
        <Row>
          <Input
            className="vscode-input vscode-input-with-icon"
            contentBefore={<SearchRegular />}
            placeholder="Filter by name..."
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
          <Input
            className="vscode-input vscode-input-error"
            defaultValue="bad-value"
          />
        </Inline>
        <Inline label="Warning">
          <Input
            className="vscode-input vscode-input-warning"
            defaultValue="check this"
          />
        </Inline>
        <Inline label="Info">
          <Input
            className="vscode-input vscode-input-info"
            defaultValue="FYI"
          />
        </Inline>
      </Row>
    </Section>
  ),
};
