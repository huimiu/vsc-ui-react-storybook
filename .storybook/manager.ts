import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";
import { GLOBALS_UPDATED } from "@storybook/core-events";

/* Default to dark */
addons.setConfig({ theme: themes.dark });

/**
 * Dynamically switch the manager (sidebar + toolbar) theme
 * whenever the user toggles the "scheme" toolbar global.
 */
addons.register("theme-switcher", (api) => {
  const channel = api.getChannel();
  if (channel) {
    channel.on(
      GLOBALS_UPDATED,
      ({ globals }: { globals: Record<string, unknown> }) => {
        if (globals?.scheme) {
          api.setOptions({
            theme: globals.scheme === "dark" ? themes.dark : themes.light,
          });
        }
      },
    );
  }
});
