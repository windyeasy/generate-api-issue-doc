<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
import useMainStore from '@/store/main'

const form = reactive<APIDocFormData>({
  title: '',
  api: '',
  method: '',
  query: '',
  params: '',
  body: '',
  result: '',
  header: '',
})
const formRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  title: [
    { required: true, message: '请输入标题', trigger: 'blur' },
  ],
  api: [
    { required: true, message: '请输入接口地址', trigger: 'blur' },
  ],
  method: [
    { required: true, message: '请选择请求方式', trigger: 'blur' },
  ],
  result: [
    { required: true, message: '请输入请求结果', trigger: 'blur' },
  ],
})
const methodOptions = [
  {
    label: 'GET',
    value: 'GET',
  },
  {
    label: 'POST',
    value: 'POST',
  },
  {
    label: 'PUT',
    value: 'PUT',
  },
  {
    label: 'DELETE',
    value: 'DELETE',
  },
  {
    label: 'PATCH',
    value: 'PATCH',
  },
  {
    label: 'OPTIONS',
    value: 'OPTIONS',
  },
]
const router = useRouter()
// 去预览
function toPreview() {
  formRef.value?.validate(async (valid) => {
    if (valid) {
      useMainStore().changeFormAction(form)
      router.push('/preview')
    }
  })
}
</script>

<template>
  <div class="home-form">
    <el-form ref="formRef" :model="form" label-width="auto" class="w-full" :rules="rules">
      <el-form-item label="标题" prop="title">
        <el-input v-model="form.title" placeholder="请输入标题" />
      </el-form-item>
      <el-form-item label="API" prop="api">
        <el-input v-model="form.api" placeholder="请输入接口地址" />
      </el-form-item>
      <el-form-item label="请求方式" prop="method">
        <el-select v-model="form.method" placeholder="请选择请求方式">
          <el-option
            v-for="item in methodOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="请求头">
        <el-input v-model="form.header" type="textarea" :rows="4" placeholder="请输入头" />
      </el-form-item>
      <el-form-item label="请求query">
        <el-input v-model="form.query" type="textarea" :rows="4" placeholder="请输入query参数" />
      </el-form-item>
      <el-form-item label="请求params">
        <el-input v-model="form.query" type="textarea" :rows="4" placeholder="请输入params参数" />
      </el-form-item>
      <el-form-item label="请求body">
        <el-input v-model="form.body" type="textarea" :rows="4" placeholder="请输入请求体" />
      </el-form-item>
      <el-form-item label="请求结果" prop="result">
        <el-input v-model="form.result" type="textarea" :rows="4" placeholder="请输入请求结果" />
      </el-form-item>
      <el-form-item>
        <div class="flex justify-end w-full">
          <el-button type="primary" @click="toPreview">
            生成
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
