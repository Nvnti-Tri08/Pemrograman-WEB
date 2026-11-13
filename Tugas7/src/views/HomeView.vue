<script setup>
import ProductCard from '../components/ProductCard.vue'
import { useCartStore } from '../stores/cart' 

const cartStore = useCartStore()

const products = [
  {id: 1,
    nama: 'Canvas Tote Bag', harga: 65000, gambar: '/images/tote-bag.jpg'}, 
  {id: 2,
    nama: 'Casual Sneakers', harga: 589000, gambar: '/images/sneakers.jpg'},
  {id: 3,
    nama: 'Facial Cleanser', harga: 52000, gambar: '/images/cleanser.jpg'}
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