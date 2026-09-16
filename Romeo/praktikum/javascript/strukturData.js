//dictionary
const siswa = {
  nama: "Alek",
  usia: 20,
  kelas: "kelas king!"
};

console.log(siswa.nama);
console.log(siswa.usia);
console.log(siswa.kelas);

//dot notation vs bracket notation
console.log(siswa["nama"]);
console.log(siswa["usia"]);
console.log(siswa["kelas"]);

//menghapus properti dari object
delete siswa.usia;
console.log(siswa);

//object deconstruction
const { nama, usia, kelas } = siswa;
console.log(nama);
console.log(usia);
console.log(kelas);


//array
const angka = [1, 2, 3, 4, 5];
console.log(angka[0]);
console.log(angka.length);

//push dan pop
angka.push(6);
console.log(angka);
angka.pop();
console.log(angka);

//splice
const fruits = ["apel", "jeruk", "pisang", "mangga"];
// Menghapus 1 elemen dari index 1 (jeruk)
fruits.splice(1, 1);
console.log(fruits); // Output: ["apel", "pisang", "mangga"]

//shift dan unshift
const numbers = [1, 2, 3, 4, 5];
numbers.shift();// Menghapus elemen pertama (1)
console.log(numbers);
numbers.unshift(0);// Menambahkan elemen baru di awal array
console.log(numbers);

//sort
const angka2 = [5, 2, 9, 1, 5, 6];
angka2.sort((a, b) => a - b);
console.log(angka2); // Output: [1, 2, 5, 5, 6, 9]

//map(key, value fleksibel)
const data = [
  { nama: "Alek", usia: 20 },
  { nama: "Budi", usia: 22 },
  { nama: "Citra", usia: 19 }
];
const namaSiswa = data.map(siswa => siswa.nama);//map untuk mengambil nama dari setiap objek dalam array data
console.log(namaSiswa); // Output: ["Alek", "Budi", "Citra"]

//set
const angkaSet = new Set([1, 2, 3, 4, 5]);
console.log(angkaSet.has(3)); // Output: true

//string operator dan rest operator
const str1 = "Hello";
const str2 = "World";
const str3 = str1 + " " + str2;
console.log(str3); // Output: "Hello World"

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]

//flow control
const nilai = 85;
if (nilai >= 90) {
  console.log("Nilai A");
} else if (nilai >= 80) {
  console.log("Nilai B");
} else {
  console.log("Nilai C");
}

//finally, try, catch
try {
  const hasil = 10 / 0; // Ini akan menghasilkan Infinity, bukan error
} catch (error) {
  console.log("Terjadi kesalahan:", error.message);
} finally {
  console.log("Eksekusi selesai");
}