<template>
  <img
    src="https://raw.githubusercontent.com/joeytierney/dbd-vue/develop/src/assets/general-icons/random-reroll-icon.png"
    alt="Click here to reroll the perk above!"
    @click="onClick"
    class="reroll-button"
  />
</template>

<style scoped>
.reroll-button {
  cursor: pointer;
  width: 7.6875rem;
}

.reroll-button:active {
  transform: translateY(0.25rem);
}
</style>
