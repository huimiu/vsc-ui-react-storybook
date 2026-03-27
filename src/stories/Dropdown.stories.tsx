import type { Meta, StoryObj } from "@storybook/react";
import {
  Dropdown,
  Combobox,
  Listbox,
  Option,
  OptionGroup,
} from "@fluentui/react-combobox";
import { Field } from "@fluentui/react-field";
import { Row, Section, Inline } from "./helpers";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

/* ── Dropdown Trigger ────────────────────────────────────────────── */

export const DropdownTrigger: Story = {
  name: "Dropdown Trigger",
  render: () => (
    <>
      <Section title="Default (26 px)">
        <Row>
          <Dropdown
            className="vscode-dropdown"
            placeholder="Select a theme"
            defaultValue="Dark+"
          >
            <Option className="vscode-option">Dark+</Option>
            <Option className="vscode-option">Light+</Option>
            <Option className="vscode-option">Monokai</Option>
          </Dropdown>
          <Dropdown className="vscode-dropdown" placeholder="Disabled" disabled>
            <Option className="vscode-option">Disabled</Option>
          </Dropdown>
        </Row>
      </Section>
      <Section title="Small (24 px)">
        <Row>
          <Dropdown
            className="vscode-dropdown vscode-dropdown-small"
            placeholder="Small trigger"
            size="small"
          >
            <Option className="vscode-option">Option A</Option>
            <Option className="vscode-option">Option B</Option>
          </Dropdown>
        </Row>
      </Section>
      <Section title="Large (28 px)">
        <Row>
          <Dropdown
            className="vscode-dropdown vscode-dropdown-large"
            placeholder="Large trigger"
            size="large"
          >
            <Option className="vscode-option">Option X</Option>
            <Option className="vscode-option">Option Y</Option>
          </Dropdown>
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
      description="Add a validation class to indicate error, warning, or info."
    >
      <Row>
        <Inline label="Error">
          <Dropdown
            className="vscode-dropdown vscode-dropdown-error"
            defaultValue="Required field"
          >
            <Option className="vscode-option">Required field</Option>
          </Dropdown>
        </Inline>
        <Inline label="Warning">
          <Dropdown
            className="vscode-dropdown vscode-dropdown-warning"
            defaultValue="Check value"
          >
            <Option className="vscode-option">Check value</Option>
          </Dropdown>
        </Inline>
        <Inline label="Info">
          <Dropdown
            className="vscode-dropdown vscode-dropdown-info"
            defaultValue="Optional"
          >
            <Option className="vscode-option">Optional</Option>
          </Dropdown>
        </Inline>
      </Row>
    </Section>
  ),
};

/* ── Combobox ────────────────────────────────────────────────────── */

export const ComboboxStory: Story = {
  name: "Combobox",
  render: () => (
    <Section
      title="Combobox"
      description="An editable dropdown with a text input."
    >
      <Row>
        <Combobox className="vscode-combobox" placeholder="Search languages...">
          <Option className="vscode-option">JavaScript</Option>
          <Option className="vscode-option">TypeScript</Option>
          <Option className="vscode-option">Python</Option>
          <Option className="vscode-option">Rust</Option>
          <Option className="vscode-option">Go</Option>
        </Combobox>
        <Combobox className="vscode-combobox" placeholder="Disabled" disabled>
          <Option className="vscode-option">Disabled</Option>
        </Combobox>
      </Row>
    </Section>
  ),
};

/* ── Listbox & Options ───────────────────────────────────────────── */

export const ListboxOptions: Story = {
  name: "Listbox & Options",
  render: () => (
    <>
      <Section title="Basic Options">
        <div style={{ maxWidth: 280 }}>
          <Listbox className="vscode-listbox">
            <Option className="vscode-option">Dark+ (default dark)</Option>
            <Option className="vscode-option">Light+ (default light)</Option>
            <Option className="vscode-option">Monokai</Option>
            <Option className="vscode-option">Solarized Dark</Option>
            <Option className="vscode-option" disabled>
              High Contrast (disabled)
            </Option>
          </Listbox>
        </div>
      </Section>
      <Section title="Option Groups">
        <div style={{ maxWidth: 280 }}>
          <Listbox className="vscode-listbox">
            <OptionGroup className="vscode-optiongroup" label="Recent">
              <Option className="vscode-option">JavaScript</Option>
              <Option className="vscode-option">TypeScript</Option>
            </OptionGroup>
            <OptionGroup className="vscode-optiongroup" label="All Languages">
              <Option className="vscode-option">C++</Option>
              <Option className="vscode-option">Python</Option>
              <Option className="vscode-option">Rust</Option>
            </OptionGroup>
          </Listbox>
        </div>
      </Section>
    </>
  ),
};

/* ── Full Example ────────────────────────────────────────────────── */

export const SettingsForm: Story = {
  name: "Full Example — Settings Form",
  render: () => (
    <Section
      title="Settings Form"
      description="A settings-style form using dropdown + combobox."
    >
      <div style={{ width: "100%", maxWidth: 560 }}>
        <Field
          label="Color Theme"
          className="vscode-field"
          style={{ marginBottom: 16 }}
        >
          <Dropdown
            className="vscode-dropdown"
            defaultValue="Dark+ (default dark)"
          >
            <Option className="vscode-option">Dark+ (default dark)</Option>
            <Option className="vscode-option">Light+ (default light)</Option>
            <Option className="vscode-option">Monokai</Option>
          </Dropdown>
        </Field>
        <Field label="Font Family" className="vscode-field">
          <Combobox className="vscode-combobox" defaultValue="Cascadia Code">
            <Option className="vscode-option">Cascadia Code</Option>
            <Option className="vscode-option">Fira Code</Option>
            <Option className="vscode-option">JetBrains Mono</Option>
          </Combobox>
        </Field>
      </div>
    </Section>
  ),
};
