import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "component-library";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: {
      description: "The content of the button.",
    },
    className: {
      control: {
        type: "text",
      },
      type: "string",
      description: "The CSS class to apply to the button.",
    },
    onClick: {
      action: "clicked",
      description: "Function to call when the button is clicked.",
    },
    disabled: {
      control: {
        type: "boolean",
      },
      description: "If true, the button will be disabled.",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Click Me",
    className: "bg-blue-600 text-white",
  },
};

export const Disable: Story = {
  args: {
    children: "Click Me Disabled",
    className: "text-black",
    disabled: true,
  },
};
