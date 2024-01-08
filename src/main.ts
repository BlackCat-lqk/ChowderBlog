import './assets/style/reset.less'
import './assets/style/theme.less'
import { setTheme } from './util/theme'
import i18n from './lang/index'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const init = () => {
  localStorage.getItem('chowderTheme') == 'dark' ? setTheme('dark') : setTheme('light');
  i18n.global.locale = 'en';
}
init()

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
