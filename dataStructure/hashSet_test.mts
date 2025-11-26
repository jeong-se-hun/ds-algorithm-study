// HashSet 테스트
import { hashSet } from "./hashSet.mts";

console.log("--- HashSet 테스트 ---\n");

const set = new hashSet();

// 1. 초기 상태
console.log("1. 초기 상태");
console.log(`  isEmpty(): ${set.isEmpty()} (예상: true)`);
set.printAll();

// 2. 데이터 추가
console.log("\n2. 데이터 추가");
set.add(10);
set.add(20);
set.add(30);
set.add(40);
console.log(`  isEmpty(): ${set.isEmpty()} (예상: false)`);
set.printAll();

// 3. 데이터 존재 확인
console.log("\n3. 데이터 존재 확인");
console.log(`  isContain(10): ${set.isContain(10)} (예상: true)`);
console.log(`  isContain(99): ${set.isContain(99)} (예상: false)`);

// 4. 중복 데이터 추가 시도
console.log("\n4. 중복 데이터 추가 시도");
set.add(10);
set.add(20);
console.log("  중복 추가 후:");
set.printAll();

// 5. 데이터 제거
console.log("\n5. 데이터 제거");
set.remove(20);
console.log(`  isContain(20): ${set.isContain(20)} (예상: false)`);
set.printAll();

// 6. Set 비우기
console.log("\n6. Set 비우기");
set.clear();
console.log(`  isEmpty(): ${set.isEmpty()} (예상: true)`);
set.printAll();

// 7. clear 후 다시 추가
console.log("\n7. clear 후 다시 추가");
set.add(100);
set.add(200);
set.printAll();

console.log("\n--- 테스트 완료 ---");
