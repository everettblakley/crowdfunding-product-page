<template>
  <header class="relative">
    <div class="absolute top-0 right-0 left-0">
      <img
        src="/image-hero-mobile.jpg"
        alt="Mastercraft Hero image"
        class="block sm:hidden w-full object-cover hero-mobile"
      />
      <img
        src="/image-hero-desktop.jpg"
        alt="Mastercraft Hero image"
        class="hidden sm:block w-full object-cover hero-desktop"
      />
    </div>
    <div class="overlay"></div>
    <nav>
      <logo class="h-5"></logo>
      <ul class="hidden sm:flex ml-auto items-center space-x-8 font-medium">
        <li><nuxt-link to="#">About</nuxt-link></li>
        <li><nuxt-link to="#">Discover</nuxt-link></li>
        <li><nuxt-link to="#">Get Started</nuxt-link></li>
      </ul>
      <div
        class="block sm:hidden ml-auto w-4 h-4 overflow-hidden"
        @click="toggleMenu"
      >
        <close-menu v-if="menuOpen" key="close"></close-menu>
        <hamburger v-else key="hamburger"></hamburger>
      </div>
      <transition name="menu-slide">
        <div
          v-if="menuOpen"
          v-on-clickaway="toggleMenu"
          class="mobile-menu-mask"
        >
          <ul class="mobile-menu">
            <li><nuxt-link to="#">About</nuxt-link></li>
            <li><nuxt-link to="#">Discover</nuxt-link></li>
            <li><nuxt-link to="#">Get Started</nuxt-link></li>
          </ul>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script>
import CloseMenu from './icons/CloseMenu.vue'
import Hamburger from './icons/Hamburger.vue'
export default {
  name: 'Header',
  components: { Hamburger, CloseMenu },
  data() {
    return { menuOpen: false }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
  },
}
</script>
<style lang="postcss">
nav {
  @apply relative flex items-center w-full sm:w-4/5 sm:mx-auto z-10 p-6 pt-10;
  @apply text-white;
}

.hero-mobile {
  height: 300px;
}

.hero-desktop {
  height: 400px;
}

.overlay {
  @apply absolute top-0 right-0 left-0 bg-gradient-to-b from-black via-transparent h-40;
}

.menu-slide-enter,
.menu-slide-leave-to {
  opacity: 0;
  transform: translateY(-10%);
}

.menu-slide-enter-to,
.menu-slide-leave {
  opacity: 1;
  transform: translateY(0);
}

.menu-slide-enter-active,
.menu-slide-leave-active {
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  transition-duration: opacity, transform;
}

.mobile-menu-mask {
  @apply fixed top-0 bottom-0 right-0 left-0 pointer-events-none z-40;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3412552521008403) 31%,
    rgba(255, 255, 255, 0) 100%
  );
}

.mobile-menu {
  @apply bg-white text-black text-lg font-medium;
  @apply absolute top-20 left-6 right-6 z-50;
  @apply rounded-lg border-2;
}

.mobile-menu li {
  @apply px-4 py-5;
}

.mobile-menu li + li {
  @apply border-gray-200 border-0 border-t-2;
}
</style>
