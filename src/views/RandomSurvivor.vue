<template>
  <div class="survivors">
    <h1 class="header">Choose Your Survivor</h1>
    <br />
    <div class="survImage" v-if="visible">
      <img
        :src="selectedSurvivor.image"
        :alt="selectedSurvivor.name"
        class="randomSelectedSurv"
      />
    </div>
    <img
      src="https://raw.githubusercontent.com/joeytierney/dbd-vue/develop/src/assets/general-icons/random-characte-portrait.png"
      alt="Random Survivor Placeholder Portrait"
      class="questionMark"
      id="questionPlaceholder"
    />
    <p id="helperText">Click the Survivor icon below!</p>
    <h1 class="survName">{{ selectedSurvivor.name }}</h1>
    <h3 class="survDLC">{{ selectedSurvivor.dlc }}</h3>
    <br />
    <div class="survButton">
      <img
        src="https://raw.githubusercontent.com/joeytierney/dbd-vue/develop/src/assets/general-icons/survivor-button.png"
        alt="Click here for a random survivor!"
        @click="rndSurv"
        class="randomSurvButton"
      />
    </div>
  </div>
</template>

<script>
import { survivorsArray } from "../utils/survivor/SurvivorArray.js";
export default {
  data() {
    return {
      survivorsArray: survivorsArray,
      selectedSurvivor: "",
      visible: false,
    };
  },
  methods: {
    randomArray() {
      const idx = Math.floor(Math.random() * this.survivorsArray.length);
      this.selectedSurvivor = this.survivorsArray[idx];
    },
    rndSurv() {
      this.randomArray();
      document.getElementById("questionPlaceholder").remove();
      document.getElementById("helperText").remove();
      this.visible = true;
    },
  },
};
</script>
