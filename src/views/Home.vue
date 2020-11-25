<template>
  <div class="home">
    <Slider />
    <router-link to="/movies" class="relative button"
      ><h1 class="center">FREE MOVIES.</h1></router-link
    >
  </div>
</template>

<script>
import Slider from "../components/Slider.vue";
export default {
  components: {
    Slider,
  },
};
</script>

<style scoped>
.home {
  padding-top: 57px;
  height: calc(100vh -57px);
}
.relative {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
h1 {
  color: white;
  width: 600px;
  font-size: 40px;
}
a {
  text-decoration: none;
}
</style>
