<template>
  <div class="movie bs" @click="navigate">
    <div class="img">
      <img :src="movie.image" alt="" />
    </div>
    <h2>{{ movie.title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object,
  },
  methods: {
    navigate() {
      this.$router.push(`/movie/${this.movie.id}`);
    },
  },
};
</script>
<style scoped>
img {
  width: 100%;
}
</style>
