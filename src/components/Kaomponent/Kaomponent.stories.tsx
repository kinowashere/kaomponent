import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Kaomponent from 'components/Kaomponent';
import Kaomoji from 'ts/enums/Kaomoji.enums';
import { IKaomponentComponent } from './Kaomponent.component';

export default {
  title: 'Kaomponent',
  component: Kaomponent,
} as ComponentMeta<typeof Kaomponent>;

const Template: ComponentStory<typeof Kaomponent> = (args: IKaomponentComponent) => {
  const { kaomoji } = args;
  return <Kaomponent kaomoji={kaomoji} />;
};

export const WithKaomoji = Template.bind({});
WithKaomoji.args = {
  kaomoji: Kaomoji.HAPPY,
};
