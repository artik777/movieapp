<template>
  <div>
    <transition-group name="effect" tag="div">
      <div class="bg" v-for="i in [currentIndex]" :key="i">
        <img :src="image" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094;</a>
    <a class="next" @click="next" href="#">&#10095;</a>
  </div>
</template>
<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        "https://i.imgur.com/WN8YaEH.png",
        "https://1.bp.blogspot.com/-yb5sj8wqPtE/Xwq4oullyNI/AAAAAAAABrk/ocrSyW-3g8Ym2uGT7LKFa48NvK0MXvVVwCLcBGAsYHQ/s1600/the%2Bold%2Bguard%2Bwallpaper%2B%25282%2529.png",
      ],
      timer: null,
      currentIndex: 0,
    };
  },

  mounted() {
    this.startSlide();
  },

  methods: {
    startSlide() {
      this.timer = setInterval(this.next, 10000);
    },
    next() {
      this.currentIndex += 1;
    },
    prev() {
      this.currentIndex -= 1;
    },
  },

  computed: {
    image() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>
<style scoped>
.effect-enter-active,
.effect-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.effect-enter,
.effect-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}
img {
  height: calc(100vh - 61px);
  width: 100%;
}
.bg {
  filter: brightness(20%);
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 45%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(250, 250, 250, 0.9);
  color: cadetblue;
}
</style>
