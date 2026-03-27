import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SearchBox } from "@fluentui/react-search";
import { Row, Section, Inline } from "./helpers";

const meta: Meta<typeof SearchBox> = {
  title: "Components/SearchBox",
  component: SearchBox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SearchBox>;

/* ── Default ─────────────────────────────────────────────────────── */

export const Default: Story = {
  name: "Default",
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
          <SearchBox
            className="vscode-searchbox"
            placeholder="Disabled"
            disabled
          />
        </Row>
      </Section>
    </>
  ),
};

/* ── Size Variants ───────────────────────────────────────────────── */

export const SizeVariants: Story = {
  name: "Size Variants",
  render: () => (
    <Section title="Size Variants">
      <Row>
        <Inline label="Small (24 px) — default">
          <SearchBox className="vscode-searchbox" placeholder="Search..." />
        </Inline>
        <Inline label="Medium (26 px)">
          <SearchBox
            className="vscode-searchbox vscode-searchbox-medium"
            size="medium"
            placeholder="Search..."
          />
        </Inline>
        <Inline label="Large (28 px)">
          <SearchBox
            className="vscode-searchbox vscode-searchbox-large"
            size="large"
            placeholder="Search everything..."
          />
        </Inline>
      </Row>
    </Section>
  ),
};
