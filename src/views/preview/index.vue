<script lang="ts" setup>
import useMainStore from '@/store/main'

const { doc } = useMainStore()
</script>

<template>
  <div class="preview w1200px mx-auto">
    <pre><code>{{ doc }}</code></pre>
  </div>
</template>
