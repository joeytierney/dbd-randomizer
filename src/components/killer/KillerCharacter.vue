<template>
  <div>
    <h1>Choose Your Killer</h1>
    <br />
    <div v-if="visible">
      <img
        :src="selectedKiller.image"
        :alt="selectedKiller.name"
        class="selected-killer"
      />
    </div>
    <img
      src="https://raw.githubusercontent.com/joeytierney/dbd-vue/develop/src/assets/general-icons/random-character-portrait.png"
      alt="Random Killer Placeholder Portrait"
      id="placeholder"
    />
    <p id="helper-text">Click the Killer icon below!</p>
    <h1>{{ selectedKiller.name }}</h1>
    <h3>{{ selectedKiller.dlc }}</h3>
  </div>
  <ButtonKiller @click="randomizer()" />
</template>

<script>
import { killersArray } from "@/utils/killer/KillerArray.js";
import ButtonKiller from "@/components/buttons/ButtonKiller.vue";

export default {
  components: {
    ButtonKiller,
  },
  data() {
    return {
      killersArray: killersArray,
      selectedKiller: "",
      visible: false,
    };
  },
  methods: {
    randomArray() {
      const idx = Math.floor(Math.random() * this.killersArray.length);
      this.selectedKiller = this.killersArray[idx];
    },
    randomizer() {
      this.randomArray();
      document.getElementById("questionPlaceholder").remove();
      document.getElementById("helperText").remove();
      this.visible = true;
    },
  },
};
</script>
