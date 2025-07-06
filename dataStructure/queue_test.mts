import { Queue } from "./queue.mts";

const queue = new Queue<number>();

// 1. 비어있는 큐 테스트
console.log("\n1. 초기 상태 (비어있음)");
console.log(`  isEmpty(): ${queue.isEmpty()} (예상: true)`);
console.log(`  front(): ${queue.front()} (예상: null)`);
console.log(`  dequeue(): ${queue.dequeue()} (예상: null)`);

// 2. enqueue 테스트
console.log("\n2. enqueue(10) 및 enqueue(20)");
queue.enqueue(10);
queue.enqueue(20);
console.log(`  isEmpty(): ${queue.isEmpty()} (예상: false)`);
console.log(`  front(): ${queue.front()?.data} (예상: 10)`);

// 3. dequeue 테스트
console.log("\n3. dequeue() 후");
let dequeued = queue.dequeue();
console.log(`  dequeue 값: ${dequeued?.data} (예상: 10)`);
console.log(`  front(): ${queue.front()?.data} (예상: 20)`);
console.log(`  isEmpty(): ${queue.isEmpty()} (예상: false)`);

// 4. 마지막 dequeue 및 빈 큐 확인
console.log("\n4. 마지막 dequeue 후");
dequeued = queue.dequeue();
console.log(`  dequeue 값: ${dequeued?.data} (예상: 20)`);
console.log(`  isEmpty(): ${queue.isEmpty()} (예상: true)`);
console.log(`  front(): ${queue.front()} (예상: null)`);

console.log("\n--- 테스트 완료 ---");
