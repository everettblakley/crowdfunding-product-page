<template>
  <transition name="modal">
    <div>
      <div class="wrapper"></div>
      <div v-on-clickaway="close" class="modal center-container">
        <close-modal
          class="absolute top-8 right-8"
          @click.native="close"
        ></close-modal>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
<script>
import CloseModal from './icons/CloseModal.vue'
export default {
  name: 'Modal',
  components: { CloseModal },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="postcss">
.wrapper {
  @apply fixed top-0 right-0 left-0 bottom-0 w-screen min-h-screen;
  @apply bg-black bg-opacity-25;
  z-index: 9999;
}

.modal {
  @apply absolute top-48 left-1/2 transform -translate-x-1/2;
  @apply bg-white mx-6 rounded-2xl px-6 py-10;
  z-index: 10000;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 250ms ease-out;
}
</style>
