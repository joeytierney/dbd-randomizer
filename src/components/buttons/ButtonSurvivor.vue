<template>
  <img
    src="https://raw.githubusercontent.com/joeytierney/dbd-vue/develop/src/assets/general-icons/survivor-button.png"
    alt="Click here for a random survivor!"
    @click="onClick"
    class="survivorButton"
  />
</template>

<style scoped>
.survivorButton {
  cursor: pointer;
  width: 7.5rem;
  height: 7.5rem;
}

.survivorButton:active {
  transform: translateY(0.25rem);
}
</style>
