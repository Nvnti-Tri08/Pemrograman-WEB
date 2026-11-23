
import { Hono } from 'hono'

const app = new Hono()

const inventaris = [
  { id: 1, nama: 'Komputer', jumlah: 15, kondisi: 'Baik', lokasi: 'Ruang IT' },
  { id: 2, nama: 'Proyektor', jumlah: 5, kondisi: 'Baik', lokasi: 'Ruang TU' },
  { id: 3, nama: 'Switch', jumlah: 4, kondisi: 'Baik', lokasi: 'Lab Jaringan' },
  { id: 4, nama: 'Router', jumlah: 3, kondisi: 'Rusak', lokasi: 'Lab Jaringan' }
]

app.get('/api/inventaris', (c) => {
  return c.json(inventaris)
})

app.get('/api/inventaris/:id', (c) => {
  const id = Number(c.req.param('id'))
  const barang = inventaris.find((item) => item.id === id)

  if (!barang) {
    return c.json({ error: 'Barang tidak ditemukan' }, 404)
  }
  
  return c.json(barang)
})

export default app
