<template>
  <div :style="styles">
    <q-uploader
      :url="getUrl"
      :label="currentData.label"
      :color="currentData.color"
      :text-color="currentData.textColor"
      :square="currentData.square"
      :accept="currentData.acceptedFiles"
      multiple
      flat
      bordered
      @rejected="onRejected"
      style="width: 100% !important"
    >
      <!-- method="post" -->
      <!-- image/* -->
      <!-- :headers="() => [{ name: 'Authorization', value: `Bearer ${token}` }]" -->
      <!-- max-file-size="2048"
      max-total-size="2048" -->

      <template v-slot:list="scope">
        <q-list separator>
          <div v-for="file in scope.files" :key="file.__key">
            <q-item style="padding-left: 0px !important">
              <q-item-section>
                <q-item-label
                  class="full-width ellipsis text-sm text-grey700 font-medium tracking-wide space-x-2"
                >
                  <q-btn
                    size="12px"
                    flat
                    dense
                    round
                    icon="cancel"
                    padding="0px"
                    @click="scope.removeFile(file)"
                  />
                  {{ file.name }}
                </q-item-label>

                <q-item-label caption> Status: {{ file.__status }} </q-item-label>

                <q-item-label caption>
                  {{ file.__sizeLabel }} / {{ file.__progressLabel }}
                </q-item-label>
              </q-item-section>

              <q-item-section thumbnail class="gt-xs">
                <img :src="file.__img.src" />
              </q-item-section>
            </q-item>
            <q-item-section class="space-y-2">
              <q-linear-progress value="0.6" color="green" />
            </q-item-section>
          </div>
        </q-list>
      </template>
    </q-uploader>
  </div>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue'
import { addSuffix } from '@/pages/utils/FormFunctions'

const props = defineProps(['data'])
const emits = defineEmits(['update:data'])
const styles = computed(() => addSuffix(props.data.style, 'px'))

// eslint-disable-next-line
const currentData = computed({
  get() {
    return props.data
  },
  set(newData) {
    emits('update:data', newData)
  }
})

const mapErrors = {
  accpet: 'Only Images Please',
  'max-file-size': 'Exceeded max file size',
  'max-total-size': 'Exceeded total file size'
}

const getUrl = (files) => {
  console.log(files)
  return 'http://localhost/api/upload'
}

const onRejected = (rejectedEntries) => {
  rejectedEntries.forEach((element) => {
    console.log(element)
  })
  console.log(rejectedEntries)
}
</script>
