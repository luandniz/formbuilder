<template>
  <div class="w-full h-[calc(100%_-_55px)] flex justify-center overflow-y-auto">
    <div class="w-full md:w-[70%] lg:w-[50%] h-full p-4" v-if="!loading">
      <NestedComponent :data="formData" />
      <!-- {{ store.dataToUpdate }}
      <pre><small>{{ formData }}</small></pre> -->
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, watch } from 'vue'
import { useFormbuilder } from '@/store/formBuilder.js'
import NestedComponent from './nestedComponent.vue'

const store = useFormbuilder()

const loading = computed(() => store.loading)
const formData = computed(() => store.formData)

watch(
  () => store.dataToUpdate,
  (newValue) => {
    console.log('DATA TO UPDATE', newValue)
    console.log('ELEMENTOS QUE PRECISAM ESTAR NO DataToUpdate', store.parentElement)
    // verifica se tem algum elemento que necessita dele para ser preenchido
    const hasElementWithSameId = newValue.find((newElement) =>
      store.parentElement.some((element) => element.id === newElement.id)
    )
    console.log(
      'elementos que precisam do parent preenchido',
      store.elementosQuePrecisamDeParentPreenchido
    )

    for (const item of store.formData) {
      if (item.id === hasElementWithSameId.id) {
        console.log('item que precisa ser MODIFICADO', item)
        return
      }
      if (item.children && Array.isArray(item.children)) {
        for (const subItem of item.children) {
          if (subItem.id === hasElementWithSameId.id) {
            console.log('item que precisa ser MODIFICADO', subItem)
            return
          }
        }
        // const parent = findParentElement(item.children, parentId)
      }
    }

    console.log('Existe elemento com mesmo ID:', hasElementWithSameId)
  },
  { deep: true }
)
onMounted(async () => {})
</script>
