const transaksi = [
    {id: 1, barang: "Susu Ultra", qty: 8, harga: 6_000, katergori: "minuman"},
    {id: 2, barang: "Apel", qty: 4, harga: 20_000, katergori: "Buah"},
    {id: 3, barang: "Beng Beng", qty: 15, harga: 2_500, katergori: "snack"},
    {id: 4, barang: "Golda", qty: 7, harga: 5_500, katergori: "minuman"},
    {id: 5, barang: "Anggur", qty: 5, harga: 35_000, katergori: "Buah"},
    {id: 6, barang: "Qtela", qty: 6, harga: 9_500, katergori: "snack"},
    {id: 7, barang: "Aqua", qty: 20, harga: 3_000, katergori: "minuman"},
    {id: 8, barang: "Semangka", qty: 2, harga: 25_000, katergori: "Buah"},
    {id: 9, barang: "Chiki Balls", qty: 7, harga: 6_000, katergori: "snack"},
    {id: 10, barang: "Jeruk", qty: 10, harga: 15_000, katergori: "Buah"}, 
];

const hasilFilter = transaksi.filter(item => item.katergori === "snack");

const totalMap = transaksi.map(({id, barang, qty, harga, katergori}) => ({
    id, 
    barang, 
    qty, 
    harga, 
    katergori, 
    hasil: qty * harga 
}));

const totaltransaksi = totalMap.reduce((x, { hasil }) => x + hasil, 0);


console.log(`Jumlah kategori snack ada: ${hasilFilter.length} item`);
console.log("Data Hasil Filter Snack:", hasilFilter);
console.log("Data dengan Subtotal (Map):", totalMap);
console.log(`Total Keseluruhan Transaksi: Rp ${totaltransaksi.toLocaleString('id-ID')}`);