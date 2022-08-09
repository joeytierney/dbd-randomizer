<template>
  <h1>Survivor Perks</h1>
  <div class="perks">
    <div class="selected-perk">
      <img :src="perkOne.image" :alt="perkOne.name" />
      <h1>{{ perkOne.name }}</h1>
      <h3>{{ perkOne.teachable }}</h3>
      <ButtonReRoll />
    </div>
    <div class="selected-perk">
      <img :src="perkTwo.image" :alt="perkTwo.name" />
      <h1>{{ perkTwo.name }}</h1>
      <h3>{{ perkTwo.teachable }}</h3>
      <ButtonReRoll />
    </div>
    <div class="selected-perk">
      <img :src="perkThree.image" :alt="perkThree.name" />
      <h1>{{ perkThree.name }}</h1>
      <h3>{{ perkThree.teachable }}</h3>
      <ButtonReRoll />
    </div>
    <div class="selected-perk">
      <img :src="perkFour.image" :alt="perkFour.name" />
      <h1>{{ perkFour.name }}</h1>
      <h3>{{ perkFour.teachable }}</h3>
      <ButtonReRoll />
    </div>
  </div>
  <ButtonPerk />
</template>

<script>
import { survivorPerks } from "@/utils/survivor/SurvivorPerkArray.js";
import ButtonReRoll from "@/components/buttons/ButtonReRoll.vue";
import ButtonPerk from "@/components/buttons/ButtonPerk.vue";

export default {
  data() {
    return {
      survivorPerks: survivorPerks,
      ButtonReRoll,
      ButtonPerk,
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .selected-perk {
    width: 100%;
  }
}

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
