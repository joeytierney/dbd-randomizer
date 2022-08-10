<template>
  <img
    src="https://raw.githubusercontent.com/joeytierney/dbd-vue/develop/src/assets/general-icons/survivor-button.png"
    alt="Click here for a random Survivor!"
    @click="onClick"
    class="survivor-button"
  />
</template>

<style scoped>
.survivor-button {
  cursor: pointer;
  width: 7.5rem;
  height: 7.5rem;
  margin-left: auto;
  margin-right: auto;
}

.survivor-button:active {
  transform: translateY(0.25rem);
}
</style>
