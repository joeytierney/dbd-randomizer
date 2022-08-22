<template>
  <nav id="nav" class="sticky top-0 z-10 bg-white backdrop-filter bg-opacity-0">
    <div class="max-w-5xl mx-auto px-4">
      <div class="flex items-center justify-center h-16">
        <span class="text-2xl text-gray-900 font-semibold"
          ><img
            src="https://raw.githubusercontent.com/joeytierney/dbd-vue/develop/src/assets/general-icons/dbd-mini-logo.png"
            alt="Dead by Daylight logo"
            width="60"
            height="60"
        /></span>
        <div class="flex space-x-4">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/survivor">Survivor</router-link>
          <router-link to="/killer">Killer</router-link>
          <router-link to="/survivor-perks">Survivor Perks</router-link>
          <router-link to="/killer-perks">Killer Perks</router-link>
        </div>
      </div>
    </div>
  </nav>
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
