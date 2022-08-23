<template>
  <img
    src="https://raw.githubusercontent.com/joeytierney/dbd-vue/develop/src/assets/general-icons/dbd-header-logo.png"
    alt="Dead by Daylight logo"
    class="home-logo"
  />
  <h1 class="home-header">Randomizer</h1>
  <br />
  <br />
  <div class="survivorsPerk">
    <h1 class="survHeader">Survivors</h1>
    <h2 class="subSurvHeader">Random Survivor Perks</h2>
    <router-link to="/perks/survivor-perks"
      ><img
        src="https://raw.githubusercontent.com/joeytierney/deadbydaylight-randomizer/main/public/assets/icons/survivor-icon.png"
        alt="Random Survivor Perk button"
        class="toRndPerkButton"
    /></router-link>
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

.survivorsPerk {
  float: left;
  width: 50%;
}

.survBg {
  position: absolute;
  left: 5%;
  height: 36rem;
  opacity: 0.3;
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
