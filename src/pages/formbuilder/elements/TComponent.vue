<template>
  <p :style="styles">
    {{ props.data.content ? props.data.content : 'Abc' }}
  </p>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { addSuffix } from '@/pages/utils/FormFunctions'

const props = defineProps(['data'])
const styles = computed(() => addSuffix(props.data.styles, 'px'))
</script>
