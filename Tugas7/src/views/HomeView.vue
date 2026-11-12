<script setup>
import ProductCard from '../components/ProductCard.vue'
import { useCartStore } from '../stores/cart' 

const cartStore = useCartStore()

const products = [
  {id: 1,
    nama: 'Canvas Tote Bag', harga: 65000},
  {id: 2,
    nama: 'Casual Sneakers', harga: 185000},
  {id: 3,
    nama: 'Facial Cleanser', harga: 45000 }
]

function handleAddToCart(product) {
  cartStore.addToCart(product)
}
</script>

<template>
  <h1>Welcome to EasyMart</h1>

  <div class="product-list">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-to-cart="handleAddToCart"
    />
  </div>
</template>