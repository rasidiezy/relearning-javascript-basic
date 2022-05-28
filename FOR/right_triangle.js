let n = 5;
let s = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j <= n - i; j++) {
    s += " ";
  }
  for (let k = 0; k < 1 + i - 1; k++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);
