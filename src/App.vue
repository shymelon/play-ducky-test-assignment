<script setup lang="ts">
import BaseTitle from '@/components/base/BaseTitle.vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import BaseText from '@/components/base/BaseText.vue'
import FriendsContainer from '@/components/FriendsContainer.vue'
import CardsContainer from '@/components/CardsContainer.vue'
</script>

<template>
  <BaseContainer>
    <header :class="$style.appHeader">
      <BaseTitle color="primary">Invite friends!</BaseTitle>
      <BaseText> You and your friend will receive bonuses! </BaseText>
    </header>
    <CardsContainer />
    <FriendsContainer />
  </BaseContainer>
</template>

<style module lang="stylus">
body
  background #054BA6

.appHeader
  padding-top 23px
</style>
