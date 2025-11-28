function hanoi(n: number, from: string, to: string, aux: string): void {
  if (n === 1) {
    console.log(`1 ${from} → ${to}`);
    return;
  }
  hanoi(n - 1, from, aux, to);
  console.log(`${n} ${from} → ${to}`);
  hanoi(n - 1, aux, to, from);
}

hanoi(3, "A", "C", "B");
