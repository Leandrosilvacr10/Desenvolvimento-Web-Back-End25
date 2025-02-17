var p1 = 4;
var p2 = 10;
var freq = 9;

function calculateGrade(p1, p2, freq) {
    var notaF = p1 * 0.3 + p2 * 0.4 + freq * 0.3;

    console.log("A nota final é :" + notaF);

    if (notaF >= 9.5)
        console.log("Aluno Aprovado");
    else
        console.log("Aluno Reprovado");

    console.log("");
}



num = 0;

function getMonthName(num) {
    switch (num) {
        case 1:
            console.log("Janeiro");
            break;
        case 2:
            console.log("Fevereiro");
            break;
        case 3:
            console.log("Março");
            break;
        case 4:
            console.log("Abril");
            break;
        case 5:
            console.log("Maio");
            break;
        case 6:
            console.log("Junho");
            break;
        case 7:
            console.log("Julho");
            break;
        case 8:
            console.log("Agosto");
            break;
        case 9:
            console.log("Setembro");
            break;
        case 10:
            console.log("Outubro");
            break;
        case 11:
            console.log("Novembro");
            break;
        case 12:
            console.log("Dezembro");
            break;
        default:
            console.log("nao encontrado");
            break;
    }
}

function calculate(vale1,vale2, op) {
if ( op == "+" ) {
    return vale1 + vale2;
}
else if (op == "-"){
    return vale1 - vale2;
}
else if (op == "*"){
    return vale1 * vale2;
}
else if (op == "/"){
    return vale1 / vale2;
}
else{
    return "operação invalida";
}
}


limite = 20;
function multiplosDe5(){
    for (var i = 1; i <= limite; i++) {
        if (i % 5 == 0) {
            console.log(i);
        }
    }
}

//Devolva a soma dos n numeros inteiros


function soma(val) {
    var res = 0;
    for (var i = 0; i <=val; i++) 
        res=res+1;
    return res;
}

//5! 1x2x3x4x5
//max
//min
//avg

function fatorial(n) {
    var res = 1;
    for (var i = n; i > 1; i--) {
        res = res * i;
        }
        return res;
}


var array = [200,4,5,2,1,100];

function max(array){
    var ma = array[0];
    for (let index = 1; index > array.length; index++){
        if (array[index] > ma) {
            ma = array[index];
            }
        
    }
    return ma;
}


function min(array){
    var mi = array[0];
    for (let index = 1; index < array.length; index++){
        if (array[index] < mi) {
            mi = array[index];
            }
        
    }
    return mi;
}

function avarage (){
    var sum = 0;
    for (var i = 0; i < n.length; i++) {
        sum = sum + n[i];
    }
    return sum/n.length;
}



//calculateGrade(12, 12, 12);
//getMonthName(22);
//console.log(calculate(1,2,"*"));
//multiplosDe5(5);
//console.log(soma(3));
console.log(fatorial(2));
console.log("O valor mínimo no array : ["+ array +"] é " + m)
console.log("O valor maximo no array é : ", + m  )