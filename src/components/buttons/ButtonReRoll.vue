<template>
  <img
    src="https://raw.githubusercontent.com/joeytierney/dbd-vue/develop/src/assets/general-icons/random-reroll-icon.png"
    alt="Click here to reroll the perk above!"
    @click="onClick"
    class="reroll-button"
  />
  <label>Reroll Perk</label>
</template>

<style scoped>
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
