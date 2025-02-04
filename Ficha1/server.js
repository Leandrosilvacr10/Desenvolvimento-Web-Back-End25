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

calculateGrade(12, 12, 12);
//getMonthName(22);