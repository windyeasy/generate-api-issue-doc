import { createPinia } from 'pinia'
import type { App } from 'vue'
import useMainStore from './main'

export default function registerPinia(app: App<Element>) {
  app.use(createPinia())
  const mainStore = useMainStore()
  mainStore.loadLocalFormAction()
}
