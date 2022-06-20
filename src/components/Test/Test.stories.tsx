import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Test from 'components/Test';
import { ITestComponent } from './Test.component';

export default {
  title: 'Test',
  component: Test,
} as ComponentMeta<typeof Test>;

const Template: ComponentStory<typeof Test> = (args: ITestComponent) => {
  const { isTest, optionalText } = args;
  return <Test isTest={isTest} optionalText={optionalText} />;
};

export const IsTest = Template.bind({});
IsTest.args = {
  isTest: true,
};

export const EditMode = Template.bind({});
EditMode.args = {
  isTest: false,
  optionalText: 'Testing',
};
