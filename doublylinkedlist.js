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

  return {
    append,
    prepend,
  };
}

const list = doublyLinkedList();
