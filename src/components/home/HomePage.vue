<template>
  <img
    src="https://raw.githubusercontent.com/joeytierney/dbd-vue/develop/src/assets/general-icons/dbd-header-logo.png"
    alt="Dead by Daylight logo"
    class="home-logo"
  />
  <h1 class="home-header">Randomizer</h1>
  <div class="home-survivors">
    <h1 class="survivors-header">Survivors</h1>
    <h2 class="survivors-subheader">Random Survivor Perks</h2>
    <router-link to="/survivor-perks">
      <ButtonSurvivor />
    </router-link>
  </div>
  <div class="home-killers">
    <h1 class="killers-header">Killers</h1>
    <h2 class="killers-subheader">Random Killer Perks</h2>
    <router-link to="/killer-perks">
      <ButtonKiller />
    </router-link>
  </div>
</template>

<script>
import ButtonSurvivor from "@/components/buttons/ButtonSurvivor.vue";
import ButtonKiller from "@/components/buttons/ButtonKiller.vue";

export default {
  components: {
    ButtonSurvivor,
    ButtonKiller,
  },
};
</script>

<style scoped>
.home-logo {
  margin-top: 1.2rem;
  margin-left: auto;
  margin-right: auto;
}

.home-header {
  font-size: 3.5rem;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 7.5rem;
}

.home-survivors {
  float: left;
  width: 50%;
}

.survivors-header,
.killers-header {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.survivors-subheader,
.killers-subheader {
  font-size: 1.5rem;
}

.home-killers {
  float: right;
  width: 50%;
}
</style>
