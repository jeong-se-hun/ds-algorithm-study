function sumArray(arr: number[]): number {
  if (arr.length === 0) return 0;
  return arr[arr.length - 1] + sumArray(arr.slice(0, -1));
}

const arr = [1, 2, 3, 4, 5];

console.log(sumArray(arr));
