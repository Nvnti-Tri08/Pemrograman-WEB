<script setup>
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
</script>

<template>
  <h1>Keranjang Belanja</h1>

  <div v-if="cartStore.items.length === 0">
    <p>Keranjang masih kosong</p>
  </div>

  <div v-else>
    <div v-for="item in cartStore.items" :key="item.id">
      <h3>{{ item.nama }}</h3>
      <p>Rp{{ item.harga }}</p>
    </div>
  </div>
</template>