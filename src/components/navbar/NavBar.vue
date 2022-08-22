<template>
  <div id="nav">
    <nav class="container navbar navbar-expand-lg backdrop-filter backdrop-blur-lg">
      <a class="navbar-brand" href="#">
        <img src="https://raw.githubusercontent.com/joeytierney/dbd-vue/develop/src/assets/general-icons/dbd-mini-logo.png" alt="Dead by Daylight logo" width="40" height="40">
      </a>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav mr-auto">
          <router-link to="/" class="nav-item nav-link">Home</router-link>
          <router-link to="/about" class="nav-item nav-link">About</router-link>
          <router-link to="/survivor" class="nav-item nav-link">Random Survivor</router-link>
          <router-link to="/killer" class="nav-item nav-link">Random Killer</router-link>
          <router-link to="/survivor-perks" class="nav-item nav-link">Survivor Perks</router-link>
          <router-link to="/killer-perks" class="nav-item nav-link">Killer Perks</router-link>
        </div>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  </div>
</template>

<style>
#nav {
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #cccccc;
}

#nav a.router-link-exact-active {
  color: #cccccc;
  border-bottom: 0.125rem solid rgba(170, 1, 1, 1);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.1s ease-in-out;
}

#nav a:hover {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.1s ease-in-out;
}
</style>
