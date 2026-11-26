
<template>
  <footer class="footer">
    <div class="container footer-content">
      <div>
        <h2>Asa<span>.</span></h2>
        <p>Creating with purpose, growing with passion.</p>
      </div>

      <div class="footer-links">
        <a
          href="https://github.com/Nvnti-Tri08"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>

        <RouterLink to="/kontak">Kontak ↗</RouterLink>
      </div>
    </div>

    <div class="container footer-bottom">
      <p>© 2026 Asa. All rights reserved.</p>
      <p>Designed with care.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 50px 0 20px;
  background: var(--bg-dark);
  color: #F7F2EC;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  padding-bottom: 35px;
}

.footer-content h2 {
  font-family: var(--font-heading);
  font-size: 30px;
}

.footer-content h2 span {
  color: #C18B6C;
}

.footer-content p {
  color: #C4AD96;
  font-size: 13px;
}

.footer-links {
  display: flex;
  gap: 25px;
  font-size: 14px;
}

.footer-links a:hover {
  color: #C18B6C;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  padding-top: 20px;
  border-top: 1px solid #514035;
  color: #C4AD96;
  font-size: 12px;
}

@media (max-width: 600px) {
  .footer-content,
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
