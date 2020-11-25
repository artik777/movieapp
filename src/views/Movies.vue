<template>
  <div class="filter"><Filter /></div>
  <div class="superModal" v-if="modalOn">
    <div>
      <label>
        <input type="text" placeholder="image" v-model.trim="image" />
      </label>
      <label>
        <input type="text" placeholder="title" v-model.trim="title" />
      </label>
      <label>
        <input type="text" placeholder="year" v-model.trim="year" />
      </label>
      <label>
        <input type="number" placeholder="rating" v-model.number="rating" />
      </label>
      <label>
        <input type="text" placeholder="category" v-model.trim="category" />
      </label>
      <textarea placeholder="Description" v-model="description" />
      <input @click="addFilm" type="submit" class="bs" value="ADD" />
    </div>
  </div>
  <button v-if="token" class="addMovie" @click="modalOn = !modalOn">+</button>
  <div class="movies container" v-if="filteredMovies.length <= 0">
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
  <div class="movies container" v-else>
    <MovieCard v-for="movie in filteredMovies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard.vue";
import Filter from "../components/Filter.vue";

import { mapGetters } from "vuex";
export default {
  data() {
    return {
      modalOn: false,
      image: "",
      title: "",
      year: "",
      rating: null,
      category: "",
      description: "",
    };
  },
  computed: {
    ...mapGetters(["movies", "filteredMovies", "token"]),
  },
  methods: {
    addFilm() {
      const film = {
        image: this.image,
        title: this.title,
        year: this.year,
        rating: this.rating,
        category: this.category,
        description: this.description,
        id: Date.now().toString(),
        comments: [],
      };
      this.$store.commit("addFilm", film);
    },
  },
  components: {
    MovieCard,
    Filter,
  },
};
</script>
