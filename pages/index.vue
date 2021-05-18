<template>
  <div class="bg-lighter-gray">
    <header class="relative">
      <div class="absolute top-0 right-0 left-0 bg-gradient-to-b from-black">
        <img
          src="/image-hero-mobile.jpg"
          alt="Mastercraft Hero image"
          class="block sm:hidden"
        />
        <img
          src="/image-hero-desktop.jpg"
          alt="Mastercraft Hero image"
          class="hidden sm:block"
        />
      </div>
      <div
        class="absolute top-0 right-0 left-0 bg-gradient-to-b from-black h-40"
      ></div>
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
    <main class="mt-40 px-6 w-full sm:w-10/12 md:3/4 lg:w-1/2 mx-auto bg-none">
      <section class="relative text-center">
        <div class="icon">
          <img src="/logo-mastercraft.svg" alt="" />
        </div>
        <h1 class="mt-4">Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div class="flex justify-between items-center">
          <button>Back this project</button>
          <div class="bookmark-buttons">
            <bookmark class="relative mr-0 sm:-mr-7"></bookmark>
            <div class="bookmark-btn">Bookmark</div>
          </div>
        </div>
      </section>

      <section>
        <div class="stats">
          <div class="stat">
            <h1>$89,914</h1>
            <p>of $100,000 backed</p>
          </div>
          <div class="stat">
            <h1>5,007</h1>
            <p>total backers</p>
          </div>
          <div class="stat">
            <h1>56</h1>
            <p>days left</p>
          </div>
        </div>
        <div class="progress mt-3 w-full h-3 rounded-lg bg-gray-200"></div>
      </section>

      <section>
        <h2>About this project</h2>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
        <tier-card
          v-for="tier in tiers"
          :key="tier.title"
          :title="tier.title"
          :amount="tier.amount"
          :body="tier.body"
          :count="tier.count"
          :disabled="tier.disabled"
        ></tier-card>
      </section>
    </main>
  </div>
</template>

<script>
import Bookmark from '../components/icons/Bookmark.vue'
import CloseMenu from '../components/icons/CloseMenu.vue'
import Hamburger from '../components/icons/Hamburger.vue'
import TierCard from '../components/TierCard.vue'
export default {
  components: { Hamburger, CloseMenu, Bookmark, TierCard },
  data() {
    return {
      menuOpen: false,
      tiers: [
        {
          title: 'Bamboo Stand',
          amount: 25,
          body:
            'You get an ergonomic stand made of natural bamboo. ' +
            "You've helped us launch our promotional campaign, " +
            'and you’ll be added to a special Backer member list.',
          count: 101,
        },
        {
          title: 'Black Edition Stand',
          amount: 75,
          body:
            'You get a Black Special Edition computer stand and a personal ' +
            'thank you. You’ll be added to our Backer member list. ' +
            'Shipping is included.',
          count: 64,
        },
        {
          title: 'Mahogany Special Edition',
          amount: 200,
          body:
            'You get two Special Edition Mahogany stands, a Backer T-Shirt, ' +
            'and a personal thank you. You’ll be added to our Backer member ' +
            'list. Shipping is included.',
          count: 0,
          disabled: true,
        },
      ],
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
  },
}
</script>

<style lang="postcss">
h1,
h2,
h3,
button {
  @apply font-bold;
}

h1,
h2,
h3,
p {
  @apply mb-4;
}

h1 {
  @apply text-xl;
}

h2 {
  @apply text-lg;
}

p {
  @apply text-dark-gray;
}

a:hover {
  @apply underline;
}

nav {
  @apply relative flex items-center w-full sm:w-4/5 sm:mx-auto z-10 p-6 pt-10;
  @apply text-white;
}

section {
  @apply mb-8 py-8 px-6 sm:px-10;
  @apply bg-white rounded-lg border-gray-200 border-opacity-30;
  border-width: 1px;
}

button {
  @apply text-white bg-light-cyan py-4 px-10 rounded-full h-14 transition-colors;
}

button:hover,
button:focus {
  @apply bg-dark-cyan;
}

button:disabled {
  @apply bg-dark-gray;
}

.hero {
  @apply bg-gradient-to-b from-black;
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

.icon {
  @apply absolute -top-7 left-1/2 transform -translate-x-1/2 rounded-full;
  @apply w-14 h-14;
}

.bookmark-buttons {
  @apply flex text-darker-gray hover:text-light-gray transition-colors cursor-pointer;
}

.bookmark-btn {
  @apply hidden sm:flex items-center justify-center py-4 pr-10 pl-12 rounded-r-full font-bold;
  @apply bg-lighter-gray;
}

.stats {
  @apply flex flex-col sm:flex-row sm:justify-between;
  @apply space-y-8 sm:space-y-0 sm:space-x-8 w-full;
  @apply text-center sm:text-left;
}

.stat {
  @apply relative;
  flex-basis: 100%;
}

.stat h1 {
  @apply text-3xl mb-2;
}

@media screen and (max-width: 640px) {
  .stat > * {
    padding: 0;
  }

  .stat + .stat::before {
    content: '';
    @apply absolute -top-6 left-1/2 w-1/3 bg-gray-200 transform -translate-x-1/2;
    height: 2px;
  }
}

@media screen and (min-width: 640px) {
  .stat:not(:last-of-type) {
    @apply border-gray-200;
    border-right-width: 2px;
  }
}

.progress::after {
  content: '';
  @apply block bg-light-cyan rounded-lg h-full;
  width: 89%;
}
</style>
