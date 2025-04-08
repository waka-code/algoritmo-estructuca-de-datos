// Se le proporcionan dos listas enlazadas no vacías que representan dos enteros no negativos.
// Los dígitos se almacenan en orden inverso y cada uno de sus nodos contiene un solo dígito.
// Suma los dos números y devuelve la suma como una lista enlazada.

// Puede suponer que los dos números no contienen ningún cero a la izquierda, excepto el propio número 0.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Ejemplo 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Ejemplo 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]


// Restricciones:

// El número de nodos en cada lista enlazada está en el rango .[1, 100]
// 0 <= Node.val <= 9
// Se garantiza que la lista representa un número que no tiene ceros a la izquierd
class ListNode {
 val: number
 next: ListNode | null
 constructor(val?: number, next?: ListNode | null) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
 }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
 let result = new ListNode(0);
 let current = result;
 let count = 0;

 while (l1 !== null || l2 !== null) {
  let x = l1 ? l1.val : 0;
  let y = l2 ? l2.val : 0;
  let sum = count + x + y;
  count = Math.floor(sum / 10);
  current.next = new ListNode(sum % 10);
  current = current.next;

  if (l1 !== null) l1 = l1.next;
  if (l2 !== null) l2 = l2.next;
 }

 if (count > 0) {
  current.next = new ListNode(count);
 }

 return result.next;
}

console.log(addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3))), new ListNode(5, new ListNode(6, new ListNode(4)))));