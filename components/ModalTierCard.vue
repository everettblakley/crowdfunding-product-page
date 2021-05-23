<template>
  <div
    class="w-full p-6 flex flex-col border-2 border-gray-200 rounded-2xl"
    :class="{ 'opacity-50': disabled, 'border-light-cyan': selected }"
    @click="onClickSelect"
  >
    <div class="flex items-center sm:items-start mb-4">
      <div class="h-full mr-4 flex justify-center items-center">
        <div
          class="h-6 w-6 rounded-full border-2 border-gray-200 cursor-pointer"
          :class="{ 'bg-light-cyan': selected }"
        ></div>
      </div>
      <div class="flex flex-col sm:flex-row">
        <h3 class="m-0 sm:mr-4">{{ title || 'Pledge with no reward' }}</h3>
        <p v-if="amount" class="text-light-cyan m-0">
          {{ amount && `Pledge $${amount} or more` }}
        </p>
      </div>
      <div
        v-if="count !== undefined"
        class="hidden sm:flex items-center ml-auto"
      >
        <h2 class="text-xl m-0 mr-2">{{ count }}</h2>
        left
      </div>
    </div>
    <p class="sm:ml-10 mb-0">
      {{
        body ||
        'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.'
      }}
    </p>
    <div v-if="count !== undefined" class="flex items-center sm:hidden">
      <h2 class="text-xl m-0 mr-2">{{ count }}</h2>
      left
    </div>
  </div>
</template>
<script>
export default {
  name: 'ModalTierCard',
  props: {
    title: {
      type: String,
      default: '',
    },
    amount: {
      type: Number,
      default: 0,
    },
    count: {
      type: [Number, undefined],
      default: undefined,
    },
    body: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    showCount() {
      return this.count !== undefined
    },
  },
  methods: {
    onClickSelect() {
      if (!this.disabled) {
        this.$emit('select-tier', this.title)
      }
    },
  },
}
</script>
