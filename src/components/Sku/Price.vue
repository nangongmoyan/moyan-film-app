<template>
  <span :style="`color:${color};font-size:${fontSize}px`">¥
    <span>{{ rltPrice[0] }}</span>
    <span v-if="rltPrice[1]" :style="`font-size:${fontSize - 5}px`">.{{ rltPrice[1] }}</span>
  </span>
</template>
<script setup lang="ts">
import { computed } from '@vue/reactivity';

const props = defineProps({
  color: {
    type: String,
    default: '#F03D37'
  },
  price: {
    type: Number,
    required: true
  },
  fontSize: {
    type: Number,
    default: 14
  }
})

const rltPrice = computed(() => (props.price / 100).toFixed(1).split('.'))

</script>
<style lang="scss" scoped></style>