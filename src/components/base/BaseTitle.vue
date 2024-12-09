<script setup lang="ts">
import { computed, useCssModule } from 'vue'
type TitleColor = 'primary'

const cssModule = useCssModule()
const props = defineProps<{
  color: TitleColor
}>()

const classes = computed(() => {
  return [cssModule['base-title'], props.color && cssModule[`base-title--${props.color}`]]
})
</script>

<template>
  <h1 :class="classes">
    <slot />
  </h1>
</template>

<style lang="stylus" module>
.base-title
  margin 0
  font-size 24px
  font-weight black
  text-transform uppercase
  text-shadow 0.5px 2px 0 #000, 0 0.5px 0 #000, -0.5px 0 0 #000, 0 -0.5px 0 #000
  -webkit-text-stroke-width 0.5
  -webkit-text-stroke-color #000
  font-family "Movavi Grotesque"

.base-title--primary
  color #FACB46
</style>
