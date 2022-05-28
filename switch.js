var namaMakanan = prompt(
  "Masukkan nama makanan : \n (cth: nasi, daging, hamburger, pizza)"
);

switch (namaMakanan) {
  case "nasi":
  case "daging":
    alert("makanan SEHAT");
    break;
  case "hamburger":
  case "pizza":
    alert("makanan TIDAK SEHAT");
    break;
  default:
    alert("anda memasukkan nama makanan yang salah");
    break;
}
