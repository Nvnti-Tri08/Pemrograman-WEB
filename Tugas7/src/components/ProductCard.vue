<script setup>
defineProps({
  product: Object
})

defineEmits(['add-to-cart'])

function formatRupiah(angka) {
  return new Intl.NumberFormat('id-ID').format(angka)
}
</script>

<template>
  <div class="product-card">
    <img :src="product.gambar" :alt="product.nama">

    <h3>{{ product.nama }}</h3>
   <p>Rp{{ formatRupiah(product.harga) }}</p>

    <button @click="$emit('add-to-cart', product)">
      + Keranjang
    </button>
  </div>
</template>