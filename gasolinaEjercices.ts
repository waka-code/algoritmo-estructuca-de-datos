/*
 1 -combustibles{
      1.1 --tipos
       1.2 --precios
  }
  2-si tengo o no tengo carro{
    2.1--decir modelo
  }
  3-si el carro tiene menos de 20 en gasolina diga gasolina baja{
    3.1--cantidad de gasolina disponible
    3.2--kilometros
  } 
  4-si tiene mas de 20 todo clean{
    4.1--cantidad de gasolina disponible
    4.2--kilometros
  }
  5-hacer fila en la bomba{
    5.1--cuanto carros tiene delante
    5.2--turno{
        5.2.1--cantidad de combustible a hechar 
        5.2.2--precio del combustible
    }
  } 
  6-combustible hecha{
     6.1--print{
        combustible a tal nivel
     }
     6.2--eliminar de la lista el que hecho
  }
  -*/
class Stack {
  private stack: string[] = [];
  constructor() {}
  push(element: string) {
    this.stack.push(element);
    return this.stack;
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  print() {
    console.log(this.stack);
  }
  size() {
    return this.stack.length;
  }
}

const stack = new Stack();

type Gasolina = {
  Premium: number;
  Optima: number;
  Regular: number;
};
const PRECIO_GASOLINA: Gasolina = {
  Premium: 293.6,
  Optima: 241.1,
  Regular: 274.5,
};

function fuelAvailable(car: string, gasoline: number, km: number) {
  const GASOLINE_IN_LITERS = gasoline * 3.79;
  const OIL_CONSUME = Math.trunc((GASOLINE_IN_LITERS / km) * 100);
  if (!car) {
    console.log("Camino a pie");
  }
  if (!(gasoline <= 3)) {
    console.log(
      `${car}: gasolina disponible ${gasoline} galones, ${km} Km y consumio: ${OIL_CONSUME} LT de Gasolina`
    );
  }
  stack.push(car);
  console.log(
    `${car}: gasolina baja, ${gasoline} galones, ${km} Km y consumio: ${OIL_CONSUME} LT de Gasolina`
  );
}
function putGasoline(gallons: number, typeOfGasoline: number) {
  if (stack) {
    const LAST_CAR_IN_STACK = stack.pop();
    const NUM_OF_VEHICLES = stack.size();
    console.log(
      `el siguiente en la fila ${LAST_CAR_IN_STACK} y hay ${NUM_OF_VEHICLES} detras`
    );
    if (LAST_CAR_IN_STACK) {
      console.log(
        `cuantos gallons necesita: ${gallons} galones y que tipo de Gasolina Quiere`
      );
      switch (typeOfGasoline) {
        case PRECIO_GASOLINA.Premium:
          console.log(
            `De la Premiun, son ${gallons * PRECIO_GASOLINA.Premium} pesos`
          );
          break;
        case PRECIO_GASOLINA.Optima:
          console.log(
            `De la Optima, son ${gallons * PRECIO_GASOLINA.Optima} pesos`
          );
          break;
        case PRECIO_GASOLINA.Regular:
          console.log(
            `De la Regular, son ${gallons * PRECIO_GASOLINA.Regular} pesos`
          );
          break;
        default:
          console.log(`Cual es el tipo de gasolina`);
      }
      console.log(`el vehiculo se retira de la bomba`);
    }
  }
}

console.log(fuelAvailable("Honda Civic 2012", 2, 450));
console.log(`${stack.size()} vehiculos`);
console.log(stack.print());

console.log(fuelAvailable("Honda Crv", 8, 450));
console.log(`${stack.size()} vehiculos`);
console.log(stack.print());

console.log(fuelAvailable("Toyota Camry", 5, 500));
console.log(`${stack.size()} vehiculos`);
console.log(stack.print());

console.log(putGasoline(4, PRECIO_GASOLINA.Premium));
console.log(putGasoline(8, PRECIO_GASOLINA.Regular));
console.log(putGasoline(12, PRECIO_GASOLINA.Optima));
