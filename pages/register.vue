<template>
  <div>
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Sign up</h1>
            <p class="text-xs-center">
              <a href="">Have an account?</a>
            </p>

            <ul class="error-messages">
              <li v-for="(value, key) in errors" :key="key">{{key}} {{value[0]}}</li>
            </ul>

            <form @submit.prevent="onRegister">
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  v-model="user.username"
                />
              </fieldset>
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
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {register} from '@/api/user'

export default {
  name: "registerPage",
  middleware: ['notAuthenticated'],  
  asyncData() {
    return {
      user: {
        username: '',
        emali: '',
        password: '',
      },
      errors: {}
    }
  },
  data() {
    return {

    }
  },
  created() {

  },
  methods: {
    async onRegister() {
      const user = this.user;
      try {
        const {data} = await register({
          user
        })
        this.errors = {};
        this.$router.push('/');
      } catch (err) {
        // console.dir(err)
        this.errors = err.response.data.errors;
      }

    }
  }
};
</script>

<style scoped>
</style>