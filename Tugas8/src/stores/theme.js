
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref('light')

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'

    document.documentElement.classList.toggle(
      'dark',
      theme.value === 'dark'
    )
  }

  return {
    theme,
    toggleTheme
  }
})
