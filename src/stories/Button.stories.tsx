import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, SplitButton, MenuButton } from "@fluentui/react-button";
import {
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
} from "@fluentui/react-menu";
import {
  AddRegular,
  PlayRegular,
  FolderOpenRegular,
  SettingsRegular,
  MoreHorizontalRegular,
  EditRegular,
  DismissRegular,
  ArrowUndoRegular,
  PhoneRegular,
  InfoRegular,
  SplitVerticalRegular,
  ArrowSyncRegular,
  ChevronLeftRegular,
} from "@fluentui/react-icons";

/* ===================================================================
   BUTTON
   =================================================================== */

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    appearance: {
      control: "select",
      options: ["primary", "secondary", "outline", "subtle", "transparent"],
    },
    disabled: { control: "boolean" },
    size: { control: "select", options: ["small", "medium", "large"] },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/* ── Helpers ─────────────────────────────────────────────────────── */

const Row = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label?: string;
}) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      alignItems: "center",
      marginBottom: 8,
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
    <h3 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 600 }}>
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

/* ── Primary ─────────────────────────────────────────────────────── */

export const Primary: Story = {
  render: () => (
    <>
      <Section title="Default (28 px)">
        <Row>
          <Button appearance="primary" className="vscode-primary">
            Install
          </Button>
          <Button appearance="primary" className="vscode-primary" disabled>
            Install
          </Button>
        </Row>
        <Row>
          <Button
            appearance="primary"
            className="vscode-primary"
            icon={<AddRegular />}
          >
            New File
          </Button>
          <Button
            appearance="primary"
            className="vscode-primary vscode-icon-only"
            icon={<AddRegular />}
            aria-label="Add"
          />
        </Row>
      </Section>
      <Section title="Small (22 px)">
        <Row>
          <Button appearance="primary" className="vscode-primary vscode-small">
            Run
          </Button>
          <Button
            appearance="primary"
            className="vscode-primary vscode-small"
            disabled
          >
            Run
          </Button>
          <Button
            appearance="primary"
            className="vscode-primary vscode-small vscode-icon-only"
            icon={<PlayRegular />}
            aria-label="Play"
          />
        </Row>
      </Section>
      <Section title="Compact (15 px)">
        <Row>
          <Button
            appearance="primary"
            className="vscode-primary vscode-compact"
          >
            Badge
          </Button>
          <Button
            appearance="primary"
            className="vscode-primary vscode-compact"
            disabled
          >
            Badge
          </Button>
        </Row>
      </Section>
    </>
  ),
};

/* ── Secondary ───────────────────────────────────────────────────── */

export const Secondary: Story = {
  render: () => (
    <>
      <Section title="Default (28 px)">
        <Row>
          <Button className="vscode-secondary">Cancel</Button>
          <Button className="vscode-secondary" disabled>
            Cancel
          </Button>
        </Row>
        <Row>
          <Button className="vscode-secondary" icon={<FolderOpenRegular />}>
            Open Folder
          </Button>
          <Button
            className="vscode-secondary vscode-icon-only"
            icon={<SettingsRegular />}
            aria-label="Settings"
          />
        </Row>
      </Section>
      <Section title="Small (22 px)">
        <Row>
          <Button className="vscode-secondary vscode-small">Details</Button>
          <Button className="vscode-secondary vscode-small" disabled>
            Details
          </Button>
          <Button
            className="vscode-secondary vscode-small vscode-icon-only"
            icon={<MoreHorizontalRegular />}
            aria-label="More"
          />
        </Row>
      </Section>
      <Section title="Compact (15 px)">
        <Row>
          <Button className="vscode-secondary vscode-compact">Tag</Button>
          <Button className="vscode-secondary vscode-compact" disabled>
            Tag
          </Button>
        </Row>
      </Section>
    </>
  ),
};

/* ── Outline ─────────────────────────────────────────────────────── */

