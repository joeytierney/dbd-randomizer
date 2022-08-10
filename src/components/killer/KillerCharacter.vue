<template>
  <div class="killers">
    <h1 class="header">Choose Your Killer</h1>
    <br />
    <div class="killerImage" v-if="visible">
      <img
        :src="selectedKiller.image"
        :alt="selectedKiller.name"
        class="randomSelectedKiller"
      />
    </div>
    <img
      src="https://raw.githubusercontent.com/joeytierney/dbd-vue/develop/src/assets/general-icons/random-character-portrait.png"
      alt="Random Killer Placeholder Portrait"
      class="questionMark"
      id="questionPlaceholder"
    />
    <p id="helperText">Click the Killer icon below!</p>
    <h1 class="killerName">{{ selectedKiller.name }}</h1>
    <h3 class="killerDLC">{{ selectedKiller.dlc }}</h3>
    <br />
    <div class="killerButton">
      <ButtonKiller @click="rndKiller()" />
    </div>
  </div>
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
    rndKiller() {
      this.randomArray();
      document.getElementById("questionPlaceholder").remove();
      document.getElementById("helperText").remove();
      this.visible = true;
    },
  },
};
</script>
