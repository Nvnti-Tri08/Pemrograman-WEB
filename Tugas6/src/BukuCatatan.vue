
<script setup>
import { ref, computed } from 'vue'

// Data dari form
const judul = ref('')
const kategori = ref('')
const selesai = ref(false)

// Menyimpan daftar buku
const daftarBuku = ref([])

// Menghitung jumlah buku selesai dibaca
const jumlahSelesai = computed(() => {
  return daftarBuku.value.filter(buku => buku.selesai).length
})

// Menambahkan buku ke daftar
function tambahBuku() {
  if (judul.value === '' || kategori.value === '') {
    alert('Judul dan kategori harus diisi!')
    return
  }

  daftarBuku.value.push({
    id: Date.now(),
    judul: judul.value,
    kategori: kategori.value,
    selesai: selesai.value
  })

  // Mengosongkan form
  judul.value = ''
  kategori.value = ''
  selesai.value = false
}
</script>

<template>
  <div class="container">
    <h1>Buku Catatan</h1>

    <!-- Form tambah buku -->
    <form @submit.prevent="tambahBuku">
      <div class="form-group">
        <label>Judul Buku</label>
        <input
          v-model="judul"
          type="text"
          placeholder="Masukkan Judul Buku"
        >
      </div>

      <div class="form-group">
        <label>Kategori Buku</label>
        <select v-model="kategori">
          <option value="">Pilih Kategori</option>
          <option value="Novel">Novel</option>
          <option value="Komik">Komik</option>
          <option value="Pendidikan">Pendidikan</option>
        </select>
      </div>

      <label class="checkbox-group">
        <input v-model="selesai" type="checkbox">
        Selesai dibaca
      </label>

      <button type="submit">Tambah Buku</button>
    </form>

    <!-- Jumlah buku selesai dibaca -->
    <div class="statistik">
      <h3>Jumlah buku selesai dibaca: {{ jumlahSelesai }}</h3>
    </div>

    <!-- Daftar buku -->
    <h2>Daftar Buku</h2>

    <div
      v-for="buku in daftarBuku"
      :key="buku.id"
      class="buku-list"
    >
      <h3>{{ buku.judul }}</h3>
      <p>Kategori: {{ buku.kategori }}</p>
      <p>
        {{ buku.selesai ? 'Selesai dibaca' : 'Belum selesai dibaca' }}
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Tampilan utama */
.container {
  max-width: 750px;
  margin: 25px auto;
  padding: 25px;
  background-color: #fff9eb;
  text-align: center;
  font-size: 18px;
  border-radius: 8px;
}

/* Judul aplikasi */
h1 {
  background-color: #f2d58a;
  color: #59452b;
  padding: 12px;
  font-size: 32px;
  margin-bottom: 25px;
}

/* Form */
form {
  max-width: 400px;
  margin: auto;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 22px;
}

input[type="text"],
select {
  width: 100%;
  padding: 12px;
  font-size: 18px;
}

/* Checkbox */
.checkbox-group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 15px 0;
  font-size: 20px;
}

input[type="checkbox"] {
  accent-color: #b58b42;
}

/* Tombol */
button {
  background-color: #b58b42;
  color: white;
  padding: 12px 20px;
  border: none;
  font-size: 17px;
  cursor: pointer;
}

button:hover {
  background-color: #967034;
}

/* Jumlah buku selesai dibaca */
.statistik {
  margin: 25px 0;
  padding: 10px;
  background-color: #f8edcf;
  border-radius: 8px;
}

/* Judul bagian */
h2,
h3 {
  color: #80602f;
}

h2 {
  font-size: 26px;
}

h3 {
  font-size: 22px;
}

/* Daftar buku */
.buku-list {
  padding: 15px;
  margin-bottom: 12px;
  background-color: white;
  border: 1px solid #e5d3a8;
  border-radius: 8px;
}

.buku-list h3,
.buku-list p {
  margin: 5px 0;
}

.buku-list p {
  font-size: 18px;
}

/* Tampilan HP */
@media (max-width: 600px) {
  .container {
    margin: 10px;
    padding: 15px;
  }

  h1 {
    font-size: 26px;
  }

  .form-group label {
    font-size: 19px;
  }

  input[type="text"],
  select {
    max-width: 100%;
    box-sizing: border-box;
  }
}
</style>
