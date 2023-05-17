<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <div>
        <b-navbar-brand href="#"> || logo </b-navbar-brand>
      </div>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav style="justify-content: flex-end">
        <b-navbar-nav>
          <b-nav-item>
            <router-link :to="{ name: 'home' }">Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link :to="{ name: 'recommended' }">Rec</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link :to="{ name: 'community' }">Com</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link :to="{ name: 'myprofile' }">My</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link :to="{ name: 'login' }">LogIn</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link :to="{ name: 'signup' }">SignUp</router-link>
          </b-nav-item>
          <b-nav-item>
            <h4 @click="logout">LogOut</h4>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
// import axios from 'axios'
// const API_URL = 'http://127.0.0.1:8000/GoonManDu'

  export default {
    name: 'app',
    methods: {
      logout() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #ffffff;
  /* #4DB1E2s -> 아이폰 파란색 컬러 */
}
</style>
