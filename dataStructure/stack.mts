// Stack
// 후입선출(LIFO) 원칙을 따르는 자료구조
import { LinkedList } from "./linkedList.mts";

class Stack<T> {
  list: LinkedList<T>;
  constructor() {
    this.list = new LinkedList();
  }

  push(data: T) {
    this.list.insertAt(0, data);
  }

  pop() {
    try {
      return this.list.deleteAt(0);
    } catch (err) {
      return null;
    }
  }

  peek() {
    const node = this.list.getNode(0);
    return node ? node.data : null;
  }

  isEmpty() {
    return this.list.count === 0;
  }
}

export { Stack };
