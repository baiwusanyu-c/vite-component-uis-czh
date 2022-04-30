import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'

import BeUI from 'vite-component-uis-czh/lib/be-ui.es.js'
const app = createApp(App)

app.use(ElementPlus)
app.use(BeUI)
app.mount('#app')
