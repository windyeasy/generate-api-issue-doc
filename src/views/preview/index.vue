<script lang="ts" setup>
import { MdPreview } from 'md-editor-v3'
import useMainStore from '@/store/main'

const { doc } = useMainStore()
const activeName = ref('document')
</script>

<template>
  <div class="preview page-background">
    <div class="content-wrapper  w840px p5 mx-auto  bg-white">
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="文档" name="document">
          <MdPreview
            preview-theme="vuepress"
            theme="light"
            editor-id="preview-only"
            :model-value="doc"
            :code-foldable="false"
          />
        </el-tab-pane>
        <el-tab-pane label="code" name="code">
          <show-code :code="doc" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
