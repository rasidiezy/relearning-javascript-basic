let n = 5;
let s = "";

for (let i = 1; i < n; i++) {
  for (let j = 1; j < n - i; j++) {
    s += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);
