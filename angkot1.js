//nilai awal
var noAngkot = 1,
  jmlAngkot = 10,
  angkotBeroperasi = 6;
//kondisi terminasi
while (noAngkot <= angkotBeroperasi) {
  console.log("Angkot No." + noAngkot + " Beoperasi dengan baik.");
  //penambahan atau pengurangan
  noAngkot++;
}

for (let index = angkotBeroperasi + 1; index <= jmlAngkot; index++) {
  console.log("Angkot No." + index + " Tidak Beoperasi dengan baik.");
}
