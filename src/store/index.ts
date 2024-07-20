import { createPinia } from 'pinia'
import type { App } from 'vue'

export default function registerPinia(app: App<Element>) {
  app.use(createPinia())
}
