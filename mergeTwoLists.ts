/*
Se le dan los encabezados de dos listas enlazadas ordenadas list1y list2.
Combinar las dos listas en una lista ordenada . La lista debe hacerse empalmando los nodos de las dos primeras listas.
Devuelve el encabezado de la lista enlazada fusionada .

Entrada: lista1 = [1,2,4], lista2 = [1,3,4]
 Salida: [1,1,2,3,4,4]

 Entrada: lista1 = [], lista2 = []
 Salida: []

 Entrada: lista1 = [], lista2 = [0]
 Salida: [0]
*/

class ListNode {
  val: any;
  next: ListNode | null;

  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;

  let p1: ListNode | null = list1;
  let p2: ListNode | null = list2;

  const result = new ListNode(-1);
  let current: ListNode | null = result;

  while (p1 && p2) {
    if (p1.val < p2.val) {
      current.next = p1;
      p1 = p1.next;
    } else {
      current.next = p2;
      p2 = p2.next;
    }
    current = current.next;
  }

  if (p1) {
    current.next = p1;
  } else if (p2) {
    current.next = p2;
  }

  return result.next;
}

const list = [1,2,4]
const lists = [1,3,4]

console.log(mergeTwoLists(list,lists))