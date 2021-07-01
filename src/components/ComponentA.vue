<template>
  <div>
    <div>I´m the component A</div>
    <button @click="openModal({ content: 'content1', data: { id: 1 } })">
      Open Modal (1)
    </button>
    <button @click="openModal({ content: 'content2' })">Open Modal (2)</button>
    <button @click="openModal({ content: 'content3' })">Open Modal (3)</button>
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
  created: function () {
    this.$eventHub.$on("validate-modal", this.validateModal);
  },
  beforeDestroy: function () {
    this.$eventHub.$off("validate-modal", this.validateModal);
  },
  methods: {
    openModal(data) {
      this.$eventHub.$emit("open-modal", data);
    },
    validateModal(data) {
      console.log("Data: ", data);
    },
  },
};
</script>
