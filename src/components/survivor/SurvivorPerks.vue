<template>
  <h1>Survivor Perks</h1>
  <div class="perks">
    <div class="selected-perk">
      <img :src="perkOne.image" :alt="perkOne.name" />
      <h1>{{ perkOne.name }}</h1>
      <h3>{{ perkOne.teachable }}</h3>
    </div>
    <div class="selected-perk"></div>
    <div class="selected-perk"></div>
    <div class="selected-perk"></div>
  </div>
</template>

<script>
import { survivorPerks } from "@/utils/survivor/SurvivorPerkArray.js";

export default {
  data() {
    return {
      survivorPerks: survivorPerks,
    };
  },
};
</script>

<style scoped>
.selected-perk {
  float: left;
  width: 25%;
}

.perks:after {
  content: "";
  display: table;
  clear: both;
}
</style>
