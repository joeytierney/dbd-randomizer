<template>
  <div id="app">
    <NavBar />
  </div>
  <router-view />
  <TheFooter />
</template>

<script>
import NavBar from "@/components/navbar/NavBar.vue";
import TheFooter from "@/components/footer/TheFooter.vue";

export default {
  name: "App",
  components: {
    NavBar,
    TheFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  background: url(https://raw.githubusercontent.com/joeytierney/dbd-vue/develop/src/assets/background-image/web-background.jpg)
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

h1 {
  font-size: 3rem;
  font-weight: bold;
  font-style: normal;
  line-height: 3rem;
  margin: 0 0 1rem 0;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  font-style: normal;
  line-height: 1.5rem;
  margin: 0 0 1rem 0;
  text-align: center;
  text-transform: uppercase;
  color: #aa0101;
}

h3 {
  font-size: 1rem;
  font-weight: bold;
  font-style: normal;
  line-height: 1rem;
  margin: 0 0 1rem 0;
  text-align: center;
  text-transform: uppercase;
  color: #cccccc;
}

label {
  margin: unset;
  display: block;
  color: #fff;
  font-size: 1.2rem;
}

a.link {
  color: #fff;
  border-bottom: 0.125rem solid rgba(255, 255, 255, 0.25);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.1s ease-in-out;
}

a.link:hover {
  color: #aaa;
}

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>
