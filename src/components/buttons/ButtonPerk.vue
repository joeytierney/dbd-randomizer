<template>
  <img
    src="https://raw.githubusercontent.com/joeytierney/dbd-vue/develop/src/assets/general-icons/perk-button.png"
    alt="Click here for a random set of Perks!"
    @click="onClick"
    class="perkButton"
  />
</template>

<style scoped>
.perkButton {
  cursor: pointer;
  width: 9.375rem;
  height: 9.375rem;
}

.perkButton:active {
  transform: translateY(0.25rem);
}
</style>
