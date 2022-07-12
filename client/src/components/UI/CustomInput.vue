<template>
  <div>
    <input
      class="input"
      :class="{ active: msg }"
      :placeholder="placeholder"
      :type="type"
      :value="modelValue"
      @input="updateInput"
      required
    />
  </div>
    <span class="error" v-if="msg">{{ msg }}</span>
</template>

<script>
export default {
  name: 'login-input',
  props: {
    msg: {
      type: String
    },
    placeholder: {
      type: String 
    },
    type: {
      type: String
    },
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  },
}
</script>

<style scope lang="scss">
.error, .input.active {
  color: red;
}

.input {
  padding: 5px 10px;
  width: 100%;
  background: $shadow-2;
  box-shadow: 0.4rem 0.4rem 10.2rem 0.2rem $shadow-1;
  color: $light;
  height: 3rem;
  border: none;
  font-size: 1.2rem;

  &::placeholder {
    color: $border-color;
    font-size: 1.2rem;
  }

  &:focus {
    background: $shadow-1;
    outline: $shadow-2;
  }
}
</style>
