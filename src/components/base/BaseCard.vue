<script setup lang="ts">
/**
 * BaseCard component for displaying a card with an image and actions.
 */
import { computed } from 'vue'

const props = defineProps<{
  image: string
}>()

const backgroundImageStyle = computed(() => {
  const url = new URL(`../../assets/images/${props.image}.png`, import.meta.url)
  return {
    backgroundImage: `url(${url.href})`,
  }
})
</script>

<template>
  <div :style="backgroundImageStyle" :class="$style.cardContainer">
    <div :class="$style.frameWrapper">
      <div :class="$style.actionContainer">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<style module lang="stylus">
.border{
  width 10px
}
.actionContainer
  backdrop-filter blur(1px)
  display flex
  flex-direction row
  align-items center
  justify-content center

.frameWrapper
  align-self stretch
  backdrop-filter blur(1px)
  height 40px
  padding 0px 10px
  box-sizing border-box

.cardContainer
  width 100%
  border-radius 18px
  border-color #7CD0FF
  border-style solid
  border-width 2px
  height 115px
  overflow hidden
  align-items center
  justify-content flex-end
  background-size cover
  background-repeat no-repeat
  background-position top
  display flex
  flex-direction column
</style>
