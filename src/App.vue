<template>
  <TheHeader />
  <router-view />
</template>

<script>
import TheHeader from "./components/TheHeader";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.center {
  text-align: center;
}
body {
  background: cadetblue;
}
.centerflex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container {
  width: 70%;
  margin: 100px auto;
  padding: 20px;
}
.movies {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.movie {
  width: calc(25% - 20px);
  margin: 10px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background: white;
}
.dflex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bs {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
.mr {
  margin-right: 10px;
}
.filter {
  padding-top: 120px;
  text-align: center;
}
@media screen and (max-width: 1100px) {
  .container {
    width: 95%;
  }
  img {
    width: 100%;
  }
  .movie {
    cursor: pointer;
    width: calc(50% - 20px);

    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }
}
@media screen and (max-width: 500px) {
  img {
    width: 100%;
  }
  .movie {
    cursor: pointer;
    width: 100%;

    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }
}

.addMovie {
  border-radius: 50%;
  position: fixed;
  top: 80px;
  right: 20px;
  height: 60px;
  width: 60px;
  border: none;
  background: white;
  color: cadetblue;
  font-size: 30px;
  cursor: pointer;
}
.superModal {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(51, 58, 58);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
}
input {
  box-sizing: border-box;
  display: block;
  border: none;
  padding: 20px;
  width: 300px;
  margin-bottom: 20px;
  font-size: 18px;
  outline: none;
  transition: all 0.2s ease-in-out;
}
textarea {
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
  transition: all 0.2s ease-in-out;
  color: #999;
  font: 18px Helvetica, Arial, sans-serif;
  padding: 12px;
}

input::placeholder {
  transition: all 0.2s ease-in-out;
  color: #999;
  font: 18px Helvetica, Arial, sans-serif;
}

input::placeholder :focus {
  padding-top: 28px;
  padding-bottom: 12px;
}

input[type="submit"] {
  transition: all 0.2s ease-in-out;
  font: 18px Helvetica, Arial, sans-serif;
  border: none;
  background: #1aaf75;
  color: #fff;
  padding: 16px 40px;
}

input[type="submit"]:hover {
  background: #109f67;
}
</style>
