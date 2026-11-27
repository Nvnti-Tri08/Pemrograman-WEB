
<template>
  <section class="about container">
    <div class="section-heading">
      <p class="subtitle">GET TO KNOW ME</p>
      <h1>About <span>Me.</span></h1>
      <p class="intro">
        Get to know more about my background, education,
        and the skills I have learned along the way.
      </p>
    </div>

    <div class="about-content">
      <div class="about-text">
        <h2>Hello, I'm Salsabila Tri Novianti!</h2>
        <p>
          I am an Informatics Engineering student at
          Universitas Yudharta Pasuruan. Before continuing
          my studies, I graduated from vocational high school
          majoring in Computer and Network Engineering.
        </p>
        <p>
          Through my education, I have learned the basics of
          programming, database management, and computer
          networking. I enjoy gaining new knowledge and
          improving my abilities through learning and practice.
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
      <p class="subtitle">WHAT I HAVE LEARNED</p>
      <h2>Knowledge & Skills</h2>

      <div class="skill-list">
        <span>Basic Programming</span>
        <span>HTML & CSS</span>
        <span>JavaScript</span>
        <span>Python</span>
        <span>Database Management</span>
        <span>Computer Networking</span>
        <span>Problem Solving</span>
      </div>
    </div>
    
    <div class="experience">
      <p class="subtitle">PRACTICAL EXPERIENCE</p>
      <h2>Experience</h2>

      <div class="experience-card">
        <div class="experience-header">
          <span class="experience-tag">INTERNSHIP</span>
          <span class="experience-date">JUL — DEC 2024</span>
        </div>

        <h3>Buluagung Jaya Computer (BJC)</h3>
        <p class="experience-location">
          Purwosari, Pasuruan
        </p>

        <div class="experience-divider"></div>

        <h4>Activities & Responsibilities</h4>

        <div class="experience-list">
          <span>Computer & Laptop Repair</span>
          <span>Windows Installation</span>
          <span>CCTV Installation</span>
          <span>Device Maintenance</span>
          <span>Customer Service</span>
          <span>Computer Accessories Sales</span>
        </div>
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

.experience {
  margin-top: 90px;
  margin-bottom: 40px;
}

.experience h2 {
  margin-top: 18px;
  margin-bottom: 28px;
}

.experience-card {
  padding: 0;
  border: none;
  border-radius: 0;
  background: transparent;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.experience-tag {
  color: var(--color-accent);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
}

.experience-date {
  color: var(--text-secondary);
  font-size: 13px;
}

.experience-card h3 {
  margin-bottom: 8px;
}

.experience-location {
  color: var(--text-secondary);
}

.experience-divider {
  height: 1px;
  background: var(--color-border);
  margin: 24px 0;
}

.experience-card h4 {
  margin-bottom: 18px;
}

.experience-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.experience-list span {
  padding: 10px 16px;
  border: 1px solid var(--color-border);
  border-radius: 30px;
  font-size: 14px;
}
</style>