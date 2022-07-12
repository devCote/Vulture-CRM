<template>
  <div class="login__container__app">
    <div class="login__container__window">
      <h1 class="login_window__title">Vulture CRM</h1>
      <form class="login__form" @submit.prevent>
        <span class="login__error" v-if="msg.window">{{ msg.window }}</span>
        <login-input :msg="msg.name" v-model="user.name" placeholder="name" type="text" />
        <login-input :msg="msg.password" v-model="user.password" placeholder='password' type="password" />
        <div class="login__container__btn">
          <login-btn>Login</login-btn>
          <login-btn>Create</login-btn>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      user: {name: '', password: ''},
      msg: { name: '', password: '', window: '' },
    }
  },
  watch: {
    user: {
      handler(value) {
        if (value.name.length) this.validateUser(value.name)
        if (value.password.length) this.validatePassword(value.password)
      },
      deep: true
    }
  },
  methods: {
    validateUser(value) {
      if (value.length && value.length < 3)
        this.msg.name = 'name has to be at least 3 caracters'
      else if (value.length > 22)
        this.msg.name = 'name has to be less than 22 caracters'
      else if (!/^[a-zA-Z]*$/g.test(value)) this.msg.name = 'invalid username'
      else this.msg.name = ''
    },
    validatePassword(value) {
      if (value.length && value.length < 6)
        this.msg.password = 'password has to be at least 6 caracters long'
      else if (/^[a-zA-Z]*$/g.test(value))
        this.msg.password =
          'password must contain at least one symbol or number'
      else if (value.length > 22)
        this.msg.password = 'password has to be less than 22 caracters'
      else this.msg.password = ''
    },
    handleLogin(e) {
    },
  },
}
</script>

<style scope lang="scss">
.login__container__app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .login__container__window {
    width: 40rem;
    padding: 4rem 2rem;
    border-radius: 0.8rem;
    color: var(--light);
    background: $background;
    box-shadow: 0.4rem 0.4rem 10.2rem 0.2rem $shadow-1;
    margin: auto;
    overflow: hidden;

    .login__window__title {
      font-size: 3.2rem;
      text-align: center;
    }

    .login__error {
      color: red;
    }

    .login__form {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .login__container__btn {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
