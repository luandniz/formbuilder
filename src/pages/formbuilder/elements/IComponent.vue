<template>
  <q-input
    v-model="model"
    :dense="data?.dense"
    :label="data.label ? data.label : data.title"
    :type="data?.type"
    :prefix="data?.prefix"
    :suffix="data?.suffix"
    :hint="data?.hint"
    :placeholder="data?.placeholder"
    :style="styles"
    :color="data?.color"
    :readonly="data.readonly"
    :clearable="data.clearable"
    outlined
  />
</template>
<script setup>
import { watch, ref, computed, defineProps, defineEmits } from 'vue'
import { addSuffix } from '@/pages/utils/FormFunctions'
import { useFormbuilder } from '@/store/formBuilder.js'

const store = useFormbuilder()
const props = defineProps(['data', 'modelValue'])
// eslint-disable-next-line
const emits = defineEmits(['update:modelValue'])
const styles = computed(() => addSuffix(props.data.style, 'px'))

const model = ref(props.data.model ? props.data.model : '')

// const value = computed({
//   get() {
//     return props.modelValue;
//   },
//   set(value) {
//     emits("update:modelValue", value);
//   },
// });
// *** WATCH PARA ADICIONAR VALOR AO MODEL CASO SEJA UM ELEMENTO COM DEPENDÊNCIA
// watch(
//   () => store.dataToUpdate,
//   (newValue) => {
//     if (newValue && newValue.id === props.data.referenceId) {
//       //   let existingIndex = store.dataToUpdate.findIndex(
//       //   (item) => item.id === props.data.id
//       // );
//     }
//   },
//   { deep: true }
// );

// function updateModelById(id, newValue) {

//   for (const item of formData.value) {
//     if (item.id === id) {
//       item.model = newValue;
//       return true;
//     }
//     if (item.children && item.children.length > 0) {
//       if (updateModelById(id, newValue, item.children)) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

watch(model, (newValue) => {
  // if (newValue !== null)
  if (newValue || newValue === '' || newValue === null) {
    let existingIndex = store.dataToUpdate.findIndex((item) => item.id === props.data.id)
    if (existingIndex !== -1) {
      store.dataToUpdate[existingIndex] = {
        id: props.data.id,
        model: newValue,
        title: props.data.title
      }
    } else {
      store.dataToUpdate.push({
        id: props.data.id,
        model: newValue,
        title: props.data.title
      })
    }
  }
  console.log('NEW VALUE', newValue)
})
</script>
