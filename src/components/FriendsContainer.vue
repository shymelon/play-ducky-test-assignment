<script setup lang="ts">
import BaseText from '@/components/base/BaseText.vue'
import ClaimButton from '@/components/ClaimButton.vue'
import InviteListItemGroup from '@/components/InviteListItemGroup.vue'
import { ref } from 'vue'
import type { IUserFriend } from '@/types/IUserFriend.ts'
import userFriendList from '@/mock/userFriendList.ts'

const friends = ref<IUserFriend[]>(userFriendList)
</script>

<template>
  <div :class="$style.friendsContainer">
    <BaseText size="lg">List of your friends</BaseText>
    <ClaimButton :class="$style.claimButton" :value="12500" />
    <InviteListItemGroup :friends="friends" />
  </div>
</template>

<style module lang="stylus">
.friendsContainer
  display flex
  flex-direction column
  gap 8px

.claimButton
  margin auto
</style>
