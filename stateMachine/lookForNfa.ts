/* b) Con un DFA programado (Recomendación: Utilizar recursión. */

// Ejemplos
var ejemplo1 = ['0','1','0']; // 010
var ejemplo2 = ["1","1","1"]; // 111;
var ejemplo3 = [0,0,0]; // 000;

var alfabeto = {
0:'0',
1:'1'
};

//Estados
function S(str:string[], pos:number){
if(str.length == pos){
console.log('INVALIDA');
return;
}
console.log('S');
console.log('Char: ' + str[pos]);
console.log('___');
// Transitions
switch(str[pos]){
case '0':
S(str, pos+1);
break;

case '1':
Q1(str, pos+1);
break;

default:
console.log('INVÁLIDA');
break;
}

}

function Q1(str:string[], pos:number){
if(str.length == pos){
console.log('INVALIDA');
return;
}
// Transitions
console.log('Q1');
console.log('Char: ' + str[pos]);
console.log('___');
switch(str[pos]){
case '0':
F(str, pos+1);
break;

case '1':
Q1(str, pos+1);
break;

default:
console.log('INVÁLIDA');
break;
}
}

function F(str:string[], pos:number){
if(str.length == pos){
console.log('VALIDA');
return;
}
console.log('F');
console.log('Char: ' + str[pos]);
console.log('___');
switch(str[pos]){
case '0':
F(str, pos+1);
break;

case '1':
console.log('INVÁLIDA');
break;

default:
console.log('INVÁLIDA');
break;
}

}

S(ejemplo1, 0);