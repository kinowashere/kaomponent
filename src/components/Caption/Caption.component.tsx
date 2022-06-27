import React, { useEffect } from 'react';
import 'utils/i18n';
import { useTranslation } from 'react-i18next';
import KaomojiEnum from 'ts/enums/Kaomoji.enums';
import useKaomoji from 'hooks/useKaomoji';
import { LanguageEnum } from 'ts/enums/Language.enum';
import i18n from 'i18next';

export interface ICaptionComponent {
  kaomoji: KaomojiEnum;
  lang: LanguageEnum;
}

function CaptionComponent(props: ICaptionComponent) {
  const { kaomoji, lang } = props;
  const { t } = useTranslation();
  const { kaomojiKey } = useKaomoji({ kaomoji });
  useEffect(() => {
    i18n.changeLanguage(lang.toString());
  }, [lang]);
  if (!kaomojiKey) return null;
  return <div>{t(kaomojiKey.toLowerCase())}</div>;
}

export default CaptionComponent;
