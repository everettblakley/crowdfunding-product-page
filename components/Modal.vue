<template>
  <transition name="modal">
    <div class="wrapper">
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
  @apply absolute top-0 right-0 left-0 bottom-0 w-screen min-h-screen;
  @apply flex justify-center items-center;
  @apply bg-black bg-opacity-25;
  z-index: 9999;
}

.modal {
  @apply bg-white mx-8 rounded-3xl relative px-6 py-10;
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
