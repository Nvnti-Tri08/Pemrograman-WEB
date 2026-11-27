<script setup>
import { useThemeStore } from '../stores/theme'

const themeStore = useThemeStore()
</script>

<template>
  <header class="navbar">
    <div class="container navbar-content">

      <nav class="nav-menu">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/tentang">About</RouterLink>
        <RouterLink to="/proyek">Projects</RouterLink>
        <RouterLink to="/kontak">Contact</RouterLink>
      </nav>

      <div class="nav-actions">
        <button
          class="theme-button"
          @click="themeStore.toggleTheme()"
        >
          {{ themeStore.theme === 'light' ? '☾' : '☀' }}
        </button>

        <RouterLink to="/kontak" class="nav-button">
          Contact Me ↗
        </RouterLink>
      </div>

    </div>
  </header>
</template>

<style scoped>
.navbar {
  width: 100%;
  padding: 22px 0;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--color-border);
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-family: var(--font-heading);
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
}

.logo span {
  color: var(--color-accent);
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 35px;
}

.nav-menu a {
  color: var(--text-secondary);
  font-size: 14px;
  transition: color 0.3s;
}

.nav-menu a:hover,
.nav-menu a.router-link-exact-active {
  color: var(--color-accent);
}

.nav-button {
  padding: 10px 20px;
  border: 1px solid var(--color-accent);
  border-radius: 30px;
  color: var(--text-primary);
  font-size: 13px;
  transition: 0.3s;
}

.nav-button:hover {
  background: var(--color-accent);
  color: white;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.theme-button {
  width: 40px;
  height: 40px;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  background: transparent;
  color: var(--text-primary);
  font-size: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.theme-button:hover {
  background: var(--bg-secondary);
}

@media (max-width: 600px) {
  .navbar-content {
    flex-wrap: wrap;
    gap: 18px;
  }

  .nav-menu {
    order: 3;
    width: 100%;
    justify-content: space-between;
    gap: 10px;
  }

  .nav-button {
    padding: 8px 12px;
  }
}
</style>
