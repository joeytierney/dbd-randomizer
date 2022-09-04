<template>
  <footer
    class="fixed w-full bottom-0 bg-gray-900 pb-6 backdrop-filter bg-opacity-0"
  >
    <div class="container mx-auto px-4">
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4">
          <div class="text-sm text-white font-semibold py-1">
            Copyright © {{ date }}
            <a
              href="https://www.twitter.com/joeytiernee"
              class="text-white hover:text-gray-400 text-sm font-semibold py-1, link"
              target="_blank"
              title="https://twitter.com/joeytiernee"
              rel="noreferrer"
              >Joey Tierney</a
            >
            |
            <router-link
              to="/privacy-policy"
              class="text-white hover:text-gray-400 text-sm font-semibold py-1, link"
              title="Privacy Policy page"
              rel="noreferrer"
              >Privacy Policy</router-link
            >
          </div>
        </div>
        <div class="w-full md:w-8/12 px-4">
          <ul class="flex flex-wrap list-none md:justify-end justify-center">
            <li>
              <a
                href="https://www.twitter.com/joeytiernee"
                class="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                target="_blank"
                title="Follow me on Twitter"
                rel="noreferrer"
                ><img
                  src="https://raw.githubusercontent.com/joeytierney/dbd-vue/develop/src/assets/social-media-icons/twitter.png"
                  alt="Twitter"
                  width="20"
              /></a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/user/YTwoJT?sub_confirmation=1"
                class="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                target="_blank"
                title="Subscribe to my YouTube channel"
                rel="noreferrer"
                ><img
                  src="https://raw.githubusercontent.com/joeytierney/dbd-vue/develop/src/assets/social-media-icons/youtube.png"
                  alt="YouTube"
                  width="27"
              /></a>
            </li>
            <li>
              <a
                href="https://github.com/joeytierney"
                class="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                target="_blank"
                title="Follow me on GitHub"
                rel="noreferrer"
                ><img
                  src="https://raw.githubusercontent.com/joeytierney/dbd-vue/develop/src/assets/social-media-icons/github.png"
                  alt="GitHub"
                  width="20"
              /></a>
            </li>
            <li>
              <a
                href="https://ie.linkedin.com/in/joey-tierney"
                class="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                target="_blank"
                title="Connect with me on LinkedIn"
                rel="noreferrer"
                ><img
                  src="https://raw.githubusercontent.com/joeytierney/dbd-vue/develop/src/assets/social-media-icons/linkedin.png"
                  alt="LinkedIn"
                  width="20"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>
