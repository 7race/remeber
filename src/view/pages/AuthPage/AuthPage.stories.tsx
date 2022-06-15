import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AuthPage } from './AuthPage';

export default {
  title: 'AuthPage',
  component: AuthPage,
} as ComponentMeta<typeof AuthPage>;

const Template: ComponentStory<typeof AuthPage> = () => <AuthPage />;

export const Default = Template.bind({});
