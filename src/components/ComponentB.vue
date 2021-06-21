<template>
  <div>
    <div>I´m the component B</div>
    <button @click="broadcast">Button from B</button>
  </div>
</template>

<script>
export default {
  name: "ComponentB",
  methods: {
    broadcast() {
      this.$eventHub.$emit("from-b", { value: "B" });
    },
  },
};
</script>