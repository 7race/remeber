import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WelcomePage } from './WelcomePage';

export default {
  title: 'WelcomePage',
  component: WelcomePage,
} as ComponentMeta<typeof WelcomePage>;

const Template: ComponentStory<typeof WelcomePage> = () => <WelcomePage />;

export const Default = Template.bind({});
