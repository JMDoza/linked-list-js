function doublyLinkedList() {
  listSize = 0;
  head = null;
  tail = null;

  const listNode = (data) => {
    return {
      data,
      nextNode: null,
      prevNode: null,
    };
  };

  const append = (data) => {
    newNode = listNode(data);
    listSize++;

    if (head === null) {
      head = newNode;
    }

    if (tail !== null) {
      newNode.prevNode = tail;
      tail.nextNode = newNode;
    }

    tail = newNode;
  };

  const prepend = (data) => {
    newNode = listNode(data);
    listSize++;

    if (tail === null) {
      tail = newNode;
    }

    if (head !== null) {
      newNode.nextNode = head;
      head.prevNode = newNode;
    }

    head = newNode;
  };

  const size = () => {
    return listSize;
  };

  const getHead = () => {
    return head;
  };

  const getTail = () => {
    return tail;
  };

  const at = (index) => {
    let pointer = 0;
    let current = head;

    while (pointer < index) {
      current = current.nextNode;
      pointer++;
    }

    return current;
  };

  const pop = () => {
    temp = tail;
    tail = temp.prevNode;
    tail.nextNode = null;
    temp.prevNode = null;
    listSize--;

    return temp;
  };

  const dequeue = () => {
    temp = head;
    head = temp.nextNode;
    head.prevNode = null;
    temp.nextNode = null;
    listSize--;

    return temp;
  };

  

  const toString = (from) => {
    string = "";
    if (from === "head") {
      current = head;
      while (current != null) {
        string += `${current.data} -> `;
        current = current.nextNode;
      }
    } else if (from === "tail") {
      current = tail;
      while (current != null) {
        string += `${current.data} -> `;
        current = current.prevNode;
      }
    } else {
      return "Invalid Direction!";
    }
    return string + `${current ? current.data : null}`;
  };

  return {
    append,
    prepend,
    size,
    getHead,
    getTail,
    at,
    pop,
    dequeue,
    toString,
  };
}

const list = doublyLinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString("head"));