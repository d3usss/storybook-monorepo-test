import React from "react";
import type { Preview } from "@storybook/react";

import "component-library/dist/assets/component-library.css";

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
