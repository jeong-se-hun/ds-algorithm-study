/**
 * 이중 연결 리스트 기능
 * - 모든 데이터 출력
 * - 모든 데이터 제거
 * - 인덱스 삽입
 * - 마지막 삽입
 * - 인덱스 삭제
 * - 마지막 삭제
 * - 인덱스 읽기
 */
// DoublyLinkedList
// 각 노드가 이전 노드와 다음 노드를 모두 가리키는 선형 자료구조

class Node<T> {
  data: T;
  next: Node<T> | null;
  prev: Node<T> | null;

  constructor(
    data: T,
    next: Node<T> | null = null,
    prev: Node<T> | null = null
  ) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  count: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  insertAt(index: number, data: T) {
    if (index < 0 || index > this.count) {
      throw new Error("범위 초과");
    }
    const newNode = new Node(data);

    // 맨 앞 삽입
    if (index === 0) {
      newNode.next = this.head;

      if (this.head !== null) {
        this.head.prev = newNode;
      } else {
        // 리스트가 비어 있었다면
        this.tail = newNode;
      }

      this.head = newNode;
    }

    // 맨 뒤 삽입
    else if (index === this.count) {
      newNode.prev = this.tail;
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    // 중간 삽입
    else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode!.next;
      }

      newNode.next = currentNode!.next;
      newNode.prev = currentNode;
      currentNode!.next = newNode;
      newNode!.next!.prev = newNode;
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
    this.tail = null;
    this.count = 0;
  }

  insertLast(data: T) {
    this.insertAt(this.count, data);
  }

  deleteAt(index: number) {
    if (index >= this.count || index < 0) {
      throw new Error("범위 초과");
    }

    // 맨 앞 제거
    if (index === 0) {
      const deleteNode = this.head;

      if (this.head?.next === null) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head!.next;
        this.head.prev = null;
      }

      this.count--;
      return deleteNode;
    }

    // 맨 뒤 제거
    else if (index === this.count - 1) {
      const deleteNode = this.tail;

      if (this.tail?.prev === null) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail!.prev;
        this.tail.next = null;
      }

      this.count--;
      return deleteNode;
    }

    // 중간 제거
    else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode!.next;
      }
      const deleteNode = currentNode!.next;
      currentNode!.next = deleteNode!.next;
      deleteNode!.next!.prev = currentNode;

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

export { DoublyLinkedList, Node };
