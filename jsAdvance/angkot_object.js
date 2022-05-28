function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    if (this.penumpang == 0) {
      this.penumpang.push(namaPenumpang);
      return this.penumpang;
    } else {
      for (let i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == undefined) {
          this.penumpang[i] = namaPenumpang;
          return this.penumpang;
        } else if (i == this.penumpang.length - 1) {
          this.penumpang.push(namaPenumpang);
          return this.penumpang;
        }
      }
    }
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      console.log("Angkot masih kosong");
      return false;
    } else {
      for (let i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == namaPenumpang) {
          this.penumpang[i] = undefined;
          this.kas += bayar;
          return this.penumpang;
        } else if (i == penumpang.length - 1) {
          console.log(`${namaPenumpang} tidak ada didalam angkot`);
          return this.penumpang;
        }
      }
    }
  };
}

var angkot1 = new Angkot("Rasidi", ["Buntok", "Pamait"], [], 0);
var angkot2 = new Angkot("Jali", ["Ampah", "Buntok"], [], 0);
