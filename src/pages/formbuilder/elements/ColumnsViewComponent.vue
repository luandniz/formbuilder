<template>
  <div class="grid h-auto relative pb-2 gap-1" :style="style">
    <SectionViewComponent
      :data="element"
      v-for="element in currentData.children"
      :key="element.id"
      @update:item="(arg) => (element = arg)"
    />
  </div>
</template>
<script>
import SectionViewComponent from "./SectionViewComponent.vue";
export default {
  props: ["data"],
  emits: ["update:data"],
  components: { SectionViewComponent },
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
    style() {
      return {
        gridTemplateColumns: `repeat(${this.currentData.children.length},1fr)`,
        gridTemplateRows: "auto",
      };
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
