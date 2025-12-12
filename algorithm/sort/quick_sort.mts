function quickSort(arr: number[], left: number, right: number) {
  if (left < right) {
    let pivotIndex = divide(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
}

function divide(arr: number[], left: number, right: number): number {
  let pivot = arr[left];
  let leftStartIndex = left + 1;
  let rightStartIndex = right;

  while (leftStartIndex <= rightStartIndex) {
    // arr[leftStartIndex] 가 pivot 보다 작거나 같으면 인덱스 이동
    // 큰값을 찾을 때까지
    while (leftStartIndex <= right && arr[leftStartIndex] <= pivot) {
      leftStartIndex++;
    }

    // arr[rightStartIndex] 가 pivot 보다 크거나 같으면 인덱스 이동
    // 작은 값을 찾을때까지

    while (rightStartIndex >= left + 1 && arr[rightStartIndex] >= pivot) {
      rightStartIndex--;
    }

    if (leftStartIndex < rightStartIndex) {
      // 각 인덱스가 지나 치지 않은 경우만 데이터 의 자리 바꿈
      swap(arr, leftStartIndex, rightStartIndex);
    }
  }

  swap(arr, left, rightStartIndex);
  return rightStartIndex;
}

function swap(arr: number[], index1: number, index2: number) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

// 테스트 코드
console.log("=== QuickSort 테스트 ===\n");

// 테스트 1: 일반적인 정렬되지 않은 배열
let test1 = [64, 34, 25, 12, 22, 11, 90];
console.log("테스트 1 - 정렬 전:", [...test1]);
quickSort(test1, 0, test1.length - 1);
console.log("테스트 1 - 정렬 후:", test1);
console.log(
  "테스트 1 - 결과:",
  JSON.stringify(test1) === JSON.stringify([11, 12, 22, 25, 34, 64, 90])
    ? "✅ 통과"
    : "❌ 실패"
);
console.log();

// 테스트 2: 이미 정렬된 배열
let test2 = [1, 2, 3, 4, 5];
console.log("테스트 2 - 정렬 전:", [...test2]);
quickSort(test2, 0, test2.length - 1);
console.log("테스트 2 - 정렬 후:", test2);
console.log(
  "테스트 2 - 결과:",
  JSON.stringify(test2) === JSON.stringify([1, 2, 3, 4, 5])
    ? "✅ 통과"
    : "❌ 실패"
);
console.log();

// 테스트 3: 역순으로 정렬된 배열
let test3 = [5, 4, 3, 2, 1];
console.log("테스트 3 - 정렬 전:", [...test3]);
quickSort(test3, 0, test3.length - 1);
console.log("테스트 3 - 정렬 후:", test3);
console.log(
  "테스트 3 - 결과:",
  JSON.stringify(test3) === JSON.stringify([1, 2, 3, 4, 5])
    ? "✅ 통과"
    : "❌ 실패"
);
console.log();

// 테스트 4: 중복 값이 있는 배열
let test4 = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log("테스트 4 - 정렬 전:", [...test4]);
quickSort(test4, 0, test4.length - 1);
console.log("테스트 4 - 정렬 후:", test4);
console.log(
  "테스트 4 - 결과:",
  JSON.stringify(test4) === JSON.stringify([1, 1, 2, 3, 4, 5, 5, 6, 9])
    ? "✅ 통과"
    : "❌ 실패"
);
console.log();

// 테스트 5: 단일 요소 배열
let test5 = [42];
console.log("테스트 5 - 정렬 전:", [...test5]);
quickSort(test5, 0, test5.length - 1);
console.log("테스트 5 - 정렬 후:", test5);
console.log(
  "테스트 5 - 결과:",
  JSON.stringify(test5) === JSON.stringify([42]) ? "✅ 통과" : "❌ 실패"
);
console.log();

// 테스트 6: 빈 배열
let test6: number[] = [];
console.log("테스트 6 - 정렬 전:", [...test6]);
if (test6.length > 0) {
  quickSort(test6, 0, test6.length - 1);
}
console.log("테스트 6 - 정렬 후:", test6);
console.log(
  "테스트 6 - 결과:",
  JSON.stringify(test6) === JSON.stringify([]) ? "✅ 통과" : "❌ 실패"
);
console.log();

// 테스트 7: 음수 포함 배열
let test7 = [-3, 1, -1, 5, -2, 0];
console.log("테스트 7 - 정렬 전:", [...test7]);
quickSort(test7, 0, test7.length - 1);
console.log("테스트 7 - 정렬 후:", test7);
console.log(
  "테스트 7 - 결과:",
  JSON.stringify(test7) === JSON.stringify([-3, -2, -1, 0, 1, 5])
    ? "✅ 통과"
    : "❌ 실패"
);
console.log();

// 테스트 8: 큰 숫자 포함 배열
let test8 = [1000, 1, 999, 2, 500];
console.log("테스트 8 - 정렬 전:", [...test8]);
quickSort(test8, 0, test8.length - 1);
console.log("테스트 8 - 정렬 후:", test8);
console.log(
  "테스트 8 - 결과:",
  JSON.stringify(test8) === JSON.stringify([1, 2, 500, 999, 1000])
    ? "✅ 통과"
    : "❌ 실패"
);
console.log();
