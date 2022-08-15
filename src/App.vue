<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

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
  color: #42b983;
}
</style>
