import { computed, type Ref } from 'vue'

/**
 * Shortens a number to a more readable format.
 * @param number
 */
export function useNumberShortener(number: Ref<number>) {
  const shortenedNumber = computed(() => {
    if (number.value < 1000) return number.value.toFixed(2)
    return (number.value / 1000).toFixed(1) + 'k'
  })

  return {
    shortenedNumber,
  }
}
