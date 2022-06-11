import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    type: {
      type: 'string',
      options: ['text', 'password'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
