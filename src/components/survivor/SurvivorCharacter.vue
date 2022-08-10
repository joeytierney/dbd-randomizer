<template>
  <div>
    <h1>Choose Your Survivor</h1>
    <br />
    <div v-if="visible">
      <img
        :src="selectedSurvivor.image"
        :alt="selectedSurvivor.name"
        class="selected-survivor"
      />
    </div>
    <img
      src="https://raw.githubusercontent.com/joeytierney/dbd-vue/develop/src/assets/general-icons/random-character-portrait.png"
      alt="Random Survivor Placeholder Portrait"
      class="question-mark"
      id="placeholder"
    />
    <p id="helper-text">Click the Survivor icon below!</p>
    <h1>{{ selectedSurvivor.name }}</h1>
    <h3>{{ selectedSurvivor.dlc }}</h3>
  </div>
  <ButtonSurvivor @click="randomizer()" />
</template>

<script>
import { survivorsArray } from "@/utils/survivor/SurvivorArray.js";
import ButtonSurvivor from "@/components/buttons/ButtonSurvivor.vue";

export default {
  components: {
    ButtonSurvivor,
  },
  data() {
    return {
      survivorsArray: survivorsArray,
      selectedSurvivor: "",
      visible: false,
    };
  },
  methods: {
    randomArray() {
      const survivor = Math.floor(Math.random() * this.survivorsArray.length);
      this.selectedSurvivor = this.survivorsArray[survivor];
    },
    randomizer() {
      this.randomArray();
      document.getElementById("placeholder").remove();
      document.getElementById("helper-text").remove();
      this.visible = true;
    },
  },
};
</script>
