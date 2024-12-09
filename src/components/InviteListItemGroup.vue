<script setup lang="ts">
/**
 * Scrollable Group container for list of friends
 */
import type { IUserFriend } from '@/types/IUserFriend.ts'
import InviteListItem from '@/components/InviteListItem.vue'

defineProps<{
  friends: IUserFriend[]
}>()
</script>

<template>
  <div :class="$style.listItemGroupContainer">
    <div :class="$style.listItemGroupScrollableWrapper">
      <InviteListItem
        v-for="friend in friends"
        :key="friend.id"
        :class="$style.listItem"
        :item="friend"
      />
    </div>
  </div>
</template>

<style module lang="stylus">
.listItemGroupContainer
  box-shadow 0 4px 4.5px rgba(0, 3, 6, 0.5) inset
  border-radius 12px
  background radial-gradient(50% 50% at 50% 50%, #3081b4, #19488c)
  border-right 1px solid #3579b5
  border-bottom 1px solid #3579b5
  border-left 1px solid #3579b5
  padding 20px 4px 6px
  text-align left
  color #fff
  font-family Lato

.listItem
  margin-top 4px
  margin-bottom 4px

.listItemGroupScrollableWrapper
  height calc(100vh - 312px)
  overflow-y auto
  //hide scrollbar
  -ms-overflow-style none  /* IE and Edge */
  scrollbar-width none  /* Firefox */
  &::-webkit-scrollbar
    display none
</style>
