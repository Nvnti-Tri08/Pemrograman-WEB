<script setup>
import { computed } from 'vue'
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()

const totalHarga = computed(() => {
  return cartStore.items.reduce((total, item) => {
    return total + (item.harga * item.jumlah)
  }, 0)
})

function formatRupiah(angka) {
  return new Intl.NumberFormat('id-ID').format(angka)
}
</script>

<template>
  <h1>Keranjang Belanja</h1>

  <div class="cart-container">
    <div v-if="cartStore.items.length === 0">
    <p>Keranjang masih kosong</p>
  </div>

  <div v-else>
      <div
        v-for="(item, index) in cartStore.items"
        :key="item.id"
        class="cart-item"
      >
        <div>
          <h3>{{ item.nama }}</h3>

          <p>Harga: Rp{{ formatRupiah(item.harga) }}</p>

          <div class="quantity">
            <button @click="cartStore.kurangiJumlah(index)">−</button>

            <span>{{ item.jumlah }}</span>

            <button @click="item.jumlah++">
              +
            </button>
          </div>
      
          <p>Subtotal: Rp{{ formatRupiah(item.harga * item.jumlah) }}</p>
        
        </div>

      <button @click="cartStore.removeFromCart(index)">
        Hapus
      </button>
  </div>

       <h3>Total Belanja: Rp{{ formatRupiah(totalHarga) }}</h3>

    </div>
  </div>
</template>