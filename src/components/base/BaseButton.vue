<template>
  <div :style="computedColorStyles.container" :class="$style.buttonContainer">
    <div :class="$style.border" />
    <div :class="$style.title">
      <slot />
    </div>
    <div :class="$style.borderBlinkContainer">
      <div :style="computedColorStyles.blink" :class="$style.borderChild" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

type ButtonColors = 'primary' | 'accent'

type ButtonColorProps = {
  boxShadow: string
  background: string
  blinkColor: string
}

const props = defineProps<{
  color: ButtonColors
}>()

const buttonColorsMap: Record<ButtonColors, ButtonColorProps> = {
  primary: {
    boxShadow:
      '0px 1px 1px rgba(0, 0, 0, 0.25), 0px 2px 0px #bee3ff inset, 0px -2px 0px #155388 inset',
    background: 'linear-gradient(180deg, #44a2e5, #2e7ec2)',
    blinkColor: '#bee3ff',
  },
  accent: {
    boxShadow:
      '0px 1px 1px rgba(0, 0, 0, 0.25), 0px 2px 0px #ffeeba inset, 0px -2px 0px #7a5d00 inset',
    background: 'linear-gradient(180deg, #f7cb40, #ddad1c)',
    blinkColor: '#ffeeba',
  },
}

const computedColorStyles = computed(() => {
  return {
    container: {
      boxShadow: buttonColorsMap[props.color].boxShadow,
      background: buttonColorsMap[props.color].background,
    },
    blink: {
      backgroundColor: buttonColorsMap[props.color].blinkColor,
    },
  }
})
</script>
<style module lang="stylus">
.border
  width 10px

.title
  letter-spacing 0.05em
  line-height 16px
  text-transform capitalize
  font-weight 900
  text-shadow 0.5px 0 0 #1f1f1f, 0 1px 0 #1f1f1f, -0.5px 0 0 #1f1f1f, 0 -0.5px 0 #1f1f1f

.borderChild
  width 8.3px
  position absolute
  top 2px
  right 4px
  border-radius 50%
  height 4.5px
  transform rotate(22.7deg)

.borderBlinkContainer
  width 10px
  height 30px

.buttonContainer
  position relative
  border-radius 12px
  width 100%
  cursor pointer
  height 30px
  display flex
  flex-direction row
  align-items center
  justify-content center
  padding 0 4px
  box-sizing border-box
  gap 4px
  text-align center
  font-size 12px
  color #fff
  font-family 'Movavi Grotesque'
</style>
