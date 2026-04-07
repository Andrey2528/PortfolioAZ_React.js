import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Cookies from 'js-cookie';
import { initReactI18next } from 'react-i18next';

import enTranslation from "./locales/en/translation.json";
import ukTranslation from "./locales/uk/translation.json";
import ruTranslation from "./locales/ru/translation.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        lng: Cookies.get("language") || "en",
        fallbackLng: ["en", "uk", "ru"],
        detection: { order: ["cookie"], cache: ["cookie"] },
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: enTranslation,
            },
            uk: {
                translation: ukTranslation,
            },
            ru: {
                translation: ruTranslation,
            },
        },
    });

export default i18n;
