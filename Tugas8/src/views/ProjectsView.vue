<script setup>
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard.vue'
</script>

<template>
  <section class="projects container">
    <div class="section-heading">
      <p class="subtitle">MY SELECTED WORK</p>
      <h1>My <span>Projects.</span></h1>
      <p class="description">
        Here are some projects I have worked on while learning
        and exploring web development.
      </p>
    </div>

    <div class="project-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding-top: 80px;
  padding-bottom: 90px;
}

.section-heading {
  max-width: 650px;
  margin-bottom: 50px;
}

.subtitle {
  color: var(--color-accent);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 15px;
}

h1 {
  font-size: 58px;
  margin-bottom: 18px;
}

h1 span {
  color: var(--color-accent);
}

.description {
  color: var(--text-secondary);
  line-height: 1.8;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

@media (max-width: 900px) {
  .project-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  h1 {
    font-size: 43px;
  }

  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>
