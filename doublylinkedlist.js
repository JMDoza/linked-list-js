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

  const insertAt = (data, index) => {
    listSize++;
    if (index <= 0) {
      if (index < 0) {
        console.log("Index out of bounds, inserting at Head");
      }
      prepend(data);
      return;
    } else if (index >= size() - 1) {
      if (index >= size()) {
        console.log("Index out of bounds, inserting at Tail");
      }
      append(data);
      return;
    }

    current = at(index);
    newNode = listNode(data);

    prevNode = current.prevNode;
    newNode.nextNode = current;
    newNode.prevNode = prevNode;
    current.prevNode = newNode;
    prevNode.nextNode = newNode;
  };

  const removeAt = (index) => {
    listSize--;

    if (index <= 0) {
      if (index < 0) {
        console.log("Index out of bounds, removing at head");
      }
      dequeue();
      return;
    } else if (index >= size()) {
      if (index >= size() + 1) {
        console.log("Index out of bounds, removing at Tail");
      }
      pop();
      return;
    }

    current = at(index);

    prevNode = current.prevNode;
    nextNode = current.nextNode;
    prevNode.nextNode = nextNode;
    nextNode.prevNode = prevNode;
    current.nextNode = null;
    current.prevNode = null;
  };

  const contains = (data) => {
    current = head;
    while (current !== null) {
      if (current.data == data) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  };

  const find = (data) => {
    pointer = 0;
    current = head;
    while (current !== null) {
      if (current.data == data) {
        return pointer;
      }
      current = current.nextNode;
      pointer++;
    }

    return null;
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
    insertAt,
    removeAt,
    contains,
    find,
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

list.insertAt("est", 2);

console.log(list.toString("head"));
