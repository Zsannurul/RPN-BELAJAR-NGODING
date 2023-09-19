//  ini adalah file coba coba sebelum hasilnya jadi
// WARNING!
let namanya = "";
let rolenya = ["penyihir, ksatria, tabib"];
let pilihanRole = rolenya[0];

function algoritma(nama, role) {
  if (namanya.length && rolenya === 0) {
    console.log(`kamu harus mengisi nama kamu`);
  }
  if (rolenya[0]) {
    console.log(`peran kamu adalah ${rolenya[0]} ciptakan keajaiban yang membantu kemenanganmu`);
  } else if (rolenya[1]) {
    console.log(`peran kamu adalah ${rolenya[1]}, kamu dapat menyerang dengan senjatamu`);
  } else if (rolenya[2]) {
    console.log(`peran kamu adalah ${rolenya}, kamu dapat membantu temanmu yang terluka`);
  }
}

let hasil = algoritma(arkon, pilihanRole);
console.log(hasil);
