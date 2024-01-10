import './assets/style/reset.less'
import './assets/style/theme.less'
import { setTheme } from './util/theme'
import i18n from './lang/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const init = () => {
  localStorage.getItem('chowderTheme') == 'dark' ? setTheme('dark') : setTheme('light');
  i18n.global.locale = 'en';
}
init()

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
