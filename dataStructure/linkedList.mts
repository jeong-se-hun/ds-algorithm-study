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
// LinkedList
// 각 노드가 데이터와 다음 노드를 가리키는 포인터를 가지는 선형 자료구조

class Node<T> {
  data: T;
  next: Node<T> | null;

  constructor(data: T, next: Node<T> | null = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList<T> {
  head: Node<T> | null;
  count: number;

  constructor() {
    this.head = null;
    this.count = 0;
  }

  insertAt(index: number, data: T) {
    if (index > this.count || index < 0) {
      throw new Error("범위 초과");
    }

    const newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode!.next;
      }
      newNode.next = currentNode!.next;
      currentNode!.next = newNode;
    }

    this.count++;
  }

  printAll() {
    let currentNode = this.head;
    let text = "[";

    while (currentNode !== null) {
      text += JSON.stringify(currentNode.data);
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

  insertLast(data: T) {
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
