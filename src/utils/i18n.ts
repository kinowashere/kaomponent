import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ES_MX from 'locales/es_MX/translation.json';
import EN_US from 'locales/en_US/translation.json';
import LanguageEnum from 'ts/enums/Language.enums';

const resources = {
  es_MX: ES_MX,
  en_US: EN_US,
};

i18n.use(initReactI18next).init({
  ns: ['caption'],
  resources,
  lng: LanguageEnum.EN_US,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
