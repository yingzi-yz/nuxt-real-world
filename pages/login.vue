<template>
  <div>
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Sign in</h1>
            <p class="text-xs-center">
              <a href="">Have an account?</a>
            </p>

            <ul class="error-messages">
              <li v-for="(value, key) in errors" :key="key">{{key}} {{value[0]}}</li>
            </ul>

            <form @submit.prevent="onLogin">
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  v-model="user.email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  v-model="user.password"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {login} from '@/api/user'

// 用于只在客户端使用cookie
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  name: "loginPage",
  middleware: ['notAuthenticated'],
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      errors: {}
    }
  },
  created() {

  },
  methods: {
    async onLogin() {
      try {
        const {data} = await login({
          user: this.user
        })
        this.errors = {};

        this.$store.commit('setUser', data.user);

        Cookie.set('user', data.user);

        this.$router.push('/');
      } catch (err) {
        this.errors = err.response.data.errors;
      }
    }
  }
};
</script>

<style scoped>
</style>