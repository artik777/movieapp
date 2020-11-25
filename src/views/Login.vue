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
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
    };
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
      this.$store.commit("login", actionPayload);
      this.$router.push("/movies");
    },
  },
};
</script>

<style scoped></style>
