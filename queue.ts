class Queue {
  private items: number[] = [];
  private front = 0;
  private totalElement = 0;
  constructor() {}
  enqueue(item: number) {
    this.items.push(item);
    //this.items[this.totalElement] = item;
    this.totalElement++;
    return item + " inserted";
  }
  dequeue() {
    if (this.front === this.totalElement) {
      return null;
    }
    const item = delete this.items[this.front];
    this.front++;
    return item;
  }
  getSize() {
    return this.totalElement - this.front;
  }
  isEmpty() {
    if (this.getSize() === 0) {
      return true;
    } else {
      return false;
    }
  }
  peek() {
    if (this.getSize() === 0) {
      return null;
    }
    return this.items[0];
  }

  last() {
    if (this.getSize() === 0) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  print() {
    if (this.getSize() === 0) {
      return null;
    }
    let result = "";
    for (let i = 0; i < this.totalElement; i++) {
      result += this.items[i] + " ";
    }
    return result;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
//console.log(queue.getSize());
console.log(queue.peek());
console.log(queue.print());
