
// Array nama-nama Shift 2
let namaShift2 = [
    "Febria",
    "Suci",
    "Herlina",
    "Madina",
    "Lina",
    "Hikmatuz",
    "Meiva",
    "Rima",
    "Naya",
    "Saskia",
    "Wisnu",
    "Rafa",
    "Akbar",
    "Ridho"
];

// Menampilkan daftar nama
console.log("=== DAFTAR NAMA SHIFT 2 ===");

namaShift2.forEach((nama, index) => {
    console.log((index + 1) + ". " + nama);
});

// Menambahkan nama menggunakan push
namaShift2.push("Nama Baru");

console.log("\n=== SETELAH PUSH ===");
console.log(namaShift2);
