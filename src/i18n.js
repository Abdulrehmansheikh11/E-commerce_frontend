import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translation files
import enTranslation from "./Locales/en/translation.json";
import frTranslation from "./Locales/fr/translation.json";

// Configure i18n instance
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({

    resources: {
      en: {
        translation: enTranslation,
      },
      fr: {
        translation: frTranslation,
      },
    },
    fallbackLng: 'en', // fallback language if translation not found
    debug: true, // debug mode
    interpolation: {
      escapeValue: false, // react already safe from xss
    },
  });

export default i18n;
