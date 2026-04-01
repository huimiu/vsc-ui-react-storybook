import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Menu,
  MenuTrigger,
  VscButton,
  VscMenuButton,
  VscMenuItem,
  VscMenuList,
  VscMenuPopover,
  VscSplitButton,
} from "vsc-ui-react";
import {
  AddRegular,
  ArrowSyncRegular,
  ArrowUndoRegular,
  ChevronLeftRegular,
  EditRegular,
  FolderOpenRegular,
  InfoRegular,
  PhoneRegular,
  PlayRegular,
} from "@fluentui/react-icons";
import { Section } from "./helpers";

const meta: Meta<typeof VscButton> = {
  title: "Components/Button",
  component: VscButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof VscButton>;

type SupportedAppearance =
  | "primary"
  | "secondary"
  | "outline"
  | "subtle"
  | "transparent";

type SupportedSize = "medium" | "small" | "compact";
type ButtonKind = "text" | "iconText" | "iconOnly";
type PreviewState = "rest" | "hover" | "focus" | "disabled";

const appearances: SupportedAppearance[] = [
  "primary",
  "secondary",
  "outline",
  "subtle",
  "transparent",
];

const previewStates: PreviewState[] = ["rest", "hover", "focus", "disabled"];

const stateLabels: Record<PreviewState, string> = {
  rest: "Rest",
  hover: "Hover",
  focus: "Focus / Selected",
  disabled: "Disabled",
};

const appearanceLabels: Record<SupportedAppearance, string> = {
  primary: "Primary",
  secondary: "Secondary",
  outline: "Outline",
  subtle: "Subtle",
  transparent: "Transparent",
};

const rowDefinitions: Array<{
  label: string;
  size: SupportedSize;
  kind: ButtonKind;
}> = [
  { label: "Text Default", size: "medium", kind: "text" },
  { label: "Text Small", size: "small", kind: "text" },
  { label: "Text Compact", size: "compact", kind: "text" },
  { label: "Icon+Text Default", size: "medium", kind: "iconText" },
  { label: "Icon+Text Small", size: "small", kind: "iconText" },
  { label: "Icon+Text Compact", size: "compact", kind: "iconText" },
  { label: "Icon Default", size: "medium", kind: "iconOnly" },
  { label: "Icon Small", size: "small", kind: "iconOnly" },
  { label: "Icon Compact", size: "compact", kind: "iconOnly" },
];

const buttonIconsByAppearance = {
  primary: <AddRegular />,
  secondary: <FolderOpenRegular />,
  outline: <InfoRegular />,
  subtle: <EditRegular />,
  transparent: <ArrowSyncRegular />,
};

const splitIconsByAppearance = {
  primary: <PlayRegular />,
  secondary: <FolderOpenRegular />,
  outline: <PhoneRegular />,
  subtle: <ArrowUndoRegular />,
  transparent: <ArrowSyncRegular />,
};

const menuIconsByAppearance = {
  primary: <PlayRegular />,
  secondary: <FolderOpenRegular />,
  outline: <PhoneRegular />,
  subtle: <ArrowUndoRegular />,
  transparent: <ArrowSyncRegular />,
};

function previewClassName(
  component: "button" | "split",
  appearance: SupportedAppearance,
  state: PreviewState,
) {
  return [
    "storybook-button-preview",
    `storybook-button-preview--${component}`,
    `storybook-button-preview--${appearance}`,
    `storybook-button-preview--${state}`,
  ].join(" ");
}

function buttonForGrid(
  appearance: SupportedAppearance,
  size: SupportedSize,
  kind: ButtonKind,
  state: PreviewState,
) {
  const sharedProps = {
    appearance,
    ...(size !== "medium" ? { size } : {}),
    ...(state === "disabled" ? { disabled: true } : {}),
  } as const;

  if (kind === "iconOnly") {
    return (
      <div className={previewClassName("button", appearance, state)}>
        <VscButton
          {...sharedProps}
          icon={
            appearance === "transparent" && size === "compact" ? (
              <ChevronLeftRegular />
            ) : (
              buttonIconsByAppearance[appearance]
            )
          }
          aria-label={`${appearanceLabels[appearance]} ${size} icon button`}
        />
      </div>
    );
  }

  if (kind === "iconText") {
    return (
      <div className={previewClassName("button", appearance, state)}>
        <VscButton {...sharedProps} icon={buttonIconsByAppearance[appearance]}>
          Text
        </VscButton>
      </div>
    );
  }

  return (
    <div className={previewClassName("button", appearance, state)}>
      <VscButton {...sharedProps}>Text</VscButton>
    </div>
  );
}

function splitButtonForGrid(
  appearance: SupportedAppearance,
  size: SupportedSize = "medium",
  kind: ButtonKind,
  state: PreviewState,
) {
  const items = ["Action One", "Action Two"];
  const label = kind === "iconOnly" ? undefined : "Text";
  const icon = kind === "text" ? undefined : splitIconsByAppearance[appearance];

  return (
    <div className={previewClassName("split", appearance, state)}>
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          {(triggerProps) => (
            <VscSplitButton
              appearance={appearance}
              {...(size !== "medium" ? { size } : {})}
              {...(icon ? { icon } : {})}
              menuButton={triggerProps}
              disabled={state === "disabled"}
              aria-label={
                kind === "iconOnly"
                  ? `${appearanceLabels[appearance]} ${size} split button`
                  : undefined
              }
            >
              {label}
            </VscSplitButton>
          )}
        </MenuTrigger>
        <VscMenuPopover>
          <VscMenuList>
            {items.map((item) => (
              <VscMenuItem key={item}>{item}</VscMenuItem>
            ))}
          </VscMenuList>
        </VscMenuPopover>
      </Menu>
    </div>
  );
}

function AppearanceGrid({ appearance }: { appearance: SupportedAppearance }) {
  return (
    <Section title={appearanceLabels[appearance]}>
      <div className="storybook-button-grid">
        <div className="storybook-button-grid__table">
          <div className="storybook-button-grid__header storybook-button-grid__header--row" />
          {previewStates.map((state) => (
            <div key={state} className="storybook-button-grid__header">
              {stateLabels[state]}
            </div>
          ))}
          {rowDefinitions.map((row) => {
            return (
              <React.Fragment key={`${appearance}-${row.label}`}>
                <div className="storybook-button-grid__rowLabel">
                  {row.label}
                </div>
                {previewStates.map((state) => (
                  <div
                    key={`${appearance}-${row.label}-${state}`}
                    className="storybook-button-grid__cell"
                  >
                    {buttonForGrid(appearance, row.size, row.kind, state)}
                  </div>
                ))}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function SplitAppearanceGrid({
  appearance,
}: {
  appearance: SupportedAppearance;
}) {
  return (
    <Section title={appearanceLabels[appearance]}>
      <div className="storybook-button-grid">
        <div className="storybook-button-grid__table">
          <div className="storybook-button-grid__header storybook-button-grid__header--row" />
          {previewStates.map((state) => (
            <div key={state} className="storybook-button-grid__header">
              {stateLabels[state]}
            </div>
          ))}
          {rowDefinitions.map((row) => (
            <React.Fragment key={`split-${appearance}-${row.label}`}>
              <div className="storybook-button-grid__rowLabel">{row.label}</div>
              {previewStates.map((state) => (
                <div
                  key={`split-${appearance}-${row.label}-${state}`}
                  className="storybook-button-grid__cell"
                >
                  {splitButtonForGrid(appearance, row.size, row.kind, state)}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
}

function AppearanceStorySection({
  appearance,
}: {
  appearance: SupportedAppearance;
}) {
  return (
    <>
      <Section
        title={appearanceLabels[appearance]}
        description={`${appearanceLabels[appearance]} button states and sizes rendered from the package components.`}
      >
        <div />
      </Section>
      <AppearanceGrid appearance={appearance} />
    </>
  );
}

function menuButtonForGrid(
  appearance: SupportedAppearance,
  size: SupportedSize,
  kind: ButtonKind,
  state: PreviewState,
) {
  const items = ["Action One", "Action Two"];
  const label = kind === "iconOnly" ? undefined : "Text";
  const icon = kind === "text" ? undefined : menuIconsByAppearance[appearance];

  return (
    <div className={previewClassName("split", appearance, state)}>
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <VscMenuButton
            appearance={appearance}
            {...(size !== "medium" ? { size } : {})}
            {...(icon ? { icon } : {})}
            disabled={state === "disabled"}
            aria-label={
              kind === "iconOnly"
                ? `${appearanceLabels[appearance]} ${size} menu button`
                : undefined
            }
          >
            {label}
          </VscMenuButton>
        </MenuTrigger>
        <VscMenuPopover>
          <VscMenuList>
            {items.map((item) => (
              <VscMenuItem key={item}>{item}</VscMenuItem>
            ))}
          </VscMenuList>
        </VscMenuPopover>
      </Menu>
    </div>
  );
}

function MenuButtonAppearanceGrid({
  appearance,
}: {
  appearance: SupportedAppearance;
}) {
  return (
    <Section title={appearanceLabels[appearance]}>
      <div className="storybook-button-grid">
        <div className="storybook-button-grid__table">
          <div className="storybook-button-grid__header storybook-button-grid__header--row" />
          {previewStates.map((state) => (
            <div key={state} className="storybook-button-grid__header">
              {stateLabels[state]}
            </div>
          ))}
          {rowDefinitions.map((row) => (
            <React.Fragment key={`menu-${appearance}-${row.label}`}>
              <div className="storybook-button-grid__rowLabel">{row.label}</div>
              {previewStates.map((state) => (
                <div
                  key={`menu-${appearance}-${row.label}-${state}`}
                  className="storybook-button-grid__cell"
                >
                  {menuButtonForGrid(appearance, row.size, row.kind, state)}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
}

function SplitButtonsStorySection() {
  return (
    <>
      <Section
        title="Split Buttons"
        description="Supported split-button states and sizes rendered from the package components."
      >
        <div />
      </Section>
      {appearances.map((appearance) => (
        <SplitAppearanceGrid
          key={`split-${appearance}`}
          appearance={appearance}
        />
      ))}
    </>
  );
}

function MenuButtonsStorySection() {
  return (
    <>
      <Section
        title="Menu Buttons"
        description="Supported menu-button states and sizes rendered from the package components."
      >
        <div />
      </Section>
      {appearances.map((appearance) => (
        <MenuButtonAppearanceGrid
          key={`menu-${appearance}`}
          appearance={appearance}
        />
      ))}
    </>
  );
}

export const Overview: Story = {
  render: () => (
    <>
      <Section
        title="Button"
        description="Supported button states and sizes rendered from the package components."
      >
        <div />
      </Section>
      {appearances.map((appearance) => (
        <AppearanceGrid key={appearance} appearance={appearance} />
      ))}
      <Section
        title="Split Buttons"
        description="Supported split-button states and sizes rendered from the package components."
      >
        <div />
      </Section>
      {appearances.map((appearance) => (
        <SplitAppearanceGrid
          key={`split-${appearance}`}
          appearance={appearance}
        />
      ))}
      <Section
        title="Menu Buttons"
        description="Supported menu-button states and sizes rendered from the package components."
      >
        <div />
      </Section>
      {appearances.map((appearance) => (
        <MenuButtonAppearanceGrid
          key={`menu-${appearance}`}
          appearance={appearance}
        />
      ))}
    </>
  ),
};

export const Primary: Story = {
  render: () => <AppearanceStorySection appearance="primary" />,
};

export const Secondary: Story = {
  render: () => <AppearanceStorySection appearance="secondary" />,
};

export const Outline: Story = {
  render: () => <AppearanceStorySection appearance="outline" />,
};

export const Subtle: Story = {
  render: () => <AppearanceStorySection appearance="subtle" />,
};

export const Transparent: Story = {
  render: () => <AppearanceStorySection appearance="transparent" />,
};

export const SplitButtons: Story = {
  name: "Split Buttons",
  render: () => <SplitButtonsStorySection />,
};

export const MenuButtons: Story = {
  name: "Menu Buttons",
  render: () => <MenuButtonsStorySection />,
};
