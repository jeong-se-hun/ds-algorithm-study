// Queue
// 선입선출(FIFO) 원칙을 따르는 자료구조
import { DoublyLinkedList } from "./DoublyLinkedList.mts";

class Queue<T> {
  list: DoublyLinkedList<T>;
  constructor() {
    this.list = new DoublyLinkedList<T>();
  }

  enqueue(data: T) {
    this.list.insertAt(0, data);
  }

  dequeue() {
    try {
      return this.list.deleteLast();
    } catch (e) {
      return null;
    }
  }

  front() {
    return this.list.tail;
  }

  isEmpty() {
    return this.list.count === 0;
  }
}

export { Queue };
