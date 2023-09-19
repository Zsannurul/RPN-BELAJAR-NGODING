console.log("soal ke 1");
function shoutOut() {
  return "Halo Function!";
}
console.log(shoutOut());
// ------------------------------------
console.log("");
// ------------------------------------

console.log("soal ke 2");
let num1 = Math.round(Math.random() * 10) + 1;
let num2 = 4;

function calculateMultiply(num1, num2) {
  return num1 * num2;
}

let hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

// ------------------------------------
console.log("");
// -----------------------------------
console.log("soal ke 3");
let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";
function processSentence(name, age, address, hobby) {
  return `nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
}

let fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
