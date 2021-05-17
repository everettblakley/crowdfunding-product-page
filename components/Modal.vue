<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
