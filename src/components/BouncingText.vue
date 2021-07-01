<template>
  <transition name="boucing-text">
    <p v-if="isVisible">
      <slot></slot>
    </p>
  </transition>
</template>

<script>
export default {
  name: "BouncingText",
  props: {
    isVisible: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>
.boucing-text-enter-active {
  animation: bounce-in 0.5s;
}
.boucing-text-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>