<template>
  <div>
    <div>I'm the content 2</div>
    <div>
      <input type="text" v-model="text" />
    </div>
    <div>
      <button @click="cancel">Cancel</button>
      <button @click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content2",
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      text: null,
    };
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    submit() {
      this.$emit("submit", { data: this.text });
    },
  },
};
</script>