<script setup lang="ts">
import BaseAvatar from '@/components/base/BaseAvatar.vue'
import type { IUserFriend } from '@/types/IUserFriend.ts'
import BaseText from '@/components/base/BaseText.vue'

defineProps<{ item: IUserFriend }>()
</script>
<template>
  <div :class="$style.cardContainer">
    <BaseAvatar :image-url="item.imageUrl" />
    <BaseText :class="$style.itemName">{{ item.name }}</BaseText>
    <BaseText> {{ item.level }} lvl </BaseText>
  </div>
</template>

<style module lang="stylus">

.cardContainer
  width 100%
  height 42px
  background: radial-gradient(50% 50% at 50% 50%, #3081b4, #19488c)
  border-style solid
  border-top 0
  border-left 0
  border-right 0
  border-bottom-width 1px
  border-image linear-gradient(90deg, rgba(167, 222, 253, 0) 0%, rgba(167, 222, 253, 1) 50%, rgba(167, 222, 253, 0) 100%) 1
  display inline-flex
  align-items center
  padding 6px 4px
  gap 8px

  .itemName
    min-width 182px
</style>
