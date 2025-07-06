// Deque
// 양쪽 끝에서 삽입과 삭제가 모두 가능한 자료구조
import { DoublyLinkedList } from "./DoublyLinkedList.mts";

class Deque<T> {
  list: DoublyLinkedList<T>;
  constructor() {
    this.list = new DoublyLinkedList<T>();
  }

  printAll() {
    this.list.printAll();
  }

  addFirst(data: T) {
    this.list.insertAt(0, data);
  }

  removeFirst() {
    try {
      return this.list.deleteAt(0);
    } catch (e) {
      return null;
    }
  }

  addLast(data: T) {
    this.list.insertLast(data);
  }

  removeLast() {
    try {
      return this.list.deleteLast();
    } catch (e) {
      return null;
    }
  }

  isEmpty() {
    return this.list.count === 0;
  }
}

export { Deque };
