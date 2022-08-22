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
    </nav>
  </div>
</template>