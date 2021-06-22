<template>
  <div>
    <div>I'm the content 3</div>
    <div>
      <button @click="cancel">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content3",
  methods: {
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>