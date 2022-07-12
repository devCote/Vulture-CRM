<template>
  <login />
  <p>asdasdasd</p>
</template>

<script>
import Login from '@/views/Login';

export default {
  data() {
    return {
      user: { name: '', password: '' },
      msg: { name: '', password: '', window: '' },
    }
  },
  components: {
    Login
  } 
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Roboto, BlinkMacSystemFont, 'Segoe UI', 'Open Sans', sans-serif;
  color: $light;
  background: $global-background;
}
</style>
