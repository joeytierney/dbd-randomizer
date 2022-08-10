<template>
  <h1>Killer Perks</h1>
  <div v-if="visible" class="perks">
    <div class="selected-perk">
      <img :src="perkOne.image" :alt="perkOne.name" />
      <h1>{{ perkOne.name }}</h1>
      <h3>{{ perkOne.teachable }}</h3>
      <ButtonReRoll @click="rerollOne" />
    </div>
    <div class="selected-perk">
      <img :src="perkTwo.image" :alt="perkTwo.name" />
      <h1>{{ perkTwo.name }}</h1>
      <h3>{{ perkTwo.teachable }}</h3>
      <ButtonReRoll @click="rerollTwo" />
    </div>
    <div class="selected-perk">
      <img :src="perkThree.image" :alt="perkThree.name" />
      <h1>{{ perkThree.name }}</h1>
      <h3>{{ perkThree.teachable }}</h3>
      <ButtonReRoll @click="rerollThree" />
    </div>
    <div class="selected-perk">
      <img :src="perkFour.image" :alt="perkFour.name" />
      <h1>{{ perkFour.name }}</h1>
      <h3>{{ perkFour.teachable }}</h3>
      <ButtonReRoll @click="rerollFour" />
    </div>
  </div>
  <ButtonPerk @click="randomizer()" />
</template>

<script>
import { killerPerks } from "@/utils/killer/KillerPerkArray.js";
import ButtonReRoll from "@/components/buttons/ButtonReRoll.vue";
import ButtonPerk from "@/components/buttons/ButtonPerk.vue";

export default {
  components: {
    ButtonReRoll,
    ButtonPerk,
  },
  data() {
    return {
      killerPerks: killerPerks,
      perkOne: "",
      perkTwo: "",
      perkThree: "",
      perkFour: "",
      visible: false,
    };
  },
  methods: {
    randomArray() {
      const perkOne = Math.floor(Math.random() * this.killerPerks.length);
      const perkTwo = Math.floor(Math.random() * this.killerPerks.length);
      const perkThree = Math.floor(Math.random() * this.killerPerks.length);
      const perkFour = Math.floor(Math.random() * this.killerPerks.length);

      this.perkOne = this.killerPerks[perkOne];
      this.perkTwo = this.killerPerks[perkTwo];
      this.perkThree = this.killerPerks[perkThree];
      this.perkFour = this.killerPerks[perkFour];

      this.repeatPerks();
    },
    repeatPerks() {
      if (
        this.perkOne === this.perkTwo ||
        this.perkOne === this.perkThree ||
        this.perkOne === this.perkFour
      ) {
        this.randomArray();
      }
      if (this.perkTwo === this.perkThree || this.perkTwo === this.perkFour) {
        this.randomArray();
      }
      if (this.perkThree === this.perkFour) {
        this.randomArray();
      }
    },
    rerollOne() {
      const perkOne = Math.floor(Math.random() * this.survivorPerks.length);
      this.perkOne = this.survivorPerks[perkOne];
      if (
        this.perkOne === this.perkTwo ||
        this.perkOne === this.perkThree ||
        this.perkOne === this.perkFour
      ) {
        this.rerollOne();
      }
    },
    rerollTwo() {
      const perkTwo = Math.floor(Math.random() * this.survivorPerks.length);
      this.perkTwo = this.survivorPerks[perkTwo];
      if (
        this.perkTwo === this.perkOne ||
        this.perkTwo === this.perkThree ||
        this.perkTwo === this.perkFour
      ) {
        this.rerollTwo();
      }
    },
    rerollThree() {
      const perkThree = Math.floor(Math.random() * this.survivorPerks.length);
      this.perkThree = this.survivorPerks[perkThree];
      if (
        this.perkThree === this.perkOne ||
        this.perkThree === this.perkTwo ||
        this.perkThree === this.perkFour
      ) {
        this.rerollThree();
      }
    },
    rerollFour() {
      const perkFour = Math.floor(Math.random() * this.survivorPerks.length);
      this.perkFour = this.survivorPerks[perkFour];
      if (
        this.perkFour === this.perkOne ||
        this.perkFour === this.perkTwo ||
        this.perkFour === this.perkThree
      ) {
        this.rerollFour();
      }
    },
    randomizer() {
      this.randomArray();
      this.visible = true;
    },
  },
}
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
