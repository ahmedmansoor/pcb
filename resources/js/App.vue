<template>
  <div class="bg-white">
    <nav
      class="
        container
        px-6
        py-8
        mx-auto
        md:flex md:justify-between md:items-center
      "
    >
      <div class="flex items-center justify-between">
        <router-link
          to="/"
          class="
            text-xl
            font-semibold
          "
          >PCB Website
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="
              text-gray-400
              hover:text-gray-500
              focus:outline-none focus:text-gray-500
            "
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="
          flex-col
          mt-8
          space-y-4
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 font-text
        "
      >
        <li class="text-gray-400 hover:text-primary">PCB</li>
        <li class="text-gray-400 hover:text-primary">Publications</li>
        <li class="text-gray-400 hover:text-primary">Media</li>
        <li class="text-gray-400 hover:text-primary">Downloads</li>
      </ul>
        <div
        :class="showMenu ? 'flex' : 'hidden'"
        class="md:flex
        py-4 md:py-0">
            <button 
            type="button"
            class="flex bg-primary text-white p-2 rounded font-textLight px-5">
            <a href="https://soegateway.egov.mv/">SOE Gateway</a>
            </button>
        </div>
    </nav>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>