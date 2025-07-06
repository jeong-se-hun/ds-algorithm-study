import { DoublyLinkedList } from "./DoublyLinkedList.mts";

const list = new DoublyLinkedList<number>();

list.insertLast(1);
list.printAll();
list.deleteAt(0); // ✅ head, tail null
list.printAll();

list.insertLast(10);
list.insertLast(20);
list.insertLast(30);
list.printAll();

list.deleteAt(1); // ✅ 중간 삭제
list.deleteAt(1); // ✅ tail 삭제
list.deleteAt(0); // ✅ head 삭제
list.printAll();
