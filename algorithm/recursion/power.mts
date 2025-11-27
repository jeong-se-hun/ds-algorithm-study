function power(x: number, n: number) {
  if (n === 1) return x;

  return x * power(x, n - 1);
}

console.log(power(2, 5));
