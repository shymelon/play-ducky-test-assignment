<script setup lang="ts">
/**
 * In real app it's better to use a library because there is a lot of edge cases and caveats
 * like coloring, size, fill, performance and icon bundling.
 */
import { computed } from 'vue'

const props = defineProps<{
  name: string
}>()

const icon = computed(() => {
  return new URL(`../../assets/images/icons/${props.name}.svg`, import.meta.url)
})
</script>

<template>
  <img :src="icon.href" :alt="`${name} icon`" />
</template>
