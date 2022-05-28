let n = 5;
let s = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 5; j >= i; j--) {
    s += "*";
  }
  s += "\n";
}
console.log(s);
