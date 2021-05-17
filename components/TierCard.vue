<template>
  <div class="tier-card" :class="{ disabled: disabled }">
    <div class="title">
      <h3>{{ title }}</h3>
      <p>Pledge ${{ amount }} or more</p>
    </div>
    <p>{{ body }}</p>
    <div class="count">
      <h1>{{ count }}</h1>
      <p>left</p>
    </div>
    <button :disabled="disabled">
      {{ disabled || count === 0 ? 'Out of stock' : 'Select Reward' }}
    </button>
  </div>
</template>
<script>
export default {
  name: 'TierCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    body: {
      type: String,
      default: '',
    },
    count: {
      type: Number,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang="postcss">
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
  opacity: 0.5;
}
</style>
