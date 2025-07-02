import { LinkedList, Node } from "./linkedList.mjs";

const linkedList = new LinkedList();
linkedList.insertAt(0, 0);
linkedList.insertAt(1, 1);
linkedList.insertAt(2, 2);
linkedList.insertAt(3, 3);
linkedList.insertAt(4, 4);

linkedList.printAll();

linkedList.deleteLast();
linkedList.printAll();

console.log(linkedList.getNode(2));
