<template>
  <div>
    <div>I´m the component B</div>
    <button @click="broadcast">Button from B</button>
    <div>
      <ul>
        <li v-for="todo in getFirstFiveTodos" :key="todo.id">
          {{ todo.title }}
        </li>
      </ul>
    </div>
    <button @click="fetchPosts">Get Posts</button>
    <div>
      <button @click="isBounceOn = !isBounceOn">Toggle bounce</button>
      <BouncingText :isVisible="isBounceOn">I will bounce</BouncingText>
    </div>
  </div>
</template>

<script>
import API from "@/services/API";
import BouncingText from "@/components/BouncingText.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ComponentB",
  components: {
    BouncingText,
  },
  data() {
    return {
      isBounceOn: true,
    };
  },
  async beforeMount() {
    const response = await API.getTodos();
    this.setTodos(response.data);
  },
  methods: {
    broadcast() {
      this.$eventHub.$emit("from-b", { value: "B" });
    },
    async fetchPosts() {
      const response = await API.getPosts();
      console.log(response.data);
    },
    ...mapActions("todos", ["setTodos"]),
  },
  computed: {
    ...mapGetters("todos", ["getFirstFiveTodos"]),
  },
};
</script>