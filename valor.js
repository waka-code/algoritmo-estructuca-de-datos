function valorMA(x, u) {
    if (x > u) {
        return x + " es mayor " + u;
    }
    else {
        return u + " es mayor " + x;
    }
}
console.log(valorMA(3, 4));
function sumeTheTwoValor(x, u) {
    return x + u;
}
console.log(sumeTheTwoValor(3, 4));
function mayorDeTresValores(v) {
    var result = 0;
    for (var i = 0; i < v.length; i++) {
        if (v[i] > v[0]) {
            result = +v[i];
        }
        else {
            result = -1;
        }
    }
    return result;
}
console.log(mayorDeTresValores([6, 6, 5, 6]));
