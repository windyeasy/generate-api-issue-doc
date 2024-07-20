import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'
import 'virtual:uno.css'
import 'md-editor-v3/lib/preview.css'
import '@/assets/css/index.scss'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
