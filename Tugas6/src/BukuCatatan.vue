<script setup>
import { ref, computed } from 'vue'

// Data dari form
const judul = ref('')
const kategori = ref('')
const selesai = ref(false)

// Menyimpan daftar buku
const daftarBuku = ref([])

// Menghitung jumlah buku yang selesai dibaca
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
      <label>Judul Buku</label>
      <input
        v-model="judul"
        type="text"
        placeholder="Masukkan Judul Buku"
      />

      <label>Kategori Buku</label>
      <select v-model="kategori">
        <option value="">Pilih Kategori</option>
        <option value="Novel">Novel</option>
        <option value="Komik">Komik</option>
        <option value="Pendidikan">Pendidikan</option>
      </select>

      <label>
        <input v-model="selesai" type="checkbox" />
        Selesai dibaca
      </label>

      <button type="submit">Tambah Buku</button>
    </form>

    <h3>Jumlah buku selesai dibaca: {{ jumlahSelesai }}</h3>

    <h2>Daftar Buku</h2>

    <div
      class="buku-list"
      v-for="buku in daftarBuku"
      :key="buku.id"
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
  max-width: 700px;
  margin: 20px auto;
  padding: 15px;
  background-color: #fff9eb;
  text-align: center;
  font-size: 18px;
}

/* Judul aplikasi */
h1 {
  background-color: #f2d58a;
  color: #59452b;
  padding: 10px;
  font-size: 32px;
}

label {
  display: block;
  margin: 10px 0;
  font-size: 22px;
}

input[type="text"],
select {
  display: block;
  margin: 8px auto;
  padding: 10px;
  font-size: 18px;
}

/* Checkbox */
input[type="checkbox"] {
  accent-color: #b58b42;
}

/* Tombol */
button {
  background-color: #b58b42;
  color: white;
  padding: 10px 15px;
  border: none;
  font-size: 17px;
  cursor: pointer;
}

/* Judul daftar */
h2, h3 {
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
  padding: 10px 5px;
  border-bottom: 1px solid #b58b42;
}

.buku-list h3,
.buku-list p {
  margin: 5px 0;
}

.buku-list p {
  font-size: 18px;
}

/* Responsif */
@media (max-width: 600px) {
  .container {
    margin: 10px;
    padding: 10px;
  }

  input[type="text"],
  select {
    max-width: 100%;
    box-sizing: border-box;
  }
}
</style>
