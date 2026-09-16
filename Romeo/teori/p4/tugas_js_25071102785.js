// Memanggil dialog prompt bawaan browser seperti pada screenshot
window.addEventListener("load", function () {
  const namaInput = prompt("Tuliskan nama Kamu");
  const nama = namaInput && namaInput.trim() !== "" ? namaInput : "Romeo";

  const teksPernyataan = document.getElementById("teksPernyataan");
  teksPernyataan.textContent = `Nama saya ${nama}, saya akan mengamalkan Pancasila dan UUD 1945 sebagai Dasar Negara.`;
});