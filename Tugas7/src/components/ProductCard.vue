<script setup>
defineProps({
  product: Object
})

defineEmits(['add-to-cart'])
</script>

<template>
  <div class="product-card">
    <h3>{{ product.nama }}</h3>
    <p>Rp{{ product.harga }}</p>

    <button @click="$emit('add-to-cart', product)">
      Beli
    </button>
  </div>
</template>