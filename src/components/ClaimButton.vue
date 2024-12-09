<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import { useNumberShortener } from '@/composables/useNumberShortener.ts'
import { toRef } from 'vue'

const $emit = defineEmits<{
  (e: 'click'): void
}>()

const props = defineProps<{
  value: number
}>()

const { shortenedNumber } = useNumberShortener(toRef(props.value))

const claim = () => {
  console.log('Claimed!')
  $emit('click')
}
</script>

<template>
  <BaseButton :class="$style.claimButton" color="accent" @click="claim">
    <div :class="$style.claimWrapper">
      Claim <img :class="$style.coin" src="@/assets/images/coin.png" alt="coin" />
      <span :class="$style.claimNumber">{{ shortenedNumber }}</span>
    </div>
  </BaseButton>
</template>

<style module lang="stylus">
.claimButton
  width fit-content

.coin
  width 12px
  height 12px
  margin-left 8px
  margin-right 4px

.claimWrapper
  display flex
  align-items center
  justify-content center
  font-size 14px
  line-height 20px

.claimNumber
  font-size 10px
</style>
