import React from "react";
import type { Preview } from "@storybook/react";

import "component-library/dist/assets/component-library.css";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Select project theme",
    defaultValue: "theme-a",
    toolbar: {
      icon: "paintbrush",
      items: ["theme-a", "theme-b", "theme-c"],
    },
  },
};
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story, { context }) => {
      const theme = context.globals.theme;
      return (
        <div data-theme={theme}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
