import { defineStore } from 'pinia'
export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
    }),

   actions: {
    addToCart(product) {
      const item = this.items.find(
        item => item.id === product.id
      )

      if (item) {
        item.jumlah++
      } else {
        this.items.push({
          ...product,
          jumlah: 1
        })
      }
    },

    removeFromCart(index) {
        this.items.splice (index, 1)
        }
    }
})