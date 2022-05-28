//Membuat Object Literal
// var mhs = {
//   nama: "Rasidi",
//   umur: 24,
//   ipk: [3.0, 2.52, 2.91],
//   jurusan: "Teknik Informatika",
// };
// let mhs = {
//   nama: "Rasidi",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan !`);
//   },
// };

// var mhs1 = {
//   nama: "Lastri Ayu Pratama",
//   umur: 23,
//   ipk: [3.0, 2.92, 2.91],
//   jurusan: "D3 Keperawatan",
// };

//Membuat object dg Function Declaration
// function buatMhs(nama, umur, ipk, jurusan) {
//   var mhs = {};
//   mhs.nama = nama;
//   mhs.umur = umur;
//   mhs.ipk = ipk;
//   mhs.jurusan = jurusan;
//   return mhs;
// }
// var mhs3 = buatMhs("Rasidi", 23, [2.3, 2.63, 3.0], "Teknik Informatika");
// console.log(mhs3);

function mahasiswa(nama, energi) {
  var mhs = {};
  mhs.nama = nama;
  mhs.energi = energi;
  mhs.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan ${porsi} porsi ya`);
  };
  mhs.main = function (jam) {
    this.energi -= jam;
    console.log(`Selamat bermain ${this.nama}`);
  };
  return mhs;
}
var mhs1 = mahasiswa("Rasidi", 0);
var mhs2 = mahasiswa("Ahmad", 0);

//Membuat Object dg Constructor = keyword New
// function Mahasiswa(nama, umur, ipk, jurusan) {
//   this.nama = nama;
//   this.umur = umur;
//   this.ipk = ipk;
//   this.jurusan = jurusan;
// }
// var mhs4 = new Mahasiswa("Lastri Ayu", 24, [3.0, 3.0, 3.0], "D3 Keperawatan");
// console.log(mhs4);

// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, Selamat makan ${porsi} porsi ya kak.`);
//   };
// }

// let rasidi = new Mahasiswa("Rasidi", 0);
// let jali = new Mahasiswa("Jali", 0);
