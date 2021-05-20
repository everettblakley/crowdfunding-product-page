<template>
  <modal v-on="$listeners">
    <h1>Back this project</h1>
    <p>
      Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the
      world?
    </p>
    <div class="w-full p-6 flex flex-col border-2 border-gray-200 rounded-2xl">
      <div class="flex items-center sm:items-start mb-4">
        <div class="h-full mr-4 flex justify-center items-center">
          <div
            class="h-6 w-6 rounded-full border-2 border-gray-200 cursor-pointer"
          ></div>
        </div>
        <div class="flex flex-col sm:flex-row">
          <h3 class="m-0 sm:mr-4">Pledge with no reward</h3>
          <p class="text-light-cyan m-0">Pledge $25 or more</p>
        </div>
        <div class="hidden sm:flex items-center ml-auto">
          <h2 class="text-xl m-0 mr-2">101</h2>
          left
        </div>
      </div>
      <p class="sm:ml-10 mb-0">
        Choose to support us without a reward if you simply believe in our
        project. As a backer, you will be signed up to receive product updates
        via email.
      </p>
      <div class="flex items-center sm:hidden">
        <h2 class="text-xl m-0 mr-2">101</h2>
        left
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from './Modal.vue'
export default {
  name: 'BackProjectModal',
  components: { Modal },
  props: {
    tiers: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
