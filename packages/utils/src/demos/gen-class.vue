<script setup lang='ts'>
import { ref } from 'vue'
import { useClassNames } from '../gen-class'

const { c, cx, ce, cm } = useClassNames('button')
const testRef = ref(false)
function handelrClick() {
  testRef.value = !testRef.value
}
const cls = cx(() => ({
  a: true,
  b: testRef.value,
}))
</script>

<template>
  <div :class="c('primary')">
    {{ cls }}
    {{ c('a', cm('b'), ce('primary')) }}
    <button @click="handelrClick">
      按钮
    </button>
  </div>
</template>

<style></style>
