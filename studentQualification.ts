interface notes {
  nameStudent: string;
  firstMonthGrade: number;
  secondmonthGrade: number;
  thirdmonthGrade: number;
  fourthmonthGrade: number;
}

function qualification(notes: notes): string {
  let student = true;
  let text: string = "";
  let notaTotal: number =
    notes.firstMonthGrade +
    notes.secondmonthGrade +
    notes.thirdmonthGrade +
    notes.fourthmonthGrade / 4;

  switch (student) {
    case notaTotal >= 70 && notaTotal < 79:
      text = `${notes.nameStudent} aprovo con C = ${notaTotal}`;
      break;
    case notaTotal >= 80 && notaTotal < 89:
      text = `${notes.nameStudent} aprovo con B = ${notaTotal}`;
      break;
    case notaTotal >= 90 && notaTotal < 100:
      text = `${notes.nameStudent} aprovo con A = ${notaTotal}`;
      break;
    case notaTotal < 70:
      text = `${notes.nameStudent} reprovo con D = ${notaTotal}`;
      break;
  }
  return text;
}

let notas: notes = {
  nameStudent: "Henry",
  firstMonthGrade: 13,
  secondmonthGrade: 25,
  thirdmonthGrade: 30,
  fourthmonthGrade: 10,
};

console.log(`Cuales son las notas de ${notas.nameStudent}`);

setTimeout(() => {
  console.log(`el primer parcial saco ${notas.firstMonthGrade}`);
}, 2000);

setTimeout(() => {
  console.log(`el segundo parcial saco ${notas.secondmonthGrade}`);
}, 3000);

setTimeout(() => {
  console.log(`el tercer parcial saco ${notas.thirdmonthGrade}`);
}, 4000);

setTimeout(() => {
  console.log(`puntos por asistencia ${notas.fourthmonthGrade}`);
}, 5000);

setTimeout(() => {
  console.log(`${qualification(notas)}`);
}, 6000);
