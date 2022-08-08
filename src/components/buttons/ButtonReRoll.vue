<template>
  <img
    src="https://raw.githubusercontent.com/joeytierney/dbd-vue/develop/src/assets/general-icons/random-reroll-icon.png"
    alt="Click here to reroll the perk above!"
    @click="onClick"
    class="rerollButton"
  />
</template>

<style scoped>
.rerollButton {
  cursor: pointer;
  width: 7.6875rem;
}

.rerollButton:active {
  transform: translateY(0.25rem);
}
</style>
