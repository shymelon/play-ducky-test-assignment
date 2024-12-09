import { ref } from 'vue'

/**
 * A composable function to interact with the clipboard.
 * Provides functionality to copy text to the clipboard and track the copied state.
 */
export function useClipboard() {
  const TIMEOUT = 3000
  const clipboardText = ref('')
  const isCopied = ref(false)

  const clearIsCopied = () => {
    setTimeout(() => {
      isCopied.value = false
    }, TIMEOUT)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(clipboardText.value)
      isCopied.value = true
      // clear the copied state after a timeout
    } catch (err) {
      console.error('Failed to copy text to clipboard:', err)
    } finally {
      clearIsCopied()
    }
  }

  return {
    clipboardText,
    isCopied,
    copyToClipboard,
  }
}
