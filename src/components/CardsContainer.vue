<script setup lang="ts">
import ClipboardButton from '@/components/ClipboardButton.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseButton from '@/components/base/BaseButton.vue'
</script>

<template>
  <div :class="$style.cardContainer">
    <BaseCard image="card-1-image">
      <template #actions>
        <BaseButton color="accent">More bonuses</BaseButton>
      </template>
    </BaseCard>
    <BaseCard image="card-2-image">
      <template #actions>
        <div :class="$style.inviteCardContainer">
          <BaseButton color="primary">Invite</BaseButton>
          <ClipboardButton text="https://share.link" />
        </div>
      </template>
    </BaseCard>
  </div>
</template>

<style module lang="stylus">

.cardContainer
  display flex
  gap 16px
  margin-top 12px
  margin-bottom 12px


.inviteCardContainer
  display flex
  gap 8px
  justify-content center
  align-items center
</style>
