import { defineStore } from 'pinia'
import { checkJsonValueGenTem } from '@/utils/doc-tem'

interface IMainState {
  form: APIDocFormData
  doc?: string
}

const useMainStore = defineStore('Main', {
  state: (): IMainState => ({
    form: {
      title: '',
      api: '',
      method: '',
      query: '',
      params: '',
      body: '',
      result: '',
      header: '',
      description: '',
    },
    doc: '',
  }),
  actions: {
    changeFormAction(info: APIDocFormData) {
      this.form = info
      this.formToDocAction()
    },
    formToDocAction() {
      const headTem = checkJsonValueGenTem('请求头', this.form.header)
      const queryTem = checkJsonValueGenTem('请求参数Query', this.form.query)
      const paramsTem = checkJsonValueGenTem('请求参数Params', this.form.params)
      const bodyTem = checkJsonValueGenTem('请求参数Body', this.form.body)
      const resultTem = checkJsonValueGenTem('请求结果', this.form.result)
      const description = this.form.description ? `${this.form.description}\n\n` : ''
      this.doc = `### ${this.form.title}\n\n${description}`
      + `#### 接口地址：\`${this.form.api}\`\n\n`
      + `#### 请求方式：\`${this.form.method}\`\n\n${headTem}${queryTem}${paramsTem}${bodyTem}${resultTem}`
    },
  },
})

export default useMainStore
