// Operator unary
let angka = 5;
console.log("Unary:");
console.log(+angka);     // mengubah ke number
console.log(-angka);     // negasi
console.log(++angka);    // increment
console.log(--angka);    // decrement
console.log(!true);      // negasi logika
console.log(typeof angka); // menentukan tipe data

// Operator binary
let a = 10;
let b = 3;
console.log("Binary:");
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
console.log(a > b);
console.log(a === b);
console.log(a > b && a !== b);

// strict equality vs loose equality
console.log("Equality comparison:");
console.log(5 == "5");      // true, loose equality mengubah tipe data
console.log(5 === "5");     // false, strict equality membandingkan tipe dan nilai
console.log(null == undefined); // true
console.log(null === undefined); // false

// Operator ternary
let usia = 20;
let status = usia >= 18 ? "dewasa" : "belum dewasa";
console.log("Ternary:");
console.log(status); 

// Operator logika
let x = true;
let y = false;
console.log("Logical operators:");
console.log(x && y);
console.log(x || y);
console.log(!x);

// Operator nullish coalescing
let nama = null;
let username = nama ?? "Guest";
let nilai = 0;
let hasilNilai = nilai ?? 10;
console.log("Nullish coalescing:");
console.log(username);  // Guest
console.log(hasilNilai); // 0

