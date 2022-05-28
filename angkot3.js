//nilai awal
var noAngkot = 1,
  jmlAngkot = 10,
  angkotBeroperasi = 6;

for (let index = noAngkot; index <= jmlAngkot; index++) {
  if (index <= 6 && index !== 5) {
    console.log("Angkot No." + index + " beroperasi dengan baik.");
  } else if (index == 8 || index == 10 || index == 5) {
    console.log("Angkot No." + index + " sedang lembur.");
  } else {
    console.log("Angkot No." + index + " sedang tidak beroperasi.");
  }
}
