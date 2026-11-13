<script setup>
defineProps({
  product: Object
})

defineEmits(['add-to-cart'])
</script>

<template>
  <div class="product-card">
    <img :src="product.gambar" :alt="product.nama">
    <h3>{{ product.nama }}</h3>
    <p>Rp{{ product.harga.toLocaleString('id-ID') }}</p>

    <button @click="$emit('add-to-cart', product)">
      Beli
    </button>
  </div>
</template>