<script setup>
</script>

<template>
  <section class="hero container">
    <div class="hero-text">
      <p class="greeting">HELLO, WELCOME TO MY PORTFOLIO</p>

      <h1>
        Hi, I'm <span>Asa.</span>
        <br />
        Informatics Engineering Student.
      </h1>

      <p class="description">
        I am a student who is passionate about technology,
        creativity, and continuously learning new things.
      </p>

      <div class="hero-buttons">
        <RouterLink to="/proyek" class="button-primary">
          Explore My Work ↗
        </RouterLink>

        <RouterLink to="/tentang" class="button-secondary">
          More About Me
        </RouterLink>
      </div>
    </div>

    <div class="hero-image">
      <div class="image-placeholder">
        <span>YOUR PHOTO</span>
      </div>
      <p>Based in Indonesia · Always Learning</p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  padding-top: 60px;
  padding-bottom: 60px;
}

.hero-text {
  max-width: 620px;
}

.greeting {
  color: var(--color-accent);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 22px;
}

h1 {
  font-size: clamp(38px, 5vw, 65px);
  color: var(--text-primary);
  margin-bottom: 22px;
}

h1 span {
  color: var(--color-accent);
}

.description {
  max-width: 480px;
  color: var(--text-secondary);
  font-size: 16px;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 32px;
}

.button-primary,
.button-secondary {
  padding: 13px 22px;
  border-radius: 30px;
  font-size: 13px;
  transition: 0.3s;
}

.button-primary {
  background: var(--color-accent);
  color: white;
}

.button-primary:hover {
  opacity: 0.85;
}

.button-secondary {
  border: 1px solid var(--color-border);
  color: var(--text-primary);
}

.button-secondary:hover {
  background: var(--bg-secondary);
}

.hero-image {
  text-align: center;
}

.image-placeholder {
  width: 300px;
  height: 370px;
  background: var(--bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 150px 150px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 12px;
  letter-spacing: 3px;
}

.hero-image p {
  margin-top: 15px;
  font-size: 12px;
  color: var(--text-secondary);
}

@media (max-width: 700px) {
  .hero {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }

  .hero-image {
    align-self: center;
  }

  .image-placeholder {
    width: 250px;
    height: 310px;
  }
}
</style>
