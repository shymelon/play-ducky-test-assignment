<script lang="ts" setup>
/**
 * BaseAvatar component. If the user has no avatar, a question mark icon is displayed.
 */
import type { IUserFriend } from '@/types/IUserFriend.ts'

const props = withDefaults(defineProps<Pick<IUserFriend, 'imageUrl'>>(), {
  imageUrl: new URL('@/assets/images/icon-question.png', import.meta.url).href,
})
</script>

<template>
  <div :class="$style.iconQuestionParent">
    <img :class="$style.iconQuestion" alt="user avatar" :src="props.imageUrl" />
  </div>
</template>

<style module lang="stylus">
.iconQuestion
  height 30px
  object-fit cover

.iconQuestionParent
  width 30px
  overflow hidden
  box-shadow 0 1px 4px rgba(0, 174, 229, 0.5)
  border-radius 4px
  background-color #15376c
  height 30px
  display flex
  align-items center
  justify-content center
</style>
