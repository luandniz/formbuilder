import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import App from './App.vue'

import '@quasar/extras/material-icons/material-icons.css'

import 'quasar/src/css/index.sass'

const pinia = createPinia()
const app = createApp(App)

app
  .use(Quasar, {
    plugins: {}
  })
  .use(pinia)
  .mount('#app')
