import users from "./data.js"

// menampilkan data dengan map()

const index = () => {
    console.log("Daftar Pengguna:");
    users.map((user, index) => {
        console.log(`${index + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}`);
    });
};

// tambah data baru

const store = (user) => {
    users.push(user); 
    console.log(`\nData Baru Ditambahkan: ${user.nama}`);
};

// hapus data 

const destroy = (index) => {
    if (index >= 0 && index < users.length) {
        console.log(`\nData ${users[index].nama} telah dihapus.`);
        users.splice(index, 1); 
    } else {
        console.log("\nIndeks tidak valid.");
    }
};

export { index, store, destroy };