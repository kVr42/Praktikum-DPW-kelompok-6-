function hitungLuasPersegi(sisi) {
	const luas = sisi * sisi;
	console.log("Luas persegi dengan sisi " + sisi + " adalah: " + luas);
}

hitungLuasPersegi(5);

// Parameter: sisi
function sapa(nama = "Pengguna") {
	console.log("Halo, " + nama);
}

// Argument: "Romeo"
sapa("Romeo");

// Default parameter: "Pengguna"
sapa();

function hitungTotalHarga(harga, jumlah = 1, diskon = 0) {
	const totalHarga = harga * jumlah;
	const potonganHarga = totalHarga * diskon / 100;
	const totalSetelahDiskon = totalHarga - potonganHarga;
	console.log("Total harga setelah diskon: " + totalSetelahDiskon);
}

hitungTotalHarga(100, 2, 10); 
hitungTotalHarga(50); 

// Rest parameter: menampung jumlah input yang tidak terbatas
function hitungJumlah(namaSiswa, ...angka) {
	const total = angka.reduce((jumlah, nilai) => jumlah + nilai, 0);
	console.log("Nama siswa: " + namaSiswa);
	console.log("Jumlah semua angka: " + total);
}

hitungJumlah("Alek", 1, 2, 3);
hitungJumlah("Alek", 10, 20, 30, 40, 50);


// first-class citizenship: fungsi dapat disimpan dalam variabel
const hitungPerkalian = function(a, b) {
  return a * b;
};


// function expression: fungsi dapat disimpan dalam variabel
const sapaPengguna = function(nama) {
  console.log("Halo, " + nama);
};

//higher-order function: fungsi dapat menerima fungsi lain sebagai argumen
function proseshitung(a, b, operasi) {
  return operasi(a, b);
}
const hasilPerkalian = proseshitung(5, 10, hitungPerkalian);
console.log("Hasil perkalian: " + hasilPerkalian);

//arrow function: sintaksis lebih ringkas untuk menulis fungsi
const hitungPembagian = (a, b) => a / b;
const hasilPembagian = proseshitung(20, 4, hitungPembagian);
console.log("Hasil pembagian: " + hasilPembagian);