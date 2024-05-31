<template>
  <div class="flex flex-col space-y-2 mt-2">
    <q-item-label class="text-sm text-grey-8 font-medium uppercase">{{ data.title }}</q-item-label>
    <q-btn-toggle
      v-model="model"
      spread
      color="grey-3"
      text-color="grey-6"
      toggle-color="teal-4"
      toggle-text-color="white"
      :options="data.options"
    />
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue'
import { useFormbuilder } from '@/store/formBuilder.js'

const store = useFormbuilder()
const props = defineProps(['data'])
const model = ref(props.data.model ? props.data.model : '')

watch(model, (newValue) => {
  if (newValue) {
    let existingIndex = store.dataToUpdate.findIndex((item) => item.id === props.data.id)
    if (existingIndex !== -1) {
      store.dataToUpdate[existingIndex] = {
        id: props.data.id,
        model: newValue
      }
    } else {
      store.dataToUpdate.push({ id: props.data.id, model: newValue })
    }
  }
})
</script>
