<template>
  <img
    src="https://raw.githubusercontent.com/joeytierney/dbd-vue/develop/src/assets/general-icons/perk-button.png"
    alt="Click here for a random set of Perks!"
    @click="onClick"
    class="perk-button"
  />
</template>

<style scoped>
.perk-button {
  cursor: pointer;
  width: 9.375rem;
  height: 9.375rem;
}

.perk-button:active {
  transform: translateY(0.25rem);
}
</style>
