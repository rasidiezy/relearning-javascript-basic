let n = 5;
let s = "";

for (let i = 1; i < n; i++) {
  for (let j = n; j > i; j--) {
    s += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    s += "*";
  }
  s += "\n";
}
for (let i = 2; i < n; i++) {
  for (let j = 0; j < i; j++) {
    s += " ";
  }
  for (let k = 0; k < 2 * (n - i) - 1; k++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);
