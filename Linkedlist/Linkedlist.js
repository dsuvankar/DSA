class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtHead(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  insertAt(index, data) {
    const newNode = new Node(data);
    let temp = this.head;
    for (let i = 0; i < index - 1; i++) {
      temp = temp.next;
    }

    newNode.next = temp.next;
    temp.next = newNode;
    this.size++;
  }

  print() {
    let result = "";
    let temp = this.head;
    while (temp) {
      result += `${temp.data}->`;
      temp = temp.next;
    }
    if (temp === null) {
      result += "null";
    }
    return result;
  }
}

let list = new LinkedList();
list.insertAtHead(45);
list.insertAt(1, 12);
list.insertAt(2, 34);

console.log(list.print());
