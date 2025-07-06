import { Deque } from "./deque.mts";

console.log("--- Deque 기본 동작 테스트 ---");

const deque = new Deque<number>();

// 1. 초기 상태 (비어있음)
console.log("\n1. 초기 상태");
console.log(`  isEmpty(): ${deque.isEmpty()} (예상: true)`);

// 2. addFirst 테스트
console.log("\n2. addFirst(10) 및 addFirst(20)");
deque.addFirst(10);
deque.addFirst(20);
console.log(`  isEmpty(): ${deque.isEmpty()} (예상: false)`);
console.log("  현재 Deque:");
deque.printAll(); // [20, 10]

// 3. addLast 테스트
console.log("\n3. addLast(30) 및 addLast(40)");
deque.addLast(30);
deque.addLast(40);
console.log("  현재 Deque:");
deque.printAll(); // [20, 10, 30, 40]

// 4. removeFirst 테스트
console.log("\n4. removeFirst() 후");
let removed = deque.removeFirst();
console.log(`  제거된 값: ${removed?.data} (예상: 20)`);
console.log("  현재 Deque:");
deque.printAll(); // [10, 30, 40]

// 5. removeLast 테스트
console.log("\n5. removeLast() 후");
removed = deque.removeLast();
console.log(`  제거된 값: ${removed?.data} (예상: 40)`);
console.log("  현재 Deque:");
deque.printAll(); // [10, 30]

// 6. 모든 요소 제거 및 빈 큐 확인
console.log("\n6. 모든 요소 제거 후");
removed = deque.removeFirst();
console.log(`  제거된 값: ${removed?.data} (예상: 10)`);
deque.removeLast();
console.log(`  isEmpty(): ${deque.isEmpty()} (예상: true)`);
console.log("  현재 Deque:");
deque.printAll(); // []

// 7. 비어있는 Deque에서 제거 시도
console.log("\n7. 비어있는 Deque에서 제거 시도");
removed = deque.removeFirst();
console.log(`  removeFirst(): ${removed} (예상: null)`);

console.log("\n--- 테스트 완료 ---");