export const Outline: Story = {
  render: () => (
    <>
      <Section title="Default (28 px)">
        <Row>
          <Button appearance="outline" className="vscode-outline">
            Learn More
          </Button>
          <Button appearance="outline" className="vscode-outline" disabled>
            Learn More
          </Button>
        </Row>
        <Row>
          <Button
            appearance="outline"
            className="vscode-outline"
            icon={<PhoneRegular />}
          >
            Preview
          </Button>
          <Button
            appearance="outline"
            className="vscode-outline vscode-icon-only"
            icon={<InfoRegular />}
            aria-label="Info"
          />
        </Row>
      </Section>
      <Section title="Small (22 px)">
        <Row>
          <Button appearance="outline" className="vscode-outline vscode-small">
            View
          </Button>
          <Button
            appearance="outline"
            className="vscode-outline vscode-small"
            disabled
          >
            View
          </Button>
        </Row>
      </Section>
      <Section title="Compact (15 px)">
        <Row>
          <Button
            appearance="outline"
            className="vscode-outline vscode-compact"
          >
            Link
          </Button>
          <Button
            appearance="outline"
            className="vscode-outline vscode-compact"
            disabled
          >
            Link
          </Button>
        </Row>
      </Section>
    </>
  ),
};

/* ── Subtle ──────────────────────────────────────────────────────── */

export const Subtle: Story = {
  render: () => (
    <>
      <Section title="Default (28 px)">
        <Row>
          <Button appearance="subtle" className="vscode-subtle">
            Edit
          </Button>
          <Button appearance="subtle" className="vscode-subtle" disabled>
            Edit
          </Button>
        </Row>
        <Row>
          <Button
            appearance="subtle"
            className="vscode-subtle"
            icon={<EditRegular />}
          >
            Rename
          </Button>
          <Button
            appearance="subtle"
            className="vscode-subtle vscode-icon-only"
            icon={<DismissRegular />}
            aria-label="Close"
          />
        </Row>
      </Section>
      <Section title="Small (22 px)">
        <Row>
          <Button appearance="subtle" className="vscode-subtle vscode-small">
            Undo
          </Button>
          <Button
            appearance="subtle"
            className="vscode-subtle vscode-small"
            disabled
          >
            Undo
          </Button>
          <Button
            appearance="subtle"
            className="vscode-subtle vscode-small vscode-icon-only"
            icon={<ArrowUndoRegular />}
            aria-label="Undo"
          />
        </Row>
      </Section>
      <Section title="Compact (15 px)">
        <Row>
          <Button appearance="subtle" className="vscode-subtle vscode-compact">
            ×
          </Button>
          <Button
            appearance="subtle"
            className="vscode-subtle vscode-compact"
            disabled
          >
            ×
          </Button>
        </Row>
      </Section>
    </>
  ),
};

/* ── Transparent ─────────────────────────────────────────────────── */

export const Transparent: Story = {
  render: () => (
    <>
      <Section title="Default (28 px)">
        <Row>
          <Button appearance="transparent" className="vscode-transparent">
            Dismiss
          </Button>
          <Button
            appearance="transparent"
            className="vscode-transparent"
            disabled
          >
            Dismiss
          </Button>
        </Row>
        <Row>
          <Button
            appearance="transparent"
            className="vscode-transparent vscode-icon-only"
            icon={<ArrowSyncRegular />}
            aria-label="Refresh"
          />
          <Button
            appearance="transparent"
            className="vscode-transparent vscode-icon-only"
            icon={<SplitVerticalRegular />}
            aria-label="Split Editor"
          />
          <Button
            appearance="transparent"
            className="vscode-transparent vscode-icon-only"
            icon={<DismissRegular />}
            aria-label="Close"
          />
        </Row>
      </Section>
      <Section title="Small (22 px)">
        <Row>
          <Button
            appearance="transparent"
            className="vscode-transparent vscode-small vscode-icon-only"
            icon={<DismissRegular />}
            aria-label="Close"
          />
          <Button
            appearance="transparent"
            className="vscode-transparent vscode-small vscode-icon-only"
            icon={<DismissRegular />}
            aria-label="Close"
            disabled
          />
        </Row>
      </Section>
      <Section title="Compact (15 px)">
        <Row>
          <Button
            appearance="transparent"
            className="vscode-transparent vscode-compact vscode-icon-only"
            icon={<ChevronLeftRegular />}
            aria-label="Collapse"
          />
          <Button
            appearance="transparent"
            className="vscode-transparent vscode-compact vscode-icon-only"
            icon={<ChevronLeftRegular />}
            aria-label="Collapse"
            disabled
          />
        </Row>
      </Section>
    </>
  ),
};

