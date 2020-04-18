import { default as basei18n } from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { config } from 'modules/app/config/app.config'
import { resources } from './i18n.resources'

const i18n = config.app.language.useLanguageDetector
  ? basei18n.use(LanguageDetector)
  : basei18n

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: config.app.language.default,
    debug: true,

    interpolation: {
      escapeValue: false, // React escapes by default
    }
  })

export default i18n
