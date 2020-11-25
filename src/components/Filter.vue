<template>
  <select class="pointer mr" @change="changeSortOption($event.target.value)">
    <option
      v-for="({ name, selected }, i) in sortByRating"
      :key="i"
      :value="name"
      :selected="selected"
    >
      {{ name }}
    </option>
  </select>
  <select class="pointer" @change="changeFilterOption($event.target.value)">
    <option value="all">All Movies</option>
    <option v-for="category in categories" :key="category">
      {{ category }}
    </option>
  </select>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["sortByRating", "categories"]),
  },
  methods: mapActions(["changeSortOption", "changeFilterOption"]),
};
</script>

<style scoped>
select {
  padding: 12px;
  outline: none;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.pointer {
  cursor: pointer;
}
</style>
