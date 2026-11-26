<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="project-card">
    <div class="card-top">
      <span class="category">{{ project.category }}</span>
      <span class="year">{{ project.year }}</span>
    </div>

    <div class="card-content">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
    </div>

    <div class="technologies">
      <span v-for="tech in project.technologies" :key="tech">
        {{ tech }}
      </span>
    </div>

    <RouterLink :to="`/proyek/${project.id}`" class="detail-link">
      View Details ↗
    </RouterLink>
  </article>
</template>

<style scoped>
.project-card {
  padding: 28px;
  background: var(--bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  min-height: 280px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(48, 32, 25, 0.08);
}

.card-top {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: var(--text-secondary);
  font-size: 12px;
}

.category {
  color: var(--color-accent);
}

.card-content {
  margin: 35px 0 25px;
}

.card-content h2 {
  font-size: 25px;
  margin-bottom: 12px;
}

.card-content p {
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.7;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}

.technologies span {
  padding: 6px 12px;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  font-size: 11px;
  color: var(--text-secondary);
}

.detail-link {
  margin-top: 25px;
  color: var(--color-accent);
  font-size: 13px;
  font-weight: 600;
}
</style>
