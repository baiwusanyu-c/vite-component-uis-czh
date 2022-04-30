import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import   'vite-component-uis-czh/css/style.css'
import BeUI from 'vite-component-uis-czh'
const app = createApp(App)

app.use(ElementPlus)
app.use(BeUI)
app.mount('#app')
