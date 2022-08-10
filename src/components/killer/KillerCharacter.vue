<template>
  <div>
    <h1>Choose Your Killer</h1>
    <br />
    <CharacterPlaceholder v-if="placeholder" />
    <div v-if="visible">
      <img
        :src="selectedKiller.image"
        :alt="selectedKiller.name"
        class="selected-killer"
      />
      <h1>{{ selectedKiller.name }}</h1>
      <h3>{{ selectedKiller.dlc }}</h3>
    </div>
  </div>
  <ButtonKiller @click="randomizer()" />
</template>

<script>
import { killersArray } from "@/utils/killer/KillerArray.js";
import ButtonKiller from "@/components/buttons/ButtonKiller.vue";
import CharacterPlaceholder from "@/components/placeholders/CharacterPlaceholder.vue";

export default {
  components: {
    ButtonKiller,
    CharacterPlaceholder,
  },
  data() {
    return {
      killersArray: killersArray,
      selectedKiller: "",
      visible: false,
      placeholder: true,
    };
  },
  methods: {
    randomArray() {
      const killer = Math.floor(Math.random() * this.killersArray.length);
      this.selectedKiller = this.killersArray[killer];
    },
    randomizer() {
      this.randomArray();
      this.placeholder = false;
      this.visible = true;
    },
  },
};
</script>
