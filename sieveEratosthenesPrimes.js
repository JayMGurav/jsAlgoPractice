const [n] = process.argv.slice(2),
  array = new Array(Number(n)).fill(0),
  rootN = Math.sqrt(n);

for (let i = 2; i < n; i++) array[i] = i;


for (let i = 2; i < rootN; i++) {
  if (array[i] !== 0) {
    let j = i * i;
    while (j <= n) {
      array[j] = 0;
      j = j + i;
    }
  }
}

console.log(array.filter(e => e != 0));