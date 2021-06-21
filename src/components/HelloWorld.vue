<template>
  <div class="hello">
    <ComponentA />
  </div>
</template>

<script>
import ComponentA from "@/components/ComponentA.vue";

export default {
  name: "HelloWorld",
  components: {
    ComponentA,
  },
  props: {
    msg: String,
  },
  created: function () {
    this.$eventHub.$on("from-b", this.processHub);
  },
  beforeDestroy: function () {
    this.$eventHub.$off("from-b", this.processHub);
  },
  methods: {
    processHub(payload) {
      console.log(payload);
    },
  },
};
</script>
