<template>
  <!-- Dê preferência para usar este select -->
  <q-select
    v-model="model"
    :dense="currentData.dense"
    :multiple="currentData.multiple"
    :options="currentData.options"
    :use-chips="currentData.useChips"
    :option-value="currentData.optionValue"
    :option-label="currentData.optionLabel"
    :emit-value="currentData.emitValue"
    :clearable="currentData.clearable"
    :label="currentData.label"
    :counter="currentData.counter"
    :behavior="currentData.behavior"
    :hint="currentData.hint"
    :readonly="currentData.readonly"
    map-options
    outlined
    color="blue"
    label-color="grey"
    transition-show="jump-up"
    transition-hide="jump-down"
    :input-style="{ fontWeight: '600' }"
    :style="styles"
  >
    <template #no-option>
      <q-item>
        <q-item-section class="text-grey">Sem Resultados.</q-item-section>
      </q-item>
    </template>

    <template #before-options>
      <div v-if="inputVisible" class="bg-white px-2 z-10 sticky top-0 flex items-center h-14">
        <q-input
          filled
          dense
          placeholder="Pesquisar"
          style="width: 100%"
          v-model="inputValue"
          @update:model-value="handleSearch"
        /></div
    ></template>

    <template #option="scope">
      <q-item v-if="currentData.multiple" class="q-py-['2px'] q-px-sm" style="min-height: 25px">
        <q-item-section avatar
          ><q-checkbox
            dense
            :model-value="scope.selected"
            @update:model-value="scope.toggleOption(scope.opt)"
          />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-weight-regular text-sm">{{
            scope.opt[currentData.optionLabel]
          }}</q-item-label>
        </q-item-section>
      </q-item>
      <!-- ------------------------------------------------ -->
      <q-item v-else v-bind="scope.itemProps" class="q-py-['2px'] q-px-sm" style="min-height: 25px">
        <q-item-section>
          <q-item-label class="text-weight-regular text-sm">{{
            scope.opt[currentData.optionLabel]
          }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-select>

  <small>Id do elemento: {{ currentData.id }}</small>
  <small>Parent Id: {{ props.data.parent }} </small>
  <small>Array de updated: {{ store.dataToUpdate }}</small>
</template>

<script setup>
import { ref, watch, computed, defineProps, defineEmits } from 'vue'

import { addSuffix } from '@/pages/utils/FormFunctions'
import { useFormbuilder } from '@/store/formBuilder.js'

const store = useFormbuilder()
const props = defineProps(['data'])
const emits = defineEmits(['update:data'])
// eslint-disable-next-line
const formData = computed(() => store.formData)

const currentData = computed({
  get() {
    return props.data
  },
  set(newData) {
    emits('update:data', newData)
  }
})

const model = ref(props.data.model ? props.data.model : '')

watch(model, (newValue) => {
  if (newValue || newValue === '' || newValue === null) {
    let existingIndex = store.dataToUpdate.findIndex((item) => item.id === props.data.id)
    if (existingIndex !== -1) {
      store.dataToUpdate[existingIndex] = {
        id: props.data.id,
        model: newValue,
        title: props.data.title
      }

      store.updateModelValuesRecursive(store.formData, store.dataToUpdate)
    } else {
      store.dataToUpdate.push({
        id: props.data.id,
        model: newValue,
        title: props.data.title
      })

      store.updateModelValuesRecursive(store.formData, store.dataToUpdate)
    }
  }
})

// eslint-disable-next-line
const styles = computed(() => addSuffix(props.data.style, 'px'))
</script>
