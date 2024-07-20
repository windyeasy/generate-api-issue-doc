<script lang="ts" setup>
interface IProps {
  code?: string
}
const props = defineProps<IProps>()
const isCopyCode = ref(false)
function copyCode() {
  if (props.code && !isCopyCode.value) {
    navigator.clipboard.writeText(props.code)
    isCopyCode.value = true
  }
}
</script>

<template>
  <div class="show-code">
    <pre><code>{{ code }}</code></pre>
    <div class="copy-btn" @click="copyCode">
      {{ isCopyCode ? '已复制!' : '复制' }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.show-code {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 2px;
  overflow: auto;
  position: relative;
}
.copy-btn {
  position: absolute;
  right: 10px;
  top: 10px;
  color: #999;
  font-size: 12px;
  cursor: pointer;
}
</style>
