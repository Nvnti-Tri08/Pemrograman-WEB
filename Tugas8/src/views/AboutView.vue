<template>
  <section class="about container">
    <div class="section-heading">
      <p class="subtitle">GET TO KNOW ME</p>
      <h1>About <span>Me.</span></h1>
      <p class="intro">
        A little introduction about who I am, my journey,
        and what I am passionate about.
      </p>
    </div>

    <div class="about-content">
      <div class="about-text">
        <h2>Hello, I'm Asa!</h2>
        <p>
          I am an Informatics Engineering student at
          Universitas Yudharta Pasuruan. I have an educational
          background in Computer and Network Engineering
          and an interest in technology and web development.
        </p>
        <p>
          I enjoy learning new things, exploring ideas,
          and improving my skills through projects and practice.
        </p>
      </div>

      <div class="education">
        <h2>Education</h2>

        <div class="education-item">
          <span>2025 — Present</span>
          <h3>Universitas Yudharta Pasuruan</h3>
          <p>Teknik Informatika</p>
        </div>

        <div class="education-item">
          <span>2022 — 2025</span>
          <h3>SMK Darut Taqwa</h3>
          <p>Teknik Komputer dan Jaringan</p>
        </div>
      </div>
    </div>

    <div class="skills">
      <p class="subtitle">WHAT I LEARN</p>
      <h2>My Skills & Interests</h2>

      <div class="skill-list">
        <span>HTML & CSS</span>
        <span>JavaScript</span>
        <span>Vue.js</span>
        <span>Computer Networking</span>
        <span>Database</span>
        <span>Problem Solving</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding-top: 80px;
  padding-bottom: 90px;
}

.section-heading {
  max-width: 650px;
  margin-bottom: 65px;
}

.subtitle {
  color: var(--color-accent);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 15px;
}

.section-heading h1 {
  font-size: 58px;
  margin-bottom: 18px;
}

.section-heading h1 span {
  color: var(--color-accent);
}

.intro {
  color: var(--text-secondary);
  line-height: 1.8;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
}

.about-content h2,
.skills h2 {
  font-size: 27px;
  margin-bottom: 22px;
}

.about-text p {
  color: var(--text-secondary);
  line-height: 1.9;
  margin-bottom: 15px;
}

.education-item {
  border-left: 2px solid var(--color-muted);
  padding: 0 0 25px 22px;
  margin-bottom: 10px;
}

.education-item span {
  color: var(--color-accent);
  font-size: 12px;
}

.education-item h3 {
  font-size: 17px;
  margin: 8px 0 4px;
}

.education-item p {
  color: var(--text-secondary);
  font-size: 14px;
}

.skills {
  margin-top: 75px;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.skill-list span {
  padding: 11px 20px;
  border: 1px solid var(--color-border);
  border-radius: 30px;
  color: var(--text-primary);
  font-size: 13px;
}

@media (max-width: 700px) {
  .section-heading h1 {
    font-size: 43px;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>