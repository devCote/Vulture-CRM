<template>
  <button class="btn" v-on:click="handleLogin">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'login-btn',
  props: {
    handle: {
      type: Function,
    }
  }
}
</script>

<style scope lang="scss">
.btn {
  margin-top: 2rem;
  padding: 1rem 1.6rem;
  border: 1px solid $border-color;
  border-radius: 100rem;

  color: inherit;
  background: transparent;
  font-size: 1.4rem;
  font-family: inherit;
  letter-spacing: 0.2rem;
  width: 12rem;

  transition: 0.2s;
  cursor: pointer;

  &:nth-of-type(1) {
    margin-right: 1rem;
  }

  &:hover,
  &:focus {
    background: $focus;
    border-color: $focus;
    transform: translateY(-0.2rem);
  }
}
</style>
