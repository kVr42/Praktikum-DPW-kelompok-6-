const penjumlahan = (a, b) => a + b;
const pengurangan = (a, b) => a - b;
const perkalian = (a, b) => a * b;
const pembagian = (a, b) => {
	if (b === 0) {
		throw new Error("Pembagian dengan nol tidak diperbolehkan");
	}

	return a / b;
};

const matematika = { penjumlahan, pengurangan, perkalian, pembagian };

export { penjumlahan, pengurangan, perkalian, pembagian };
export default matematika;


