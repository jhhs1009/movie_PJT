import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";
import createPersistedState from "vuex-persistedstate";
import router from "../router";

Vue.use(Vuex);
const API_URL = "http://127.0.0.1:8000/GoonManDu";

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    accessKey: null,
    movies: [],
    movie_detail: [],
  },
  getters: {
    isLogin() {
      return state.accessKey ? true : false;
    },
  },
  mutations: {
    SAVE_ACCESS(state, access) {
      state.accessKey = access;
      router.push({ name: "home" });
    },

    LOGOUT(state) {
      state.accessKey = null;
      // router.push({name: 'home'})
    },
    GET_MOVIES(state, data) {
      state.movies = data;
    },
    GET_MOVIES_DETAIL(state, data) {
      state.movies_detail = data;
      console.log(state.movies_detail);
    },
  },
  actions: {
    signup(context, payload) {
      const firstname = payload.firstname;
      const lastname = payload.lastname;
      const username = payload.username;
      const password1 = payload.password1;
      const password2 = payload.password2;

      axios({
        method: "POST",
        url: `${API_URL}/accounts/signup/`,
        data: {
          firstname,
          lastname,
          username,
          password1,
          password2,
        },
      })
        .then((res) => {
          context.commit("SAVE_ACCESS", res.data.access);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    login(context, payload) {
      const username = payload.username;
      const password = payload.password;

      axios({
        method: "POST",
        url: `${API_URL}/accounts/login/`,
        data: {
          username,
          password,
        },
      })
        .then((res) => {
          context.commit("SAVE_ACCESS", res.data.access);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    logout(context) {
      context.commit("LOGOUT");
    },

    getMovies(context) {
      axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/now_playing",
        params: { language: "ko-KR", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWFkNmQ4NTE3YmUxZDAxZjEwYWNiZGE5MzczY2E2YiIsInN1YiI6IjYzZDMxYmQ2Y2I3MWI4MDBkNDNhNzA3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XzbupQeJ7SvUZiiIj8pih7HIC8i1R2Il2VEsqcqn2_Q",
        },
      })
        .then(function (response) {
          context.commit("GET_MOVIES", response.data.results);
        })
        .catch(function (error) {
          console.error(error);
        });
    },

    getMoviesDetail(context, data) {
      axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${data}`,
        params: { language: "ko-KR" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWFkNmQ4NTE3YmUxZDAxZjEwYWNiZGE5MzczY2E2YiIsInN1YiI6IjYzZDMxYmQ2Y2I3MWI4MDBkNDNhNzA3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XzbupQeJ7SvUZiiIj8pih7HIC8i1R2Il2VEsqcqn2_Q",
        },
      })
        .then(function (response) {
          console.log(response.data);
          context.commit("GET_MOVIES_DETAIL", response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
  modules: {},
});
