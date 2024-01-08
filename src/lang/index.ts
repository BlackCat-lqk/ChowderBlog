import { createI18n } from 'vue-i18n'
import { en } from './en'
import { zh } from './zh'

const messages = {
  en: {
    ...en
  },
  zh: {
    ...zh
  }
}

const i18n = createI18n({
  locale: 'zh',
  messages
})

export default i18n
