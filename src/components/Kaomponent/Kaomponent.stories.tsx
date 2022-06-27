import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Kaomponent from 'components/Kaomponent';
import KaomojiEnum from '../../ts/enums/Kaomoji.enums';
import LanguageEnum from '../../ts/enums/Language.enums';
import { IKaomponentComponent } from './Kaomponent.component';
import 'index.css';

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
  kaomoji: KaomojiEnum.HAPPY,
  lang: LanguageEnum.ES_MX,
  caption: false,
};
