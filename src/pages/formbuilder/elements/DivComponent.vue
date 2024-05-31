<template>
  <div :style="styles">
    <slot />
  </div>
  <!-- {{ styles }} -->
</template>
<script setup>
import { computed, defineProps, defineEmits } from 'vue'
import { addSuffix } from '@/pages/utils/FormFunctions'

const props = defineProps(['data'])
const emits = defineEmits(['update:data'])

// eslint-disable-next-line
const currentData = computed({
  get() {
    return props.data
  },
  set(newData) {
    emits('update:data', newData)
  }
})
// console.log(currentData);

const styles = computed(() => addSuffix(props.data.styles, 'px'))
</script>
