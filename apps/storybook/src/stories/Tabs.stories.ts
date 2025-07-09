import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Tabs } from 'component-library';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Example/Tabs',
    component: Tabs,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        children: {
            description: 'Text content',
        },
        className: {
            control: 'text',
            type: 'string',
            description: 'Additional CSS classes to apply to the tabs',
        },
        defaultValue: {
            control: 'text',
            type: 'string',
            description: 'Default value for the active tab',
        },
        onClick: {
            action: 'clicked',
            description: 'Function to call when the button is clicked',
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        children: '',
        defaultValue: 'account',
        className:
            'bg-gray-800 text-white p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300 ease',
    },
};
