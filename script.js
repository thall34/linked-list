export class LinkedList {
  head = null;
  length = 0;
 
  append(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.length++
    } else {
      let tempNode = this.head;
      while (tempNode.nextNode !== null) {
        tempNode = tempNode.nextNode
      }
      tempNode.nextNode = node;
      this.length++
    }
  }
 
  prepend(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.length++
    } else {
      node.nextNode = this.head;
      this.head = node;
      this.length++
    }
  }
 
  size() {
    return this.length;
  }
 
  headNode() {
    if (this.head === null) {
      return undefined
    } else {
      return this.head.value;
    }
  }
 
  tailNode() {
    if (this.head === null) {
      return undefined
    } else {
      let tempNode = this.head
      while (tempNode.nextNode !== null) {
        tempNode = tempNode.nextNode
      }
      return tempNode.value;
    }
  }
 
  at(index) {
    if (index === 0) {
      return this.head.value
    } else if (index >= this.length) {
      return undefined
    } else {
      let tempNode = this.head
      while (index > 0) {
        tempNode = tempNode.nextNode;
        index--
      }
      return tempNode.value;
    }
  }
 
  pop() {
    if (this.head === null) {
      return undefined
    } else {
      const popNode = this.head;
      this.head = this.head.nextNode
      this.length--
      return popNode.value;
    }
  }
 
  contains(value) {
    if (this.head === null) {
      return false
    } else {
      let tempNode = this.head;
      while (tempNode !== null) {
        if (tempNode.value === value) {
          return true
        } else {
          tempNode = tempNode.nextNode;
        }
      }
     
      return false
    }
  }
 
  findIndex(value) {
    if (this.head === null) {
      return -1
    } else {
      let tempNode = this.head;
      let counter = 0
      while (tempNode !== null) {
        if (tempNode.value === value) {
          return counter
        } else {
          tempNode = tempNode.nextNode;
          counter++
        }
      }
     
      return -1
    }
  }
 
  toString() {
    if (this.head === null) {
      return ""
    } else {
      let tempNode = this.head;
      let string = ""
      while (tempNode !== null) {
        string += `( ${tempNode.value} ) -> `;
        tempNode = tempNode.nextNode;
      }
      string += "null"
      return string
    }
  }
}

class Node {
  nextNode = null;
 
  constructor(value) {
    this.value = value;
  }
}