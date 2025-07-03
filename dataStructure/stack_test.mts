import { Stack } from "./stack.mts";

const stack = new Stack<number>();

console.log("==== 첫 번째 출력 ====");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.pop()?.data);
console.log(stack.pop()?.data);
console.log(stack.pop()?.data);
console.log(stack.pop()?.data);

console.log("==== 두 번째 출력 ====");
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
stack.pop();
console.log(stack.peek());

stack.pop();
console.log(stack.isEmpty());

stack.pop();
console.log(stack.isEmpty());
