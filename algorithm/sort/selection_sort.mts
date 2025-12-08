function SelectionSort(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minValueIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minValueIndex]) {
        minValueIndex = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[minValueIndex];
    arr[minValueIndex] = temp;
  }
}

// 테스트 코드
console.log("=== SelectionSort 테스트 ===\n");

// 테스트 1: 일반적인 정렬되지 않은 배열
let test1 = [64, 34, 25, 12, 22, 11, 90];
console.log("테스트 1 - 정렬 전:", [...test1]);
SelectionSort(test1);
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
SelectionSort(test2);
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
SelectionSort(test3);
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
SelectionSort(test4);
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
SelectionSort(test5);
console.log("테스트 5 - 정렬 후:", test5);
console.log(
  "테스트 5 - 결과:",
  JSON.stringify(test5) === JSON.stringify([42]) ? "✅ 통과" : "❌ 실패"
);
console.log();

// 테스트 6: 빈 배열
let test6: number[] = [];
console.log("테스트 6 - 정렬 전:", [...test6]);
SelectionSort(test6);
console.log("테스트 6 - 정렬 후:", test6);
console.log(
  "테스트 6 - 결과:",
  JSON.stringify(test6) === JSON.stringify([]) ? "✅ 통과" : "❌ 실패"
);
console.log();

// 테스트 7: 음수 포함 배열
let test7 = [-3, 1, -1, 5, -2, 0];
console.log("테스트 7 - 정렬 전:", [...test7]);
SelectionSort(test7);
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
SelectionSort(test8);
console.log("테스트 8 - 정렬 후:", test8);
console.log(
  "테스트 8 - 결과:",
  JSON.stringify(test8) === JSON.stringify([1, 2, 500, 999, 1000])
    ? "✅ 통과"
    : "❌ 실패"
);
