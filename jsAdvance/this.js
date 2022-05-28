// object
var a = 10;
// cara 1 - function declaration
// function halo() {
//   console.log(this);
//   console.log("Halo");
// }
// this.halo();
//this mengembalikan object global

//cara 2 - object literal
// var obj = { a, b, c };
// obj.halo = function () {
//   console.log(this);
//   console.log("Halo");
// };
// obj.halo();
//this mengembalikan object yang bersangkutan

//cara 3 - constructor
// function Halo() {
//   console.log(this);
//   console.log("Halo");
// }
// var obj1 = new Halo();
// var obj2 = new Halo();
//this mengembalikan object new yang baru dibuat
