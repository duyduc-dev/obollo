import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

export const enum ELanguageResources {
  Common = 'common',
}

export enum ELanguage {
  EN = 'en',
}

const resources = {
  en: {
    [ELanguageResources.Common]: require('./locales/en/common.json'),
  },
};

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: ELanguage.EN,
    lng: ELanguage.EN,
    resources,
    ns: ELanguageResources.Common,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
