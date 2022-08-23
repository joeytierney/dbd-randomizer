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
    <ButtonSurvivor />
  </div>
  <div class="killersPerk">
    <h1 class="killerHeader">Killers</h1>
    <h2 class="subKillerHeader">Random Killer Perks</h2>
    <router-link to="/perks/killer-perks"
      ><img
        src="https://raw.githubusercontent.com/joeytierney/deadbydaylight-randomizer/main/public/assets/icons/killer-icon.png"
        alt="Random Killer Perk button"
        class="toRndPerkButton"
    /></router-link>
  </div>
</template>

<script>
import ButtonSurvivor from "@/components/buttons/ButtonSurvivor.vue";

export default {
  components: {
    ButtonSurvivor,
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
}

.home-survivors {
  float: left;
  width: 50%;
}

.survivors-header {
  font-size: 2.5rem;
}

.survivors-subheader {
  font-size: 1.5rem;
}

.killersPerk {
  float: right;
  width: 50%;
}

.killerBg {
  position: absolute;
  right: 1%;
  height: 36rem;
  opacity: 0.3;
}

.toRndPerkButton {
  cursor: pointer;
}

.toRndPerkButton:active {
  transform: translateY(0.25rem);
}
</style>
