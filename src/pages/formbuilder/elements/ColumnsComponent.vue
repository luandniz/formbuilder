<template>
  <div class="w-full" :style="styles">
    <slot />
  </div>
  {{ props }}
</template>
<script>
import { addSuffix } from "../utils/FormFunctions";
// import SectionComponent from "./SectionComponent.vue";
export default {
  props: ["data"],
  emits: ["update:data"],
  data() {
    return {
      currentItem: {
        id: null,
        title: "Section",
        component: "Section",
        type: null,
        group: "structure",
        icon: "fas fa-columns",
        placeholder: false,
        children: [
          {
            isFirst: true,
          },
        ],
        groups: ["element", "property", "stricture"],
      },
    };
  },
  computed: {
    currentData: {
      get() {
        return this.data;
      },
      set(newdata) {
        this.$emit("update:data", newdata);
      },
    },
    styles() {
      return addSuffix(this.currentData.style, "px");
    },
  },
  mounted() {
    let newdata = this.data;
    if (this.data.children.length === 0) {
      for (let index = 0; index < parseInt(this.data.type); index++) {
        let newitem = JSON.parse(JSON.stringify(this.currentItem));
        newitem["id"] = this.data.id + "_column_" + (index + 1);
        newdata.children.push(newitem);
      }
    }
    this.currentData = newdata;
  },
};
</script>
<style lang=""></style>
