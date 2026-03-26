import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TabList, Tab } from "@fluentui/react-tabs";
import {
  SettingsRegular,
  CodeRegular,
  WindowRegular,
  PuzzlePieceRegular,
} from "@fluentui/react-icons";

const meta: Meta<typeof TabList> = {
  title: "Components/Tabs",
  component: TabList,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TabList>;

/* ── Helpers ─────────────────────────────────────────────────────── */

const Section = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) => (
  <div style={{ marginBottom: 32 }}>
    <h3 style={{ margin: "0 0 12px", fontSize: 16, fontWeight: 600 }}>
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

/* ── Default Tabs ────────────────────────────────────────────────── */

export const DefaultTabs: Story = {
  name: "Default Tabs",
  render: () => (
    <>
      <Section
        title="Default (28px)"
        description="Body1 typography, 20px icons. This is the default size."
      >
        <TabList className="vscode-tablist" defaultSelectedValue="general">
          <Tab className="vscode-tab" value="general">
            General
          </Tab>
          <Tab className="vscode-tab" value="editor">
            Editor
          </Tab>
          <Tab className="vscode-tab" value="terminal">
            Terminal
          </Tab>
          <Tab className="vscode-tab" value="extensions">
            Extensions
          </Tab>
        </TabList>
      </Section>
      <Section
        title="Small (22px)"
        description="Caption1 typography, 16px icons."
      >
        <TabList
          className="vscode-tablist vscode-tablist-small"
          size="small"
          defaultSelectedValue="general"
        >
          <Tab className="vscode-tab" value="general">
            General
          </Tab>
          <Tab className="vscode-tab" value="editor">
            Editor
          </Tab>
          <Tab className="vscode-tab" value="terminal">
            Terminal
          </Tab>
          <Tab className="vscode-tab" value="extensions">
            Extensions
          </Tab>
        </TabList>
      </Section>
    </>
  ),
};

/* ── With Disabled Tab ───────────────────────────────────────────── */

export const WithDisabledTab: Story = {
  name: "With Disabled Tab",
  render: () => (
    <Section
      title="Disabled Tab"
      description="One tab is disabled and cannot be selected."
    >
      <TabList className="vscode-tablist" defaultSelectedValue="problems">
        <Tab className="vscode-tab" value="problems">
          Problems
        </Tab>
        <Tab className="vscode-tab" value="output">
          Output
        </Tab>
        <Tab className="vscode-tab" value="logs" disabled>
          Logs (disabled)
        </Tab>
      </TabList>
    </Section>
  ),
};

/* ── Vertical Tabs ───────────────────────────────────────────────── */

export const VerticalTabs: Story = {
  name: "Vertical Tabs",
  render: () => (
    <Section title="Vertical" description="TabList with vertical orientation.">
      <TabList
        className="vscode-tablist"
        vertical
        defaultSelectedValue="search"
      >
        <Tab className="vscode-tab" value="explorer">
          Explorer
        </Tab>
        <Tab className="vscode-tab" value="search">
          Search
        </Tab>
        <Tab className="vscode-tab" value="git">
          Source Control
        </Tab>
        <Tab className="vscode-tab" value="debug">
          Run and Debug
        </Tab>
      </TabList>
    </Section>
  ),
};

/* ── With Icons ──────────────────────────────────────────────────── */

export const WithIcons: Story = {
  name: "With Icons",
  render: () => (
    <>
      <Section
        title="Default with Icons"
        description="20px icons at default size."
      >
        <TabList className="vscode-tablist" defaultSelectedValue="general">
          <Tab
            className="vscode-tab"
            value="general"
            icon={<SettingsRegular />}
          >
            General
          </Tab>
          <Tab className="vscode-tab" value="editor" icon={<CodeRegular />}>
            Editor
          </Tab>
          <Tab className="vscode-tab" value="terminal" icon={<WindowRegular />}>
            Terminal
          </Tab>
          <Tab
            className="vscode-tab"
            value="extensions"
            icon={<PuzzlePieceRegular />}
          >
            Extensions
          </Tab>
        </TabList>
      </Section>
      <Section title="Small with Icons" description="16px icons at small size.">
        <TabList
          className="vscode-tablist vscode-tablist-small"
          size="small"
          defaultSelectedValue="general"
        >
          <Tab
            className="vscode-tab"
            value="general"
            icon={<SettingsRegular />}
          >
            General
          </Tab>
          <Tab className="vscode-tab" value="editor" icon={<CodeRegular />}>
            Editor
          </Tab>
          <Tab className="vscode-tab" value="terminal" icon={<WindowRegular />}>
            Terminal
          </Tab>
          <Tab
            className="vscode-tab"
            value="extensions"
            icon={<PuzzlePieceRegular />}
          >
            Extensions
          </Tab>
        </TabList>
      </Section>
    </>
  ),
};
