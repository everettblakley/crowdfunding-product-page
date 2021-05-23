<template>
  <modal v-on="$listeners">
    <h1>Back this project</h1>
    <p>
      Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the
      world?
    </p>
    <modal-tier-card
      v-for="(tier, index) in tiers"
      :key="tier.title || 'default'"
      :title="tier.title"
      :amount="tier.amount"
      :count="tier.count"
      :body="tier.body"
      :disabled="tier.disabled"
      :selected="tier.selected"
      :class="{ 'mb-4': index !== tiers.length - 1 }"
      v-on="$listeners"
    ></modal-tier-card>
  </modal>
</template>

<script>
import Modal from './Modal.vue'
import ModalTierCard from './ModalTierCard.vue'
export default {
  name: 'BackProjectModal',
  components: { Modal, ModalTierCard },
  props: {
    tiers: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
