// Ejemplos
var ejemplo1 = ['0','1','0']; // 010
var ejemplo2 = [1,1,1]; // 111;
var ejemplo3 = [0,0,0]; // 000;

var alfabeto = {
0:'0',
1:'1'
};

//Estados
function S(str:any, pos:any){
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

function Q1(str:any, pos:any){
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

function F(str:any, pos:any){
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
