import { Fragment } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import "../../overrides/vscode-button-overrides.css";
import {
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup,
  MenuGroupHeader,
  MenuItemCheckbox,
  MenuItemRadio,
} from "@fluentui/react-menu";
import { Button } from "@fluentui/react-button";
import {
  CutRegular,
  CopyRegular,
  ClipboardPasteRegular,
  DeleteRegular,
  ArrowUndoRegular,
  ArrowRedoRegular,
  SelectAllOnRegular,
  RenameRegular,
  DocumentRegular,
  FolderRegular,
  FolderOpenRegular,
  SettingsRegular,
} from "@fluentui/react-icons";
import { Section } from "./helpers";

const StoryRoot = Fragment;

const meta: Meta = {
  title: "Components/Context Menu",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

/* ── Basic Context Menu ──────────────────────────────────────────── */

export const BasicMenu: Story = {
  name: "Basic Context Menu",
  render: () => (
    <StoryRoot>
      <Section
        title="Basic Context Menu"
        description="Right-click style menu with icons, keyboard shortcuts, and dividers."
      >
        <div
          className="fui-MenuPopover vscode-menu"
          style={{ width: "fit-content", position: "relative" }}
        >
          <MenuList className="vscode-menu">
            <MenuItem
              className="vscode-menu-item"
              icon={<CutRegular />}
              secondaryContent="Ctrl+X"
            >
              Cut
            </MenuItem>
            <MenuItem
              className="vscode-menu-item"
              icon={<CopyRegular />}
              secondaryContent="Ctrl+C"
            >
              Copy
            </MenuItem>
            <MenuItem
              className="vscode-menu-item"
              icon={<ClipboardPasteRegular />}
              secondaryContent="Ctrl+V"
            >
              Paste
            </MenuItem>
            <MenuDivider className="vscode-menu-divider" />
            <MenuItem
              className="vscode-menu-item"
              icon={<SelectAllOnRegular />}
              secondaryContent="Ctrl+A"
            >
              Select All
            </MenuItem>
          </MenuList>
        </div>
      </Section>
    </StoryRoot>
  ),
};

/* ── Interactive (click to open) ─────────────────────────────────── */

export const Interactive: Story = {
  name: "Interactive (Click to Open)",
  render: () => (
    <Section
      title="Interactive Menu"
      description="Click the button to open the menu."
    >
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <Button appearance="outline" className="vscode-outline">
            Right-click Menu
          </Button>
        </MenuTrigger>
        <MenuPopover className="vscode-menu-popover">
          <MenuList className="vscode-menu">
            <MenuItem
              className="vscode-menu-item"
              icon={<CutRegular />}
              secondaryContent="Ctrl+X"
            >
              Cut
            </MenuItem>
            <MenuItem
              className="vscode-menu-item"
              icon={<CopyRegular />}
              secondaryContent="Ctrl+C"
            >
              Copy
            </MenuItem>
            <MenuItem
              className="vscode-menu-item"
              icon={<ClipboardPasteRegular />}
              secondaryContent="Ctrl+V"
            >
              Paste
            </MenuItem>
            <MenuDivider className="vscode-menu-divider" />
            <MenuItem
              className="vscode-menu-item"
              icon={<ArrowUndoRegular />}
              secondaryContent="Ctrl+Z"
            >
              Undo
            </MenuItem>
            <MenuItem
              className="vscode-menu-item"
              icon={<ArrowRedoRegular />}
              secondaryContent="Ctrl+Shift+Z"
            >
              Redo
            </MenuItem>
            <MenuDivider className="vscode-menu-divider" />
            <MenuItem
              className="vscode-menu-item"
              icon={<SelectAllOnRegular />}
              secondaryContent="Ctrl+A"
            >
              Select All
            </MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </Section>
  ),
};

/* ── With Groups ─────────────────────────────────────────────────── */

export const WithGroups: Story = {
  name: "With Groups",
  render: () => (
    <Section
      title="Grouped Menu"
      description="Menu items organized into logical groups with headers."
    >
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <Button appearance="outline" className="vscode-outline">
            File Menu
          </Button>
        </MenuTrigger>
        <MenuPopover className="vscode-menu-popover">
          <MenuList className="vscode-menu">
            <MenuGroup>
              <MenuGroupHeader className="vscode-menu-group-header">
                New
              </MenuGroupHeader>
              <MenuItem className="vscode-menu-item" icon={<DocumentRegular />}>
                New File
              </MenuItem>
              <MenuItem className="vscode-menu-item" icon={<FolderRegular />}>
                New Folder
              </MenuItem>
            </MenuGroup>
            <MenuDivider className="vscode-menu-divider" />
            <MenuGroup>
              <MenuGroupHeader className="vscode-menu-group-header">
                Open
              </MenuGroupHeader>
              <MenuItem
                className="vscode-menu-item"
                icon={<FolderOpenRegular />}
                secondaryContent="Ctrl+O"
              >
                Open File
              </MenuItem>
              <MenuItem
                className="vscode-menu-item"
                icon={<FolderOpenRegular />}
              >
                Open Folder
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </MenuPopover>
      </Menu>
    </Section>
  ),
};

/* ── Checkboxes & Radio ──────────────────────────────────────────── */

export const CheckboxesAndRadio: Story = {
  name: "Checkboxes & Radio",
  render: () => (
    <Section
      title="Checkbox & Radio Menu Items"
      description="Toggle options and radio groups in menus."
    >
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <Button appearance="outline" className="vscode-outline">
            View Options
          </Button>
        </MenuTrigger>
        <MenuPopover className="vscode-menu-popover">
          <MenuList
            className="vscode-menu"
            checkedValues={{
              view: ["minimap", "breadcrumbs"],
              wordWrap: ["on"],
            }}
          >
            <MenuGroup>
              <MenuGroupHeader className="vscode-menu-group-header">
                Toggle
              </MenuGroupHeader>
              <MenuItemCheckbox
                className="vscode-menu-item"
                name="view"
                value="minimap"
              >
                Show Minimap
              </MenuItemCheckbox>
              <MenuItemCheckbox
                className="vscode-menu-item"
                name="view"
                value="breadcrumbs"
              >
                Show Breadcrumbs
              </MenuItemCheckbox>
              <MenuItemCheckbox
                className="vscode-menu-item"
                name="view"
                value="statusbar"
              >
                Show Status Bar
              </MenuItemCheckbox>
            </MenuGroup>
            <MenuDivider className="vscode-menu-divider" />
            <MenuGroup>
              <MenuGroupHeader className="vscode-menu-group-header">
                Word Wrap
              </MenuGroupHeader>
              <MenuItemRadio
                className="vscode-menu-item"
                name="wordWrap"
                value="off"
              >
                Off
              </MenuItemRadio>
              <MenuItemRadio
                className="vscode-menu-item"
                name="wordWrap"
                value="on"
              >
                On
              </MenuItemRadio>
              <MenuItemRadio
                className="vscode-menu-item"
                name="wordWrap"
                value="bounded"
              >
                Bounded
              </MenuItemRadio>
            </MenuGroup>
          </MenuList>
        </MenuPopover>
      </Menu>
    </Section>
  ),
};

/* ── Disabled Items ──────────────────────────────────────────────── */

export const DisabledItems: Story = {
  name: "Disabled Items",
  render: () => (
    <Section
      title="Disabled Items"
      description="Some menu items can be disabled."
    >
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <Button appearance="outline" className="vscode-outline">
            Edit Menu
          </Button>
        </MenuTrigger>
        <MenuPopover className="vscode-menu-popover">
          <MenuList className="vscode-menu">
            <MenuItem
              className="vscode-menu-item"
              icon={<ArrowUndoRegular />}
              secondaryContent="Ctrl+Z"
              disabled
            >
              Undo
            </MenuItem>
            <MenuItem
              className="vscode-menu-item"
              icon={<ArrowRedoRegular />}
              secondaryContent="Ctrl+Shift+Z"
              disabled
            >
              Redo
            </MenuItem>
            <MenuDivider className="vscode-menu-divider" />
            <MenuItem
              className="vscode-menu-item"
              icon={<CutRegular />}
              secondaryContent="Ctrl+X"
            >
              Cut
            </MenuItem>
            <MenuItem
              className="vscode-menu-item"
              icon={<CopyRegular />}
              secondaryContent="Ctrl+C"
            >
              Copy
            </MenuItem>
            <MenuItem
              className="vscode-menu-item"
              icon={<DeleteRegular />}
              secondaryContent="Del"
            >
              Delete
            </MenuItem>
            <MenuItem
              className="vscode-menu-item"
              icon={<RenameRegular />}
              secondaryContent="F2"
            >
              Rename
            </MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </Section>
  ),
};

/* ── Nested / Sub-menu ───────────────────────────────────────────── */

export const NestedMenu: Story = {
  name: "Nested / Sub-menu",
  render: () => (
    <Section title="Nested Menu" description="Menu items can open sub-menus.">
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <Button appearance="outline" className="vscode-outline">
            Preferences
          </Button>
        </MenuTrigger>
        <MenuPopover className="vscode-menu-popover">
          <MenuList className="vscode-menu">
            <MenuItem className="vscode-menu-item" icon={<SettingsRegular />}>
              Settings
            </MenuItem>
            <Menu>
              <MenuTrigger disableButtonEnhancement>
                <MenuItem className="vscode-menu-item">Theme →</MenuItem>
              </MenuTrigger>
              <MenuPopover className="vscode-menu-popover">
                <MenuList className="vscode-menu">
                  <MenuItem className="vscode-menu-item">Dark+</MenuItem>
                  <MenuItem className="vscode-menu-item">Light+</MenuItem>
                  <MenuItem className="vscode-menu-item">Monokai</MenuItem>
                  <MenuItem className="vscode-menu-item">
                    Solarized Dark
                  </MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
            <MenuDivider className="vscode-menu-divider" />
            <MenuItem className="vscode-menu-item">Keyboard Shortcuts</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </Section>
  ),
};
