
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const savedTheme = localStorage.getItem('theme') || 'light'

  const theme = ref(savedTheme)

  document.documentElement.classList.toggle(
    'dark',
    theme.value === 'dark'
  )

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'

    document.documentElement.classList.toggle(
      'dark',
      theme.value === 'dark'
    )

    localStorage.setItem('theme', theme.value)
  }

  return {
    theme,
    toggleTheme
  }
})
