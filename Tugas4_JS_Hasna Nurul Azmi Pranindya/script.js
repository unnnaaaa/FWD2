
class Kendaraan {
    constructor(nama, tipe) {
        this.nama = nama;
        this.tipe = tipe;
        this.disewa = false;
    }

    sewa() {
        if (!this.disewa) {
            this.disewa = true;
            return `${this.nama} (${this.tipe}) telah disewa.`;
        } else {
            return `${this.nama} (${this.tipe}) sedang tidak tersedia.`;
        }
    }

    kembalikan() {
        this.disewa = false;
        return `${this.nama} (${this.tipe}) telah dikembalikan.`;
    }
}

class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    sewaKendaraan(kendaraan) {
        if (!kendaraan.disewa) {
            this.kendaraanDisewa = kendaraan;
            kendaraan.sewa();
            return `${this.nama} telah menyewa ${kendaraan.nama} (${kendaraan.tipe}).`;
        } else {
            return `Maaf, ${kendaraan.nama} sudah disewa oleh pelanggan lain.`;
        }
    }
}

class SistemPenyewaan {
    constructor() {
        this.daftarPelanggan = [];
    }

    tambahkanPelanggan(pelanggan) {
        this.daftarPelanggan.push(pelanggan);
        this.tampilkanPelanggan();
    }

    tampilkanPelanggan() {
        const daftarPelangganTable = document.getElementById("daftar-pelanggan");
        daftarPelangganTable.innerHTML = "";

        this.daftarPelanggan.forEach((pelanggan, index) => {
            if (pelanggan.kendaraanDisewa) {
                let row = `<tr>
                    <td>${index + 1}</td>
                    <td>${pelanggan.nama}</td>
                    <td>${pelanggan.nomorTelepon}</td>
                    <td>${pelanggan.kendaraanDisewa.nama} (${pelanggan.kendaraanDisewa.tipe})</td>
                </tr>`;
                daftarPelangganTable.innerHTML += row;
            }
        });
    }
}

const sistemPenyewaan = new SistemPenyewaan();

function tambahPelanggan() {
    let nama = document.getElementById("nama").value;
    let nomorTelepon = document.getElementById("nomorTelepon").value;
    let kendaraanNama = document.getElementById("kendaraan").value;
    let kendaraanTipe = document.getElementById("tipe").value;

    if (nama && nomorTelepon && kendaraanNama && kendaraanTipe) {
        let kendaraan = new Kendaraan(kendaraanNama, kendaraanTipe);
        let pelanggan = new Pelanggan(nama, nomorTelepon);
        pelanggan.sewaKendaraan(kendaraan);
        sistemPenyewaan.tambahkanPelanggan(pelanggan);
    }
}
