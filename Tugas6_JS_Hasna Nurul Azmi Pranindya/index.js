import { index, store, destroy } from "./controller.js";

const main = () => {
    index(); //menampilkan data awal

    // Menambahkan 2 data baru
    store({ nama: "Data 11", umur: 30, alamat: "Jl. Data 11", email: "data11@email.com" });
    store({ nama: "Data 12", umur: 31, alamat: "Jl. Data 12", email: "data12@email.com" });

    index(); // menampilkan data setelah ditambah

    destroy("Data 5"); // menghapus salah satu data
    index(); // menampilkan data setelah dihapus
};

main();
