<script setup lang="ts">
/**
 * BaseText component for displaying serif text.
 */
import { computed, defineProps, useCssModule } from 'vue'

const cssModule = useCssModule()
const props = withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg'
  }>(),
  {
    size: 'md',
  },
)

const classes = computed(() => {
  return [cssModule.text, cssModule[props.size]]
})
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<style module lang="stylus">

.text
  font-weight 900
  font-family Lato
  color #fff
  &.sm
    font-size 10px
    text-shadow 0.3px 0 0 #000, 0 0.3px 0 #000, -0.3px 0 0 #000, 0 -0.3px 0 #000
  &.md
    font-size 14px
    text-shadow 0 2px 0 #000
  &.lg
    font-size 16px
    text-shadow 0.5px 0 0 #000, 0 0.5px 0 #000, -0.5px 0 0 #000, 0 -0.5px 0 #000
</style>
