// console.log(arr[0]);

//mendapatkan array dengan melakukan perulangan
// for (let index = 0; index < arr.length; index++) {

//menampilkan hasil dengan cara template string
//   console.log(`Mahasiswa ke-${[index + 1]} : ${arr[index]}`);
// }

// Push & Pop = menambah dan menghapus array pada baris terakhir
// arr.push("Muhammad", "Reza");
// arr.pop();

//unshift & shift = menambah dan menghapus array pada baris pertama
// arr.unshift("Pertama");
// arr.shift();

//Splice = menaruh array ditempat manapun, dan bisa menghapus array yang sudah ada dari sebelah kiri
// arr.splice(0, 2, "Lastri", "Ahmad");
// console.log(arr.join(", "));

//Slice(awal, akhir) = mengambil array dari no awal sampai no -1 setelah no akhir, akan membentuk array baru dan harus ditampung terlebih dahulu
// arr1 = arr.slice(1, 3);
// console.log(arr1.join("-"));
// console.log(arr.join("-"));

// var arr = ["Rasidi", "Erik", "Doddy", "Mahmud"];
//foreach
// arr.forEach((e) => {
//   console.log(e);
// });

// arr.forEach((e, i) => {
//   console.log(`Mahasiswa ke-${[i + 1]} dengan nama ${[e]}`);
// });

//Map
// angka2 = angka.map((e) => {
//   return e * 2;
// });
// console.log(angka2.join(" - "));

//Sort
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join(" - "));

//Filter & Find
// var angka = [2, 1, 8, 10, 5, 20, 9, 0];
// angka.sort(function (a, b) {
//   return a - b;
// });
// var angka2 = angka.find(function (e) {
//   return e > 5;
// });
// console.log(angka2);

var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  //jika angkot kosong
  if (penumpang.length == 0) {
    //tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    //kembalikan isi array & keluar dr function
    return penumpang;
  } else {
    //telusuri seluruh kursi/array
    for (let index = 0; index < penumpang.length; index++) {
      //jika ada kursi kosong/undefined
      if (this.penumpang[index] == undefined) {
        //tambah penumpang di kursi tersebut
        penumpang[index] = namaPenumpang;
        //kembalikan isi array & keluar dr function
        return penumpang;
        //jika nama penumpang sama dengan yg didalam angkot
      } else if (penumpang[index] == namaPenumpang) {
        //tampilkan pesan kesalahan
        console.log(`${namaPenumpang} sudah ada didalam angkot`);
        //kembalikan isi array & keluar dr function
        return penumpang;
        //jika seluruh kursi terisi
      } else if (index == penumpang.length - 1) {
        //tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        //kembalikan isi array & keluar dr function
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log("Angkot kosong.");
    return penumpang;
  } else {
    for (let index = 0; index < penumpang.length; index++) {
      if (penumpang[index] == namaPenumpang) {
        penumpang[index] = undefined;
        return penumpang;
      } else if (index == penumpang.length - 1) {
        console.log(`${namaPenumpang} tidak ada didalam angkot`);
        return penumpang;
      }
    }
  }
};
