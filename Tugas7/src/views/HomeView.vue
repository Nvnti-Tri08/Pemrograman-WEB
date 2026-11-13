<script setup>
import ProductCard from '../components/ProductCard.vue'
import { useCartStore } from '../stores/cart' 

const cartStore = useCartStore()

const products = [
  {id: 1,
    nama: 'Wireless Earphone', harga: 90000, gambar: '/images/earphone.jpg'}, 
  {id: 2,
    nama: 'Casual Sneakers', harga: 689000, gambar: '/images/sneakers.jpg'},
  {id: 3,
    nama: 'Daily Tumbler', harga: 550000, gambar: '/images/tumbler.jpg'}
]

function handleAddToCart(product) {
  cartStore.addToCart(product)
}
</script>

<template>
  <h1>Katalog Produk</h1>

  <div class="product-list">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-to-cart="handleAddToCart"
    />
  </div>
</template>