<template>
  <div class="bg-lighter-gray">
    <custom-header></custom-header>
    <main class="mt-40 sm:mt-56 px-6 sm:px-0 center-container bg-none">
      <section class="relative text-center">
        <div class="icon">
          <img src="/logo-mastercraft.svg" alt="" />
        </div>
        <h1 class="mt-4">Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div class="flex justify-between items-center">
          <button @click.stop="toggleModal">Back this project</button>
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
          v-for="tier in tierCards"
          :key="tier.title"
          :title="tier.title"
          :amount="tier.amount"
          :body="tier.body"
          :count="tier.count"
          :disabled="tier.disabled"
          @select-tier="onSelectTier"
        ></tier-card>
      </section>
    </main>
    <back-project-modal
      v-if="modalOpen"
      :tiers="tiers"
      @select-tier="onSelectTier"
      @close="onModalClose"
    ></back-project-modal>
  </div>
</template>

<script>
import Bookmark from '../components/icons/Bookmark.vue'
import BackProjectModal from '../components/BackProjectModal.vue'
import TierCard from '../components/TierCard.vue'
import CustomHeader from '../components/CustomHeader.vue'
export default {
  components: { Bookmark, TierCard, BackProjectModal, CustomHeader },
  data() {
    return {
      modalOpen: false,
      tiers: [
        {
          title: '',
          count: undefined,
          amount: 0,
          body: '',
          disabled: false,
          selected: false,
        },
        {
          title: 'Bamboo Stand',
          amount: 25,
          body:
            'You get an ergonomic stand made of natural bamboo. ' +
            "You've helped us launch our promotional campaign, " +
            'and you’ll be added to a special Backer member list.',
          count: 101,
          disabled: false,
          selected: false,
        },
        {
          title: 'Black Edition Stand',
          amount: 75,
          body:
            'You get a Black Special Edition computer stand and a personal ' +
            'thank you. You’ll be added to our Backer member list. ' +
            'Shipping is included.',
          count: 64,
          disabled: false,
          selected: false,
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
          selected: false,
        },
      ],
    }
  },
  computed: {
    tierCards() {
      return this.tiers.filter((t) => !!t.title)
    },
  },
  methods: {
    toggleModal() {
      this.modalOpen = !this.modalOpen
    },
    onModalClose() {
      this.modalOpen = false
      this.tiers.forEach((tier) => (tier.selected = false))
    },
    onSelectTier(title) {
      let tier
      this.tiers.forEach((t) => {
        if (t.title === title && !t.selected) {
          tier = t
          tier.selected = true
        } else {
          t.selected = false
        }
      })
      if (tier !== undefined) {
        this.modalOpen = true
      }
    },
  },
}
</script>
<style lang="postcss">
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
