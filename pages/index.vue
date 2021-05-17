<template>
  <div>
    <header class="relative bg-red">
      <!-- <img
        src="/image-hero-mobile.jpg"
        alt="Mastercraft Hero image"
        class="absolute top-0 left-0 right-0 z-0"
      /> -->
      <nav class="flex items-center w-full z-10 px-8 pt-6">
        <logo class="h-5"></logo>
        <ul class="hidden sm:flex ml-auto">
          <li><nuxt-link to="#">About</nuxt-link></li>
          <li><nuxt-link to="#">Discover</nuxt-link></li>
          <li><nuxt-link to="#">Get Started</nuxt-link></li>
        </ul>
        <div
          class="text-black ml-auto w-4 h-4 overflow-hidden"
          @click="toggleMenu"
        >
          <transition name="menu" mode="out-in">
            <hamburer v-if="menuOpen"></hamburer>
            <close-menu v-else></close-menu>
          </transition>
        </div>
      </nav>
    </header>
    <main class="mt-32 px-6">
      <section class="relative text-center">
        <div class="icon">
          <img src="/logo-mastercraft.svg" alt="" />
        </div>
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div class="flex justify-between items-center">
          <button>Back this project</button>
          <bookmark></bookmark>
        </div>
      </section>

      <section>
        <div class="text-center flex flex-col space-y-8">
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

        <div class="tier-card">
          <div class="title">
            <h3>Bamboo Stand</h3>
            <p>Pledge $25 or more</p>
          </div>
          <p>
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </p>
          <div class="count">
            <h1>101</h1>
            <p>left</p>
          </div>
          <button>Select Reward</button>
        </div>

        <div class="tier-card">
          <div class="title">
            <h3>Black Edition Stand</h3>
            <p>Pledge $75 or more</p>
          </div>
          <p>
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is
            included.
          </p>
          <div class="count">
            <h1>64</h1>
            <p>left</p>
          </div>
          <button>Select Reward</button>
        </div>

        <div class="tier-card disabled">
          <div class="title">
            <h3>Mahogany Special Edition</h3>
            <p>Pledge $200 or more</p>
          </div>
          <p>
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.
          </p>
          <div class="count">
            <h1>0</h1>
            <p>left</p>
          </div>
          <button disabled>Out of Stock</button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Bookmark from '../components/icons/Bookmark.vue'
import CloseMenu from '../components/icons/CloseMenu.vue'
import Hamburer from '../components/icons/Hamburer.vue'
export default {
  components: { Hamburer, CloseMenu, Bookmark },
  data() {
    return {
      menuOpen: false,
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

section {
  @apply rounded-lg border-gray-200 border-opacity-30 mb-8 px-6 py-8;
  border-width: 1px;
}

button {
  @apply text-white bg-light-cyan py-4 px-10 rounded-full h-14;
}

button:disabled {
  @apply bg-dark-gray;
}

.menu-enter,
.menu-leave-to {
  opactiy: 0;
}

.menu-enter-active,
.menu-leave-active {
  transition: opactiy 200ms ease;
}

.icon {
  @apply absolute -top-7 left-1/2 transform -translate-x-1/2 rounded-full;
  @apply w-14 h-14;
}

.stat {
  @apply relative;
}

.stat h1 {
  @apply text-3xl mb-2;
}

.stat + .stat::before {
  content: '';
  @apply absolute -top-6 left-1/2 w-1/3 bg-gray-200 transform -translate-x-1/2;
  height: 2px;
}

.progress::after {
  content: '';
  @apply block bg-light-cyan rounded-lg h-full;
  width: 89%;
}

.tier-card {
  @apply rounded-lg border-dark-gray border-opacity-30 p-4 mb-8;
  border-width: 1px;
}

.tier-card > .title h3 {
  @apply mb-1;
}

.tier-card > .title p {
  @apply text-light-cyan;
}

.tier-card > .count {
  @apply flex items-center my-2;
}

.tier-card > .count h1 {
  @apply text-3xl mr-2;
}

.tier-card.disabled {
  /* @apply; */
  opacity: 50%;
}
</style>
