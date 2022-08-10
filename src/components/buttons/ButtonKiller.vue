<template>
  <img
    src="https://raw.githubusercontent.com/joeytierney/dbd-vue/develop/src/assets/general-icons/killer-button.png"
    alt="Click here for a random Killer!"
    @click="onClick"
    class="killer-button"
  />
</template>

<style scoped>
.killer-button {
  cursor: pointer;
  width: 7.5rem;
  height: 7.5rem;
}

.killer-button:active {
  transform: translateY(0.25rem);
}
</style>
