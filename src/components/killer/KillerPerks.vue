<template>
  <h1>Killer Perks</h1>
  <div class="perks">
    <div v-for="index in 4" :key="index" class="selected-perk">
      <PerkPlaceholder v-if="placeholder" />
    </div>
    <label v-if="placeholder" class="text-center">Click the icon below!</label>
  </div>
  <div v-if="visible" class="perks">
    <div class="selected-perk">
      <img :src="perkOne.image" :alt="perkOne.name" />
      <h1>{{ perkOne.name }}</h1>
      <h3>{{ perkOne.teachable }}</h3>
      <img
        src="https://raw.githubusercontent.com/joeytierney/dbd-vue/develop/src/assets/general-icons/random-reroll-icon.png"
        alt="Click here to reroll the perk above!"
        @click="rerollOne()"
        class="reroll-button"
      />
      <label>Reroll Perk</label>
    </div>
    <div class="selected-perk">
      <img :src="perkTwo.image" :alt="perkTwo.name" />
      <h1>{{ perkTwo.name }}</h1>
      <h3>{{ perkTwo.teachable }}</h3>
      <img
        src="https://raw.githubusercontent.com/joeytierney/dbd-vue/develop/src/assets/general-icons/random-reroll-icon.png"
        alt="Click here to reroll the perk above!"
        @click="rerollTwo()"
        class="reroll-button"
      />
      <label>Reroll Perk</label>
    </div>
    <div class="selected-perk">
      <img :src="perkThree.image" :alt="perkThree.name" />
      <h1>{{ perkThree.name }}</h1>
      <h3>{{ perkThree.teachable }}</h3>
      <img
        src="https://raw.githubusercontent.com/joeytierney/dbd-vue/develop/src/assets/general-icons/random-reroll-icon.png"
        alt="Click here to reroll the perk above!"
        @click="rerollThree()"
        class="reroll-button"
      />
      <label>Reroll Perk</label>
    </div>
    <div class="selected-perk">
      <img :src="perkFour.image" :alt="perkFour.name" />
      <h1>{{ perkFour.name }}</h1>
      <h3>{{ perkFour.teachable }}</h3>
      <img
        src="https://raw.githubusercontent.com/joeytierney/dbd-vue/develop/src/assets/general-icons/random-reroll-icon.png"
        alt="Click here to reroll the perk above!"
        @click="rerollFour()"
        class="reroll-button"
      />
      <label>Reroll Perk</label>
    </div>
  </div>
  <ButtonPerk @click="randomizer()" />
</template>

<script>
import { killerPerks } from "@/utils/killer/KillerPerkArray.js";
import ButtonPerk from "@/components/buttons/ButtonPerk.vue";
import PerkPlaceholder from "@/components/placeholders/PerkPlaceholder.vue";

export default {
  components: {
    ButtonPerk,
    PerkPlaceholder,
  },
  data() {
    return {
      killerPerks: killerPerks,
      perkOne: "",
      perkTwo: "",
      perkThree: "",
      perkFour: "",
      visible: false,
      placeholder: true,
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
      const perkOne = Math.floor(Math.random() * this.killerPerks.length);
      this.perkOne = this.killerPerks[perkOne];
      if (
        this.perkOne === this.perkTwo ||
        this.perkOne === this.perkThree ||
        this.perkOne === this.perkFour
      ) {
        this.rerollOne();
      }
    },
    rerollTwo() {
      const perkTwo = Math.floor(Math.random() * this.killerPerks.length);
      this.perkTwo = this.killerPerks[perkTwo];
      if (
        this.perkTwo === this.perkOne ||
        this.perkTwo === this.perkThree ||
        this.perkTwo === this.perkFour
      ) {
        this.rerollTwo();
      }
    },
    rerollThree() {
      const perkThree = Math.floor(Math.random() * this.killerPerks.length);
      this.perkThree = this.killerPerks[perkThree];
      if (
        this.perkThree === this.perkOne ||
        this.perkThree === this.perkTwo ||
        this.perkThree === this.perkFour
      ) {
        this.rerollThree();
      }
    },
    rerollFour() {
      const perkFour = Math.floor(Math.random() * this.killerPerks.length);
      this.perkFour = this.killerPerks[perkFour];
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
      this.placeholder = false;
      this.visible = true;
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .selected-perk {
    width: 100%;
  }
}

h1 {
  margin-top: 1.2rem;
  font-size: 1.5rem;
}

h3 {
  color: #ff8800;
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

.reroll-button {
  cursor: pointer;
  width: 7.6875rem;
  margin-left: auto;
  margin-right: auto;
}

.reroll-button:active {
  transform: translateY(0.25rem);
}
</style>
