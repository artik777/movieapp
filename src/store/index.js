import { createStore } from "vuex";

const token = JSON.parse(localStorage.getItem("token"));

export default createStore({
  state: {
    movies: [
      {
        image:
          "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "Parasite",
        id: "1",
        year: "2019",
        rating: 8.6,
        description:
          "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        comments: [],
        category: "triller",
      },
      {
        image:
          "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "The Queen's Gambit ",
        year: "2020",
        id: "2",
        rating: 8.8,
        description:
          "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.",
        comments: [
          {
            id: 1,
            name: "John",
            comment:
              "So boring, i fall asleep to it and hibernated through whole winter",
          },
        ],
        category: "fantasy",
      },
      {
        image:
          "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "Joker",
        id: "3",
        year: "2019",
        rating: 8.5,
        description:
          "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
        comments: [
          { id: 1, name: "Marry", comment: "Put on a happy face :)" },
          {
            id: 2,
            name: "Batman",
            comment: "My parents was not impressed with this",
          },
        ],
        category: "triller",
      },
      {
        image:
          "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
        title: "The Godfather",
        id: "4",
        year: "1972",
        rating: 9.2,
        description:
          "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        comments: [],
        category: "drama",
      },
      {
        image:
          "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg",
        title: "Pulp Fiction",
        id: "5",
        year: "1994",
        rating: 8.9,
        description:
          "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        comments: [],
        category: "drama",
      },
      {
        image:
          "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "The Shining",
        id: "6",
        year: "1980",
        rating: 8.3,
        description:
          "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
        comments: [{ id: 1, name: "Jane", comment: "Soundtrack is epic" }],
        category: "drama",
      },
      {
        image:
          "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_.jpg",
        title: "The Spider-man",
        id: "7",
        year: "1980",
        rating: 8.2,
        description:
          "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
        comments: [{ id: 1, name: "Jane", comment: "Soundtrack is epic" }],
        category: "fantasy",
      },
      {
        image:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9017/9017075_so.jpg",
        title: "HULK",
        id: "8",
        year: "1980",
        rating: 8.1,
        description:
          "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
        comments: [{ id: 1, name: "Jane", comment: "Soundtrack is epic" }],
        category: "fantasy",
      },
    ],
    setSelectedProduct: null,
    filteredMovies: [],
    sortByRating: [
      {
        name: "Film rating",
        selected: true,
      },
      {
        name: "Lowest rank",
        selected: false,
        sortFunction: (a, b) =>
          a.rating > b.rating ? 1 : a.rating == b.rating ? 0 : -1,
      },
      {
        name: "Highest rank",
        selected: false,
        sortFunction: (a, b) =>
          a.rating < b.rating ? 1 : a.rating == b.rating ? 0 : -1,
      },
    ],
    user: {
      email: "1@1.lt",
      password: "abcabc",
    },
    token: token || "",
  },
  getters: {
    movies: ({ movies }) => movies,
    movie: ({ setSelectedMovie }) => setSelectedMovie,
    filteredMovies: ({ filteredMovies }) => filteredMovies,
    sortByRating: ({ sortByRating }) => sortByRating,
    categories: (state) => {
      const categories = state.movies.map((x) => x.category);
      return [...new Set(categories)];
    },
    token: ({ token }) => token,
    user: ({ user }) => user,
  },
  mutations: {
    setSelectedMovie(state, id) {
      state.setSelectedMovie = state.movies.filter((x) => x.id === id)[0];
    },
    addFilm(state, payload) {
      state.movies.push(payload);
    },
    addComment(state, payload) {
      const id = payload.movieId;
      const comment = {
        id: payload.id,
        name: payload.name,
        comment: payload.comment,
      };
      const index = state.movies.findIndex((x) => x.id === id);
      state.movies[index].comments.push(comment);
    },
    removeComment(state, payload) {
      const commentId = payload.id;
      const movieId = payload.movieId;
      const index = state.movies.findIndex((x) => x.id === movieId);
      state.movies[index].comments = state.movies[index].comments.filter(
        (x) => x.id !== commentId
      );
    },
    removeAllComments(state, id) {
      const index = state.movies.findIndex((x) => x.id === id);
      state.movies[index].comments = [];
    },
    filterMovie(state, category) {
      if (category === "all") {
        state.filteredMovies = state.movies;
      } else {
        state.filteredMovies = state.movies.filter(
          (movie) => movie.category === category
        );
      }
    },
    sortByRating({ sortByRating, movies }, name) {
      const index = sortByRating.findIndex((el) => el.name == name);
      for (let i = 0; i < sortByRating.length; i++)
        sortByRating[i].selected = i == index;
      movies.sort(sortByRating.find((el) => el.selected).sortFunction);
    },
    login(state) {
      state.token = Date.now();
      localStorage.setItem("token", JSON.stringify(state.token));
    },
    logout(state) {
      state.token = "";
      localStorage.removeItem("token");
    },
  },
  actions: {
    changeSortOption({ commit }, name) {
      commit("sortByRating", name);
    },
    changeFilterOption({ commit }, payload) {
      commit("filterMovie", payload);
    },
  },
});
