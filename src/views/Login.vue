<template>
  <div class="container centerflex">
    <h1>Login</h1>

    <form @submit.prevent="login">
      <label>
        <input type="email" placeholder="Email" v-model="email" />
      </label>
      <label>
        <input type="password" placeholder="Password" v-model="password" />
      </label>
      <input class="bs" type="submit" value="Login" />
    </form>
    <p v-if="!formIsValid">
      Please enter a valid email and password (must be at least 6 characters
      long).
    </p>
    <p v-if="error">
      Wrong password or email
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      error: false,
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    login() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
      const actionPayload = {
        email: this.email,
        password: this.password,
      };
      if (
        this.user.email === this.email &&
        this.user.password === this.password
      ) {
        this.$store.commit("login", actionPayload);
        this.$router.push("/movies");
      } else {
        this.error = true;
      }
    },
  },
};
</script>

<style scoped></style>
