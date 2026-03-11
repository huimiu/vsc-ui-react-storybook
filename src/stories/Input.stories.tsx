import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@fluentui/react-input";
import { Textarea } from "@fluentui/react-textarea";
import { SearchBox } from "@fluentui/react-search";
import { Field } from "@fluentui/react-field";
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

/* ── Textarea ────────────────────────────────────────────────────── */

export const TextareaStory: Story = {
  name: "Textarea",
  render: () => (
    <>
      <Section title="Textarea" description="Multi-line text input.">
        <Textarea
          className="vscode-textarea"
          placeholder="Describe your issue..."
          rows={4}
          style={{ minWidth: 320 }}
        />
      </Section>
      <Section title="Disabled Textarea">
        <Textarea
          className="vscode-textarea"
          disabled
          defaultValue="This field is disabled"
          rows={3}
          style={{ minWidth: 320 }}
        />
      </Section>
    </>
  ),
};

/* ── SearchBox ───────────────────────────────────────────────────── */

export const SearchBoxStory: Story = {
  name: "SearchBox",
  render: () => (
    <>
      <Section
        title="SearchBox"
        description="A search input with built-in search icon and dismiss action."
      >
        <Row>
          <SearchBox
            className="vscode-searchbox"
            placeholder="Search settings"
          />
        </Row>
      </Section>
      <Section title="Medium & Large">
        <Row>
          <Inline label="Medium">
            <SearchBox
              className="vscode-searchbox vscode-searchbox-medium"
              size="medium"
              placeholder="Search..."
            />
          </Inline>
          <Inline label="Large">
            <SearchBox
              className="vscode-searchbox vscode-searchbox-large"
              size="large"
              placeholder="Search everything..."
            />
          </Inline>
        </Row>
      </Section>
    </>
  ),
};

/* ── Field ───────────────────────────────────────────────────────── */

export const FieldStory: Story = {
  name: "Field",
  render: () => (
    <Section
      title="Field"
      description="Wraps an input with a label and optional validation message."
    >
      <div style={{ maxWidth: 360 }}>
        <Field
          label="Workspace Name"
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

/* ── Full Example ────────────────────────────────────────────────── */

export const SettingsForm: Story = {
  name: "Full Example — Settings Form",
  render: () => (
    <Section
      title="Settings Form"
      description="A settings form combining multiple input types."
    >
      <div style={{ maxWidth: 400 }}>
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
