import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Kaomponent from 'components/Kaomponent';
import Kaomoji from 'ts/enums/Kaomoji.enums';
import { LanguageEnum } from 'ts/enums/Language.enum';
import { IKaomponentComponent } from './Kaomponent.component';

export default {
  title: 'Kaomponent',
  component: Kaomponent,
} as ComponentMeta<typeof Kaomponent>;

const Template: ComponentStory<typeof Kaomponent> = (args: IKaomponentComponent) => {
  const { kaomoji, caption, lang } = args;
  return <Kaomponent kaomoji={kaomoji} lang={lang} caption={caption} />;
};

export const WithKaomoji = Template.bind({});
WithKaomoji.args = {
  kaomoji: Kaomoji.HAPPY,
  lang: LanguageEnum.ES_MX,
  caption: false,
};
