<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import { useClipboard } from '@/composables/useClipboard.ts'
import { watch } from 'vue'

const props = defineProps<{
  text: string
}>()
const { clipboardText, copyToClipboard } = useClipboard()

// Watch the clipboardText prop and update the composable's clipboardText
watch(
  () => props.text,
  (newText) => {
    clipboardText.value = newText
  },
  { immediate: true },
)
</script>

<template>
  <BaseButton color="primary" @click="copyToClipboard">
    <BaseIcon name="chain" />
  </BaseButton>
</template>
