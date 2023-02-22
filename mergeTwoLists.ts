interface ListNode {
  num: number;
  num0: number;
  num1: number;
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let result: any = [];
    

  return result;
}

console.log(mergeTwoLists([1,2,4], [1,3,4]))
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