/* ── Icon-Only All Appearances ───────────────────────────────────── */

export const IconOnly: Story = {
  name: "Icon-Only",
  render: () => (
    <>
      <Section
        title="Icon-Only Buttons"
        description="Combine .vscode-icon-only with any appearance. Always provide aria-label."
      >
        <Row label="Default 28 px">
          <Button
            appearance="primary"
            className="vscode-primary vscode-icon-only"
            icon={<AddRegular />}
            aria-label="Add"
          />
          <Button
            className="vscode-secondary vscode-icon-only"
            icon={<SettingsRegular />}
            aria-label="Settings"
          />
          <Button
            appearance="outline"
            className="vscode-outline vscode-icon-only"
            icon={<InfoRegular />}
            aria-label="Info"
          />
          <Button
            appearance="subtle"
            className="vscode-subtle vscode-icon-only"
            icon={<DismissRegular />}
            aria-label="Close"
          />
          <Button
            appearance="transparent"
            className="vscode-transparent vscode-icon-only"
            icon={<SplitVerticalRegular />}
            aria-label="Split"
          />
        </Row>
        <Row label="Small 22 px">
          <Button
            appearance="primary"
            className="vscode-primary vscode-small vscode-icon-only"
            icon={<AddRegular />}
            aria-label="Add"
          />
          <Button
            className="vscode-secondary vscode-small vscode-icon-only"
            icon={<SettingsRegular />}
            aria-label="Settings"
          />
          <Button
            appearance="subtle"
            className="vscode-subtle vscode-small vscode-icon-only"
            icon={<DismissRegular />}
            aria-label="Close"
          />
          <Button
            appearance="transparent"
            className="vscode-transparent vscode-small vscode-icon-only"
            icon={<SplitVerticalRegular />}
            aria-label="Split"
          />
        </Row>
        <Row label="Compact 15 px">
          <Button
            appearance="primary"
            className="vscode-primary vscode-compact vscode-icon-only"
            icon={<AddRegular />}
            aria-label="Add"
          />
          <Button
            className="vscode-secondary vscode-compact vscode-icon-only"
            icon={<SettingsRegular />}
            aria-label="Settings"
          />
          <Button
            appearance="subtle"
            className="vscode-subtle vscode-compact vscode-icon-only"
            icon={<DismissRegular />}
            aria-label="Close"
          />
        </Row>
      </Section>
    </>
  ),
};

/* ── Split Button ────────────────────────────────────────────────── */

export const SplitButtonStory: Story = {
  name: "Split Button",
  render: () => (
    <>
      <Section title="Primary Split">
        <Row>
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              {(triggerProps) => (
                <SplitButton
                  appearance="primary"
                  className="vscode-primary"
                  menuButton={triggerProps}
                >
                  Run Task
                </SplitButton>
              )}
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem>Run Build Task</MenuItem>
                <MenuItem>Run Test Task</MenuItem>
                <MenuItem>Configure Tasks</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              {(triggerProps) => (
                <SplitButton
                  appearance="primary"
                  className="vscode-primary"
                  menuButton={triggerProps}
                  disabled
                >
                  Run Task
                </SplitButton>
              )}
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem>Run Build Task</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        </Row>
      </Section>
      <Section title="Secondary Split">
        <Row>
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              {(triggerProps) => (
                <SplitButton
                  className="vscode-secondary"
                  menuButton={triggerProps}
                >
                  Save As
                </SplitButton>
              )}
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem>Save as File</MenuItem>
                <MenuItem>Save as Template</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        </Row>
      </Section>
      <Section title="Outline Split">
        <Row>
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              {(triggerProps) => (
                <SplitButton
                  appearance="outline"
                  className="vscode-outline"
                  menuButton={triggerProps}
                >
                  Export
                </SplitButton>
              )}
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem>Export as PDF</MenuItem>
                <MenuItem>Export as CSV</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        </Row>
      </Section>
    </>
  ),
};

