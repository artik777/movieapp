<template>
  <header class="bs">
    <div class="center">
      <nav :class="{ navShow: navToggle }" @click="navToggle = !navToggle">
        <router-link to="/">Main</router-link>
        <router-link to="/movies">Films</router-link>
        <a v-if="token" @click="logout">Logout</a>
        <router-link to="/login" v-else>Login</router-link>
      </nav>
      <div class="toggle-nav" @click="navToggle = !navToggle">☰</div>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    navToggle: false,
  }),
  computed: {
    token() {
      return this.$store.getters.token;
    },
  },
  methods: {
    logout() {
      this.$store.commit("logout");
    },
  },
};
</script>

<style scoped>
header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
}
.center {
  display: flex;
  justify-content: space-between;
  color: #fff;
  width: 100%;
}
nav {
  width: 100%;
}
a {
  color: #fff;
  padding: 16px;
  text-decoration: none;
  line-height: 1;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
}
a:nth-last-child(2),
a:nth-last-child(3) {
  float: left;
}
a:nth-last-child(1) {
  float: right;
}

.toggle-nav {
  display: none;
}
@media screen and (max-width: 730px) {
  .center {
    width: 100%;
    flex-direction: column-reverse;
  }
  .toggle-nav {
    display: block;
    padding: 4px 14px;
    font-size: 28px;
    text-align: right;
    width: 100%;
  }
  nav {
    display: none;
    flex-wrap: wrap;
  }
  .navShow {
    display: flex;
  }
  a {
    width: 100%;
  }
  a:hover,
  .router-link {
    background-color: rgb(39, 39, 39);
  }
  .router-link-active {
    background-color: #444;
  }
}
</style>
