function numerosOneAlCien(num: number) {
    let numeros = ``;
    for (let i = 100; i >= num; i--) {
      numeros += "\n" + i
    }
    return numeros
  }
  
  console.log(numerosOneAlCien(1))