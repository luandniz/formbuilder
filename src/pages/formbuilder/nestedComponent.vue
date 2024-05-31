<template>
  <component
    v-for="(item, index) in props.data"
    :key="index"
    :is="getComponent(item.component)"
    v-bind="getAllProperties(item)"
  >
    <nested-component
      v-if="item.children && item.children.length > 0 && item.children !== null"
      :data="item.children"
    />
  </component>
</template>

<script setup>
import { ref, defineProps, defineAsyncComponent, getCurrentInstance } from 'vue'

import LoadingComponent from '@/pages/formbuilder/elements/LoadingComponent.vue'

const props = defineProps(['data'])
const compError = ref('')

const getComponent = (element) => {
  return defineAsyncComponent({
    // the loader function
    loader: () => import(`@/pages/formbuilder/elements/${element}Component.vue`),
    loadingComponent: LoadingComponent
  })
}

function getAllProperties(current) {
  const instance = getCurrentInstance()
  const infoComponent = instance.parent.data
  let props = {
    currentProps: infoComponent === undefined ? compError.value : current.data
  }
  return props
}
</script>
