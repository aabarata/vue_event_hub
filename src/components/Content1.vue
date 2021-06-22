<template>
  <div>
    <div>I'm the content 1</div>
    <template v-if="data">
      {{ `Data ID: ${data.id}` }}
    </template>
    <div>
      <button @click="cancel">Cancel</button>
      <button @click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content1",
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    submit() {
      this.$emit("submit");
    },
  },
};
</script>