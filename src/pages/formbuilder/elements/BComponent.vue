<template>
  <q-btn
    class="full-width"
    :type="data.type"
    :color="data.type === null ? 'primary' : 'green-4'"
    @click="action"
  >
    {{ data.label }}
  </q-btn>
</template>

<script setup>
import { defineProps } from 'vue'

// eslint-disable-next-line
const props = defineProps(['data'])
</script>
