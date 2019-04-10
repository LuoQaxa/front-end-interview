// 希望数组中的元素都是同一种类型的元素，可以利用范型
// at class level
class Queue<T> {
  private data = [];
  push(item: T) { this.data.push(item); }
  pop(): T | undefined { return this.data.shift(); }
}

const queue = new Queue<number>();
queue.push(0);
queue.push(1); // Oops a mistake

// a developer walks into a bar
console.log(queue.pop().toPrecision(1));
console.log(queue.pop().toPrecision(1)); // RUNTIME ERROR

// at function level
function reverse<T>(items: T[]): T[] {
  var toreturn = [];
  for (let i = items.length - 1; i >= 0; i--) {
    toreturn.push(items[i]);
  }
  return toreturn;
}
var sample = [1, 2, 3];
var reversed = reverse(sample);
console.log(reversed); // 3,2,1

// reversed[0] = '1';     // Error!
// reversed = ['1', '2']; // Error!

reversed[0] = 1;       // Okay
reversed = [1, 2];     // Okay

class Utility {
  reverse<T>(items: T[]): T[] {
    var toreturn = [];
    for (let i = items.length - 1; i >= 0; i--) {
      toreturn.push(items[i]);
    }
    return toreturn;
  }
}

const getJSON = <T>(config: {
  url: string,
  headers?: { [key: string]: string },
}): Promise<T> => {
  const fetchConfig = ({
    method: 'GET',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    ...(config.headers || {})
  });
  return fetch(config.url, fetchConfig)
    .then<T>(response => response.json());
}

