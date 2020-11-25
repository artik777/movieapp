<template>
  <div class="container">
    <h1 class="center">{{ movie.title }}</h1>
    <div class="movie-block container">
      <div class="movie-image">
        <img :src="movie.image" alt="" />
      </div>
      <div class="movie-info">
        <p>
          Name: <strong>{{ movie.title }}</strong>
        </p>
        <p>
          Year: <strong>{{ movie.year }}</strong>
        </p>
        <p>
          Rating: <strong>{{ movie.rating }} </strong>
        </p>
        <p>
          Description: <br />
          {{ movie.description }}
        </p>
      </div>
    </div>
    <div v-if="movie.comments.length > 0" class="container comments">
      <h1>Comments: {{ totalComments }}</h1>
      <div
        class="dialogbox"
        v-for="comment in movie.comments"
        :key="comment.id"
      >
        <div class="body">
          <div class="comment">
            <span>{{ comment.name }}</span
            ><span class="red" @click="deleteComment(comment.id)">X</span>
          </div>
          <span class="tip tip-up"></span>
          <div class="message">
            <span>{{ comment.comment }}</span>
          </div>
        </div>
      </div>
    </div>
    <p class="container" v-else>No comments, you can be first!</p>
    <div class="bs container comment-form-comment">
      <h2>FORM:</h2>
      <input type="text" v-model="name" placeholder="name" />
      <textarea v-model="comment" placeholder="comment" />
      <button @click="addComment">Add</button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      name: "",
      comment: "",
    };
  },
  computed: {
    ...mapGetters(["movie", "movies"]),
    totalComments() {
      return this.movie.comments.length;
    },
  },

  methods: {
    addComment() {
      const payload = {
        movieId: this.$route.params.id,
        id: Date.now(),
        name: this.name,
        comment: this.comment,
      };
      this.$store.commit("addComment", payload);
    },
    deleteComment(commentId) {
      const payload = {
        id: commentId,
        movieId: this.$route.params.id,
      };
      this.$store.commit("removeComment", payload);
    },
  },
  watch: {
    totalComments(val) {
      if (val > 5) {
        this.$store.commit("removeAllComments", this.$route.params.id);
      }
    },
  },
  beforeCreate() {
    this.$store.commit("setSelectedMovie", this.$route.params.id);
  },
};
</script>
<style scoped>
.dialogbox:nth-child(odd) {
  margin-left: 50px;
}
.red {
  color: red;
  cursor: pointer;
}

.comment {
  display: flex;
  justify-content: space-between;
}
img {
  height: 350px;
  border: 2px solid black;
}
.movie-block {
  display: flex;
  justify-content: center;

  align-items: center;
}
.movie-info,
.movie-image {
  flex: 1;
}

.movie-image {
  text-align: center;
}
p {
  padding: 20px;
  font-weight: normal;
}
.tip {
  width: 0px;
  height: 0px;
  position: absolute;
  background: transparent;
  border: 10px solid #ccc;
}

.tip-up {
  top: -25px; /* Same as body margin top + border */
  left: 10px;
  border-right-color: transparent;
  border-left-color: transparent;
  border-top-color: transparent;
}

.tip-down {
  bottom: -25px;
  left: 10px;
  border-right-color: transparent;
  border-left-color: transparent;
  border-bottom-color: transparent;
}

.tip-left {
  top: 10px;
  left: -25px;
  border-top-color: transparent;
  border-left-color: transparent;
  border-bottom-color: transparent;
}

.tip-right {
  top: 10px;
  right: -25px;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
}

.dialogbox .body {
  position: relative;
  max-width: 300px;
  height: auto;
  padding: 5px;
  background-color: #dadada;
  border-radius: 3px;
  border: 5px solid #ccc;
  margin-bottom: 10px;
}

.body .message {
  min-height: 30px;
  border-radius: 3px;
  font-family: Arial;
  font-size: 14px;
  line-height: 1.5;
  color: #797979;
}
.comment-form-comment {
  max-width: 500px;
  background-color: #dadada;
}
.comment-form-comment input,
select,
textarea {
  padding: 10px;
  background-color: #ccc;

  width: 100%;
  color: #797979;
}
</style>
