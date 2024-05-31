<template>
  <div
    class="w-full relative pb-2 bg-blue100 p-2"
    :class="{ 'h-10': currentData.children.every((child) => child.isFirst) }"
  >
    <FormViewChildren :data="currentData.children" />
  </div>
</template>
<script>
import FormViewChildren from "../FormViewChildren.vue";
export default {
  props: ["data"],
  data() {
    return {
      component: null,
    };
  },
  emits: ["update:data"],
  computed: {
    currentData: {
      get() {
        return this.data;
      },
      set(newdata) {
        this.$emit("update:data", newdata);
      },
    },
  },
  components: { FormViewChildren },
};
</script>
<style lang=""></style>
