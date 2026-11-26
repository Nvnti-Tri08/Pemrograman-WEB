<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { projects } from '../data/projects'

const route = useRoute()

const project = computed(() => {
  return projects.find(item => item.id === Number(route.params.id))
})
</script>

<template>
  <section class="detail container">
    <div v-if="project" class="detail-content">
      <RouterLink to="/proyek" class="back-link">
        ← Back to Projects
      </RouterLink>

      <p class="subtitle">{{ project.category }}</p>

      <h1>{{ project.title }}<span>.</span></h1>

      <p class="year">{{ project.year }}</p>

      <div class="detail-description">
        <h2>About This Project</h2>
        <p>{{ project.description }}</p>
      </div>

      <div class="detail-tech">
        <h2>Technologies Used</h2>

        <div class="tech-list">
          <span v-for="tech in project.technologies" :key="tech">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>

    <div v-else class="not-found">
      <h1>Project Not Found.</h1>
      <RouterLink to="/proyek">Back to Projects</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.detail {
  padding-top: 80px;
  padding-bottom: 100px;
  min-height: 70vh;
}

.back-link {
  display: inline-block;
  color: var(--color-accent);
  font-size: 14px;
  margin-bottom: 65px;
}

.subtitle {
  color: var(--color-accent);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 15px;
}

h1 {
  font-size: 60px;
  margin-bottom: 12px;
}

h1 span {
  color: var(--color-accent);
}

.year {
  color: var(--text-secondary);
  font-size: 14px;
}

.detail-description,
.detail-tech {
  max-width: 750px;
  margin-top: 55px;
}

h2 {
  font-size: 25px;
  margin-bottom: 18px;
}

.detail-description p {
  color: var(--text-secondary);
  line-height: 1.9;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tech-list span {
  padding: 10px 18px;
  border: 1px solid var(--color-border);
  border-radius: 30px;
  font-size: 13px;
}

.not-found {
  text-align: center;
  padding: 80px 0;
}

.not-found a {
  color: var(--color-accent);
}

@media (max-width: 600px) {
  h1 {
    font-size: 42px;
  }
}
</style>
