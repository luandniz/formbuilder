<template>
  <i :class="currentData.iconName" class="w-full" :style="styles"></i>
</template>
<script setup>
import { computed, defineProps, defineEmits } from 'vue'
import { addSuffix } from '@/pages/utils/FormFunctions'

const props = defineProps(['data'])
const emits = defineEmits(['update:data'])

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
