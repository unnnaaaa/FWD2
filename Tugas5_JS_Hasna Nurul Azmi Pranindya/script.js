// **Data Produk**
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Tablet", harga: 7000000 },
    { id: 4, nama: "Headphone", harga: 1500000 },
    { id: 5, nama: "Mouse", harga: 300000 }
];

// **Menampilkan Produk dengan Destructuring ke dalam tabel**
function tampilkanProduk() {
    let tabel = document.getElementById("produkTable");
    tabel.innerHTML = ""; // Reset isi tabel

    produkList.forEach(({ id, nama, harga }) => {
        let row = `<tr>
            <td>${id}</td>
            <td>${nama}</td>
            <td>Rp${harga}</td>
        </tr>`;
        tabel.innerHTML += row;
    });
}

// **Menambahkan Produk dengan Spread Operator**
function tambahProduk(id, nama, harga) {
    produkList = [...produkList, { id, nama, harga }];
    tampilkanProduk();
}

// **Menghapus Produk berdasarkan ID**
function hapusProduk(id) {
    produkList = produkList.filter(produk => produk.id !== id);
    tampilkanProduk();
}


