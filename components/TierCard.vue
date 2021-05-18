<template>
  <div
    class="rounded-lg border-dark-gray border-opacity-30 p-4 mb-8 border-1"
    :class="{ 'opacity-50': disabled }"
  >
    <div class="flex flex-col sm:flex-row sm:justify-between">
      <h3 class="mb-1">{{ title }}</h3>
      <p class="text-light-cyan">Pledge ${{ amount }} or more</p>
    </div>
    <p>{{ body }}</p>
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div class="flex items-center my-2">
        <h1 class="text-3xl mr-2">{{ count }}</h1>
        <p>left</p>
      </div>
      <button :disabled="disabled">
        {{ disabled || count === 0 ? 'Out of stock' : 'Select Reward' }}
      </button>
    </div>
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
.border-1 {
  border-width: 1px;
}
</style>
