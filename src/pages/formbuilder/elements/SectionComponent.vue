<template>
  <div class="w-full relative h-full rounded" :style="styles">
    <slot />
  </div>
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

const styles = computed(() => addSuffix(props.data.styles, 'px'))
</script>
