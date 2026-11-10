
const transaksi = [
    { id: 1, barang: 'Jaket Denim', harga: 150000, qty: 2, kategori: 'Pakaian' },
    { id: 2, barang: 'Keyboard Wireless', harga: 175000, qty: 5, kategori: 'Elektronik' },
    { id: 3, barang: 'Keripik Pisang', harga: 12000, qty: 8, kategori: 'Makanan' },
    { id: 4, barang: 'Kaos Oversize', harga: 75000, qty: 3, kategori: 'Pakaian' },
    { id: 5, barang: 'Cokelat Almond', harga: 20000, qty: 5, kategori: 'Makanan' },
    { id: 6, barang: 'Earphone Bluetooth', harga: 30000, qty: 1, kategori: 'Elektronik' },
];

// FILTER: Menyaring kategori 
const filter = transaksi.filter(
    ({ kategori }) => kategori === 'Elektronik'
);

console.log('\n=== HASIL FILTER: KATEGORI ELEKTRONIK ===');
console.log(filter);

// MAP: Menghitung subtotal tiap barang
const mapData = transaksi.map(
    ({ id, barang, harga, qty, kategori }) => ({
        id,
        barang,
        harga,
        qty,
        kategori,
        subtotal: harga * qty,
    })
);

console.log('\n=== HASIL MAP: SUBTOTAL SETIAP BARANG ===');
console.log(
    mapData.map(({ barang, subtotal }) => `${barang}: Rp${subtotal.toLocaleString('id-ID')}`
    ).join(' | ')
);

// REDUCE: Menghitung total keseluruhan
const reduce = mapData.reduce(
    (total, { subtotal }) => total + subtotal,
    0
);

console.log('\n=== HASIL REDUCE: TOTAL KESELURUHAN ===');
console.log('Rp' + reduce.toLocaleString('id-ID'));
