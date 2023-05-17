<template>
  <div>
    <!-- <h1>Home</h1> -->
    <div class="img-wrapper">
      <img :src="mainurl" class="img" />
      <div class="overlay">
        <div class="overlay_bot">
          <p class="text" style="font-size: 25px">
            {{ recent_movies[0].title }}
          </p>
          <p class="text" style="font-size: 25px">
            vote_average : {{ recent_movies[0].vote_average }}
          </p>
          <p class="text" style="font-size: 25px">줄거리</p>
          <p class="text" style="font-size: 15px">
            {{ recent_movies[0].overview }}
          </p>
          <p v-if="maindata_detail.homepage">{{ maindata_detail.homepage }}</p>
          <p class="text" style="font-size: 15px" v-else>[홈페이지 없음]</p>

          <p
            class="text"
            style="font-size: 15px"
            v-for="(item, idx) in maindata_detail.genres"
            :key="idx"
          >
            {{ item.name }}
          </p>
        </div>
      </div>
    </div>
    <div class="home">
      <h1>최신 영화</h1>
      <div class="slider">
        <div
          class="slide"
          v-for="(movie, index) in recent_movies"
          :key="index"
          :style="{ transform: `translateX(${index * -20}%)` }"
        >
          <img
            :src="url + `${movie.poster_path}`"
            :alt="movie.title"
            class="slide-img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  data() {
    return {
      mainurl: "https://image.tmdb.org/t/p/w500",
      url: "https://image.tmdb.org/t/p/w500",
      maindata_detail: [],
      recent_movies: [],
      currentSlide: 1,
    };
  },
  components: {},
  created() {
    this.getMovies();
    this.img();
  },
  methods: {
    getMovies() {
      this.$store.dispatch("getMovies");
      this.recent_movies = this.$store.state.movies;
    },
    img() {
      this.$store.state.movies[0].postrer_path;
      this.mainurl += this.$store.state.movies[7].backdrop_path;
      const id = this.$store.state.movies[7].id;

      this.$store.dispatch("getMoviesDetail", id);
      this.maindata_detail = this.$store.state.movies_detail;
    },
    slide(n) {
      this.currentSlide += n;
      this.showSlide(this.currentSlide);
    },
    showSlide(n) {
      const slides = document.querySelectorAll(".slide-item");
      if (n > slides.length) {
        this.currentSlide = 1;
      }
      if (n < 1) {
        this.currentSlide = slides.length;
      }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[this.currentSlide - 1].style.display = "block";
    },
  },
  mounted() {
    this.showSlide(this.currentSlide);
  },
};
</script>

<style>
.home {
  width: 80%;
  /* border: 2px solid black; */
  margin: auto;
  margin-top: 2%;
}

.img-wrapper {
  position: relative;
  width: 100%;
  height: 50vh;
  margin: auto;
  overflow: hidden;
}

.img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
  z-index: 2;
  transition: opacity 0.3s ease-out;
}

.img:hover {
  opacity: 0.4;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
  z-index: 1;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;
}

.img:hover ~ .overlay {
  transform: translateX(0);
}

.overlay_bot {
  position: absolute;
  bottom: 0;
  left: 2%;
  width: 30%;
}
.text {
  color: #ffffff;
  margin: 0;
  text-align: left;
}

.slider {
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
  padding-bottom: 20px;
}

.slide {
  width: 20%;
  display: inline-block;
  vertical-align: top;
  margin-right: 20px;
}

.slide:last-child {
  margin-right: 0;
}

.slide-img {
  width: 100%;
  height: auto;
}

.slider::-webkit-scrollbar {
  height: 5px;
}

.slider::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 5px;
}

.slider::-webkit-scrollbar-thumb:hover {
  background-color: #b3b3b3;
}
</style>
