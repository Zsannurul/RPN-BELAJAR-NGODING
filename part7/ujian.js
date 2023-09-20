// Problem
// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka.
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya.
// Jika kedua angka bernilai sama, function akan me-return -1.
console.log("------------------------");
console.log("soal 1 (pembandingan dua angka)");
function bandingkanAngka(angka1, angka2) {
  //code disini
  if (angka2 > angka1) {
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

// ------------------------------------
console.log("----------------------------");
// ------------------------------------

// Problem
// Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string.
// Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".
console.log("soal 2 (pembalikan kata) ");
function balikKata(kata) {
  // you can only write your code here!
  let katanya = kata.split("");
  let kataTerbalik = katanya.reverse();
  let stringTerbalik = kataTerbalik.join();
  return stringTerbalik;
}

// TEST CASES
console.log(balikKata("Hello World and Coders")); // sredoC dna dlroW olleH
console.log(balikKata("John Doe")); // eoD nhoJ
console.log(balikKata("I am a bookworm")); // mrowkoob a ma I
console.log(balikKata("Coding is my hobby")); // ybboh ym si gnidoC
console.log(balikKata("Super")); // repuS

// ------------------------------------
console.log("------------------------");
// ------------------------------------

// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut.
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".
console.log("soal 3 (konversi menit)");
function konversiMenit(menit) {
  // you can only write your code here!
  let jam = Math.floor(menit / 60);
  let sisaMenit = menit % 60;
  let jamString = jam < 10 ? "0" + jam : jam.toString();
  let menitString = sisaMenit < 10 ? "0" + sisaMenit : sisaMenit.toString();
  let result = `${jamString} : ${menitString}`;
  return result;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

// ------------------------------------
console.log("------------------------");
// ------------------------------------

//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.
console.log("soal 4 (cek dua karakter) ");
function xo(str) {
  // Inisialisasi variabel untuk menghitung jumlah karakter x dan o
  var countX = 0;
  var countO = 0;

  // Iterasi melalui setiap karakter dalam string
  for (var i = 0; i < str.length; i++) {
    // Jika karakter saat ini adalah 'x', tambahkan ke countX
    if (str[i] === "x") {
      countX++;
    }
    // Jika karakter saat ini adalah 'o', tambahkan ke countO
    else if (str[i] === "o") {
      countO++;
    }
  }

  // Bandingkan jumlah karakter x dan o
  // Jika jumlahnya sama, kembalikan true; jika tidak, kembalikan false
  return countX === countO;
}

// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true
