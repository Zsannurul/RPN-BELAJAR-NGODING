/* ini adalah tugas dari soal part 5.5 RPN
 */

//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

console.log("SOAL PERTAMA");

let pertama = "JavaScript ";
let kedua = "is ";
let ketiga = "awesome ";
let keempat = "and ";
let kelima = "I ";
let keenam = "love ";
let ketujuh = "it!";

// code here

console.log(pertama + "" + kedua + "" + ketiga + "" + keempat + "" + kelima + "" + keenam + "" + ketujuh);

//  bisa dicek bang
// ---------------------------
console.log();
// -------------------------

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

console.log("SOAL KEDUA");
let kalimatLengkapKe2 = "wow JavaScript is so cool";
let kataPertama = kalimatLengkapKe2[0] + kalimatLengkapKe2[1] + kalimatLengkapKe2[2];
let kataKedua =
  kalimatLengkapKe2[4] + kalimatLengkapKe2[5] + kalimatLengkapKe2[6] + kalimatLengkapKe2[7] + kalimatLengkapKe2[8] + kalimatLengkapKe2[9] + kalimatLengkapKe2[10] + kalimatLengkapKe2[11] + kalimatLengkapKe2[12] + kalimatLengkapKe2[13];
let kataKetiga = kalimatLengkapKe2[15] + kalimatLengkapKe2[16];
let kataKeempat = kalimatLengkapKe2[18] + kalimatLengkapKe2[19];
let kataTerakhir = kalimatLengkapKe2[21] + kalimatLengkapKe2[22] + kalimatLengkapKe2[23] + kalimatLengkapKe2[24];

// ---------------------------------------
console.log();
// ---------------------------------------

// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!
console.log("SOAL 3");
let kalimatLengkapKe3 = "wow JavaScript is so cool";
let contohPertama = kalimatLengkapKe3.substring(0, 3);
let contohKedua = kalimatLengkapKe3.substring(4, 14);
let contohKetiga = kalimatLengkapKe3.substring(15, 17);
let contohKeempat = kalimatLengkapKe3.substring(18, 20);
let contohKelima = kalimatLengkapKe3.substring(21, 25);

console.log("Kata Pertama: " + contohPertama);
console.log("Kata kedua: " + contohKedua);
console.log("Kata Ketiga: " + contohKetiga);
console.log("Kata Keempat: " + contohKeempat);
console.log("Kata Kelima: " + contohKelima);

// ---------------------------------------
console.log(" ");
// ---------------------------------------

// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!
console.log("SOAL 4");
let kalimatLengkapKe4 = "wow JavaScript is so cool";
let kataPertamaEmpat = kalimatLengkapKe4.substring(0, 3);
let kataKeduaEmpat = kalimatLengkapKe4.substring(4, 14);
let kataKetigaEmpat = kalimatLengkapKe4.substring(15, 17);
let kataKeempatEmpat = kalimatLengkapKe4.substring(18, 20);
let kataKelimaEmpat = kalimatLengkapKe4.substring(21, 25);

let lengthKataPertama = kataPertamaEmpat.length;
let lengthKataKedua = kataKeduaEmpat.length;
let lengthKataKetiga = kataKetigaEmpat.length;
let lengthKataKeempat = kataKeempatEmpat.length;
let lengthKataKelima = kataKelimaEmpat.length;

console.log("Kata Pertama: " + kataPertamaEmpat + ", dengan length: " + lengthKataPertama);
console.log("Kata Kedua: " + kataKeduaEmpat + ", dengan length: " + lengthKataKedua);
console.log("Kata Ketiga: " + kataKetigaEmpat + ", dengan length: " + lengthKataKetiga);
console.log("Kata keempat: " + kataKeempatEmpat + ", dengan length: " + lengthKataKeempat);
console.log("Kata Kelima: " + kataKelimaEmpat + ", dengan length: " + lengthKataKelima);
