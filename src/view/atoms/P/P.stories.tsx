import { ComponentStory, ComponentMeta } from '@storybook/react';
import { P } from './P';

export default {
  title: 'P',
  component: P,
} as ComponentMeta<typeof P>;

const Template: ComponentStory<typeof P> = (args) => <P {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'hello',
  variant: 'h1',
};
