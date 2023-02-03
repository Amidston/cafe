import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './tranlations/en.json';
import ua from './tranlations/ua.json';

const resources = {
  en: {
    translation: en
  },

  ua: {
    translation: ua
  }
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false
  }
});
export default i18next;
