import { DoublyLinkedList } from "./DoublyLinkedList.mts";

class HashData<T> {
  key: number;
  value: T;
  constructor(key: number, value: T) {
    this.key = key;
    this.value = value;
  }
}

class HashTable<T> {
  arr: DoublyLinkedList<HashData<T>>[];

  constructor() {
    this.arr = [];
    for (let i = 0; i < 10; i++) {
      this.arr[i] = new DoublyLinkedList<HashData<T>>();
    }
  }

  hashFunction(number: number) {
    return number % 10;
  }

  set(key: number, value: T) {
    this.arr[this.hashFunction(key)].insertAt(0, new HashData(key, value));
  }

  get(key: number) {
    let currentNode = this.arr[this.hashFunction(key)].head;

    while (currentNode !== null) {
      if (currentNode.data.key === key) {
        return currentNode.data.value;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  remove(key: number) {
    const list = this.arr[this.hashFunction(key)];
    let currentNode = list.head;
    let index = 0;

    while (currentNode !== null) {
      if (currentNode.data.key === key) {
        return list.deleteAt(index);
      }
      currentNode = currentNode.next;
      index++;
    }

    return null;
  }
}

export { HashTable };
