import React from "react";
import type { Preview } from "@storybook/react";

import "component-library/dist/index.css";
import "../src/styles/globals.css";

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
    (Story) => {
      return <Story />;
    },
  ],
};

export default preview;
