/**
 * 연결 리스트 기능
 * - 모든 데이터 출력
 * - 모든 데이터 제거
 * - 인덱스 삽입
 * - 마지막 삽입
 * - 인덱스 삭제
 * - 마지막 삭제
 * - 인덱스 읽기
 */

class Node {
  data: number;
  next: Node | null;

  constructor(data: number, next: Node | null = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  head: Node | null;
  count: number;

  constructor() {
    this.head = null;
    this.count = 0;
  }

  insertAt(index: number, data: number) {
    if (index > this.count || index < 0) {
      throw new Error("범위 초과");
    }

    const nowNode = new Node(data);

    if (index === 0) {
      nowNode.next = this.head;
      this.head = nowNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode!.next;
      }
      nowNode.next = currentNode!.next;
      currentNode!.next = nowNode;
    }

    this.count++;
  }

  printAll() {
    let currentNode = this.head;
    let text = "[";

    while (currentNode !== null) {
      text += currentNode.data;
      currentNode = currentNode.next;
      if (currentNode != null) text += ", ";
    }

    text += "]";
    console.log(text);
  }

  clear() {
    this.head = null;
    this.count = 0;
  }

  insertLast(data: number) {
    this.insertAt(this.count, data);
  }

  deleteAt(index: number) {
    if (index >= this.count || index < 0) {
      throw new Error("범위 초과");
    }

    if (index === 0) {
      const deleteNode = this.head;
      this.head = this.head ? this.head.next : null;
      this.count--;
      return deleteNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode!.next;
      }
      const deleteNode = currentNode!.next;
      currentNode!.next = deleteNode!.next;

      this.count--;
      return deleteNode;
    }
  }

  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  getNode(index: number) {
    if (index >= this.count || index < 0) {
      throw new Error("범위 초과");
    }

    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode!.next;
    }

    return currentNode;
  }
}

export { Node, LinkedList };
