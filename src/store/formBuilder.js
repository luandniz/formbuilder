import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { form } from '../pages/formbuilder/formDynamicExample.js'

export const useFormbuilder = defineStore('formbuilder', () => {
  const name = ref('John')
  const dataToUpdate = []
  const parentElement = ref([])
  // const originalData = JSON.parse(JSON.stringify(form))
  const formData = computed(() => removeItemsWithIsFirstTrue(form))

  const removeItemsWithIsFirstTrue = (arr) => {
    const newArr = []
    arr.forEach((item) => {
      if (!item.isFirst || item.isFirst !== true) {
        const newItem = { ...item }
        if (item.children && Array.isArray(item.children)) {
          newItem.children = removeItemsWithIsFirstTrue(item.children)
        }
        newArr.push(newItem)
      }
    })
    return newArr
  }

  const updateModelValuesRecursive = (array1, array2) => {
    const updatedArray = array1.map((item) => {
      const matchingItem = array2.find((el) => el.id === item.id)
      if (matchingItem) {
        return { ...item, model: matchingItem.model }
      } else {
        return item
      }
    })

    updatedArray.forEach((item) => {
      Object.keys(item).forEach((key) => {
        if (Array.isArray(item[key])) {
          item[key] = updateModelValuesRecursive(item[key], array2)
        }
      })
    })

    return updatedArray
  }

  // encontra os elementos que necessitam de um parent
  const elementosQuePrecisamDeParentPreenchido = computed(() => {
    return formData.value.flatMap((item) => {
      if (item.children && Array.isArray(item.children)) {
        return item.children.filter((child) => {
          return child.parentRequired === true && child.parent !== null
        })
      }
      return []
    })
  })

  // tras os elementos que são os parent que precisam estar preenchidos3para acontecer algo
  function findParentElement(array, parentId) {
    for (const item of array) {
      if (item.id === parentId) {
        return item
      }
      if (item.children && Array.isArray(item.children)) {
        const parent = findParentElement(item.children, parentId)
        if (parent) {
          return parent
        }
      }
    }
    return null
  }

  elementosQuePrecisamDeParentPreenchido.value.forEach((element) => {
    parentElement.value.push(findParentElement(formData.value, element.parent))
    console.log('PARENT', parentElement.value, parentElement.value.model)
  })

  function increment() {}

  return {
    name,
    increment,
    formData,
    dataToUpdate,
    removeItemsWithIsFirstTrue,
    updateModelValuesRecursive,
    elementosQuePrecisamDeParentPreenchido,
    parentElement
  }
})
