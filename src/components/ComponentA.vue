<template>
  <div>
    <div>I´m the component A</div>
    <button @click="openModal('content1')">Open Modal (1)</button>
    <button @click="openModal('content2')">Open Modal (2)</button>
    <ComponentB />
  </div>
</template>

<script>
import ComponentB from "@/components/ComponentB.vue";

export default {
  name: "ComponentA",
  components: {
    ComponentB,
  },
  methods: {
    openModal(content) {
      this.$eventHub.$emit("open-modal", { content });
    },
  },
};
</script>
