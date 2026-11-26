<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const statusMessage = ref('')

function submitForm() {
  if (!name.value || !email.value || !message.value) {
    statusMessage.value = 'Please fill in all fields.'
    return
  }

  statusMessage.value = 'Your message has been submitted successfully!'

  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<template>
  <section class="contact container">
    <div class="section-heading">
      <p class="subtitle">GET IN TOUCH</p>
      <h1>Let's <span>Connect.</span></h1>
      <p class="description">
        Have a question, project idea, or just want to say hello?
        Feel free to get in touch!
      </p>
    </div>

    <div class="contact-content">
      <div class="contact-info">
        <h2>Contact Information</h2>
        <p>
          I'm always open to new opportunities, collaborations,
          and interesting conversations.
        </p>

        <div class="contact-item">
          <span>GitHub</span>
          <a
            href="https://github.com/Nvnti-Tri08"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Nvnti-Tri08 ↗
          </a>
        </div>

        <div class="contact-item">
          <span>Location</span>
          <p>Indonesia</p>
        </div>
      </div>

      <form class="contact-form" @submit.prevent="submitForm">
  <h2>Send Me a Message</h2>

  <div class="form-group">
    <label for="name">Your Name</label>
    <input
      id="name"
      v-model="name"
      type="text"
      placeholder="Enter your name"
    />
  </div>

  <div class="form-group">
    <label for="email">Your Email</label>
    <input
      id="email"
      v-model="email"
      type="email"
      placeholder="Enter your email"
    />
  </div>

  <div class="form-group">
    <label for="message">Your Message</label>
    <textarea
      id="message"
      v-model="message"
      rows="5"
      placeholder="Write your message here..."
    ></textarea>
  </div>

  <button type="submit">Send Message ↗</button>

  <p v-if="statusMessage" class="status-message">
    {{ statusMessage }}
  </p>
</form>
    </div>
  </section>
</template>

<style scoped>
.status-message {
  margin-top: 15px;
  color: var(--color-accent);
  font-size: 13px;
}

.contact {
  padding-top: 80px;
  padding-bottom: 100px;
}

.section-heading {
  max-width: 650px;
  margin-bottom: 55px;
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

.contact-content {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 70px;
}

.contact-info h2,
.contact-form h2 {
  font-size: 25px;
  margin-bottom: 18px;
}

.contact-info > p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 35px;
}

.contact-item {
  margin-bottom: 25px;
}

.contact-item span {
  display: block;
  color: var(--color-accent);
  font-size: 12px;
  margin-bottom: 7px;
}

.contact-item a,
.contact-item p {
  color: var(--text-primary);
  font-size: 14px;
}

.contact-form {
  padding: 30px;
  background: var(--bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 16px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 13px;
  margin-bottom: 9px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 13px 15px;
  background: var(--bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  color: var(--text-primary);
  outline: none;
}

.form-group textarea {
  resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--color-accent);
}

.contact-form button {
  padding: 13px 22px;
  background: var(--color-accent);
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 13px;
}

@media (max-width: 700px) {
  h1 {
    font-size: 43px;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-form {
    padding: 22px;
  }
}
</style>