/* ── Menu Button ─────────────────────────────────────────────────── */

export const MenuButtonStory: Story = {
  name: "Menu Button",
  render: () => (
    <Section
      title="Menu Button"
      description="A single button with a built-in chevron that opens a menu."
    >
      <Row>
        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <MenuButton appearance="primary" className="vscode-primary">
              New
            </MenuButton>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItem>New File</MenuItem>
              <MenuItem>New Folder</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <MenuButton className="vscode-secondary">Open Recent</MenuButton>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItem>project-a</MenuItem>
              <MenuItem>project-b</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <MenuButton appearance="outline" className="vscode-outline">
              Filter
            </MenuButton>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItem>By Name</MenuItem>
              <MenuItem>By Date</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <MenuButton appearance="subtle" className="vscode-subtle">
              Sort
            </MenuButton>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItem>Ascending</MenuItem>
              <MenuItem>Descending</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
      </Row>
    </Section>
  ),
};

/* ── Interactive States Grid ─────────────────────────────────────── */

export const InteractiveStates: Story = {
  name: "Interactive States",
  render: () => {
    const appearances = [
      "primary",
      "secondary",
      "outline",
      "subtle",
      "transparent",
    ] as const;
    const classMap: Record<string, string> = {
      primary: "vscode-primary",
      secondary: "vscode-secondary",
      outline: "vscode-outline",
      subtle: "vscode-subtle",
      transparent: "vscode-transparent",
    };
    return (
      <Section
        title="Interactive States"
        description="All five appearances support rest, hover, focus, and disabled states."
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "100px repeat(3, auto)",
            gap: "8px 16px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontWeight: 600,
              fontSize: 11,
              textTransform: "uppercase",
            }}
          >
            Appearance
          </div>
          <div
            style={{
              fontWeight: 600,
              fontSize: 11,
              textTransform: "uppercase",
            }}
          >
            Rest
          </div>
          <div
            style={{
              fontWeight: 600,
              fontSize: 11,
              textTransform: "uppercase",
            }}
          >
            Focus
          </div>
          <div
            style={{
              fontWeight: 600,
              fontSize: 11,
              textTransform: "uppercase",
            }}
          >
            Disabled
          </div>
          {appearances.map((a) => (
            <React.Fragment key={a}>
              <div style={{ fontSize: 12, textTransform: "capitalize" }}>
                {a}
              </div>
              <div>
                <Button
                  appearance={a === "secondary" ? undefined : a}
                  className={classMap[a]}
                >
                  OK
                </Button>
              </div>
              <div>
                <Button
                  appearance={a === "secondary" ? undefined : a}
                  className={classMap[a]}
                  style={{
                    outline: "1px solid var(--vscode-focusBorder)",
                    outlineOffset: 2,
                  }}
                >
                  OK
                </Button>
              </div>
              <div>
                <Button
                  appearance={a === "secondary" ? undefined : a}
                  className={classMap[a]}
                  disabled
                >
                  OK
                </Button>
              </div>
            </React.Fragment>
          ))}
        </div>
      </Section>
    );
  },
};

/* ── Full Example (Dialog Footer) ────────────────────────────────── */

export const DialogFooter: Story = {
  name: "Full Example — Dialog Footer",
  render: () => (
    <Section
      title="Dialog Footer"
      description="A typical dialog footer combining primary, secondary, and subtle buttons."
    >
      <div
        style={{
          display: "flex",
          gap: 8,
          justifyContent: "flex-end",
          padding: "12px 0",
          borderTop: "1px solid var(--vscode-button-border)",
        }}
      >
        <Button appearance="subtle" className="vscode-subtle">
          Don't Save
        </Button>
        <Button className="vscode-secondary">Cancel</Button>
        <Button appearance="primary" className="vscode-primary">
          Save
        </Button>
      </div>
    </Section>
  ),
};
