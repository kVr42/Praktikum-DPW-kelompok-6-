// Konversi data
let angkaString = "123";
let angkaDariString = Number(angkaString);
let teksDariAngka = String(42);
let booleanDariTeks = Boolean("false");
let integerDariTeks = parseInt("45.67");
let floatDariTeks = parseFloat("45.67");

console.log("Number(\"123\"):", angkaDariString);
console.log("String(42):", teksDariAngka);
console.log("Boolean(\"false\"):", booleanDariTeks);
console.log("parseInt(\"45.67\"):", integerDariTeks);
console.log("parseFloat(\"45.67\"):", floatDariTeks);

let nilaiA = "10";
let nilaiB = 5;
console.log("nilaiA + nilaiB:", nilaiA + nilaiB);
console.log("Number(nilaiA) + nilaiB:", Number(nilaiA) + nilaiB);
