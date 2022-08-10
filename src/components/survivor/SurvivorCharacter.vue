<template>
  <div>
    <h1>Choose Your Survivor</h1>
    <br />
    <CharacterPlaceholder v-if="placeholder" />
    <div v-if="visible">
      <img
        :src="selectedSurvivor.image"
        :alt="selectedSurvivor.name"
        class="selected-survivor"
      />
      <h1>{{ selectedSurvivor.name }}</h1>
      <h3>{{ selectedSurvivor.dlc }}</h3>
    </div>
  </div>
  <ButtonSurvivor @click="randomizer()" />
</template>

<script>
import { survivorsArray } from "@/utils/survivor/SurvivorArray.js";
import ButtonSurvivor from "@/components/buttons/ButtonSurvivor.vue";
import CharacterPlaceholder from "@/components/placeholders/CharacterPlaceholder.vue";

export default {
  components: {
    ButtonSurvivor,
    CharacterPlaceholder,
  },
  data() {
    return {
      survivorsArray: survivorsArray,
      selectedSurvivor: "",
      visible: false,
      placeholder: true,
    };
  },
  methods: {
    randomArray() {
      const survivor = Math.floor(Math.random() * this.survivorsArray.length);
      this.selectedSurvivor = this.survivorsArray[survivor];
    },
    randomizer() {
      this.randomArray();
      this.placeholder = false;
      this.visible = true;
    },
  },
};
</script>
