/*
In diesem etwas umfangreicheren Projekt schreiben wir eine Einkommensteuer-Berechnungs-App.
Wir werden die Daten von https://www.finanz-tools.de/einkommensteuer/berechnung-formeln/2021 verwenden.

Erst definieren wir die “zu versteuerndes Einkommen” (zvE) Formel.

Das Design ist frei!

Nach der Berechnung des zVE gibt es 5 Fälle die eintreten können (abhängig vom Jahreseinkommen). Erstelle eine WebSite, mit der wir die Einkommensteuer berechnen können. Nutze dazu die Links als Referenz.
Wir sollten eine Möglichkeit haben, das Jahr zu wählen, das wir berechnen wollen.


2021: https://www.finanz-tools.de/einkommensteuer/berechnung-formeln/2021
2020: https://www.finanz-tools.de/einkommensteuer/berechnung-formeln/2020
2019: https://www.finanz-tools.de/einkommensteuer/berechnung-formeln/2019
*/

let obj = { input: 0, year: 0, married: false, est: 0, res: 0 };
let calcObj = { yA: 0, estA: 0, estB: 0, estC: 0, }

function switchMarried() {

    if (readInput().married) {
        document.getElementById("incomeYear2Container").style.display = "flex";
    } else {
        document.getElementById("incomeYear2Container").style.display = "none";
    }
}

function readInput() {
    obj.input = Number(document.getElementById("incomeYear").value);
    obj.year = document.getElementById("taxYear").value;

    if (document.getElementById("marriedYes").checked) {
        obj.married = true;
    } else if(document.getElementById("marriedNo").checked){
        obj.married = false;
    }
    return obj;
}

function writeOutput() {
    document.getElementById("bruttoRes").innerHTML = obj.input.toFixed(2) + " €";
    document.getElementById("estRes").innerHTML = obj.est.toFixed(2) + " €";
    document.getElementById("nettoRes").innerHTML = obj.res.toFixed(2) + " €";
}

function calcSplitting() {
    if (obj.married) {
        res = (obj.input + Number(document.getElementById("incomeYear2").value)) / 2;
    } else {
        res = obj.input;
    }

    return res;
}

function calc() {
    let res;

    switch (obj.year) {
        case "2021":
            if (obj.input < 9745) {
                obj.res = obj.input;
                res = 0;
            } else if (obj.input > 9744 && obj.input < 14754) {
                calcObj.y = 9744;
                calcObj.estA = 995.21;
                res = case2();
            } else if (obj.input > 14753 && obj.input < 57919) {
                calcObj.y = 14753;
                calcObj.estA = 208.21;
                calcObj.estB = 950.96;
                res = case3();
            } else if (obj.input > 57918 && obj.input < 274613) {
                res = .45 * obj.input - 9136.63;
            } else if (obj.input > 274612) {
                res = .45 * obj.input - 17374.99;
            }
            break;
        case "2020":
            if (obj.input < 9409) {
                obj.res = obj.input;
                res = 0;
            } else if (obj.input > 9408 && obj.input < 14533) {
                calcObj.y = 9408;
                calcObj.estA = 972.87;
                res = case2();
            } else if (obj.input > 14532 && obj.input < 57050) {
                calcObj.y = 14532;
                calcObj.estA = 212.02;
                calcObj.estB = 972.87;
                res = case3();
            } else if (obj.input > 27051 && obj.input < 270501) {
                res = .45 * obj.input - 8963.74;
            } else if (obj.input > 270500) {
                res = .45 * obj.input - 17078.74;
            }
            break;
        case "2019":
            if (obj.input < 9169) {
                obj.res = obj.input;
                res = 0;
            } else if (obj.input > 9168 && obj.input < 14255) {
                calcObj.y = 9168;
                calcObj.estA = 980.14;
                res = case2();
            } else if (obj.input > 14254 && obj.input < 55961) {
                calcObj.y = 14254;
                calcObj.estA = 216.16;
                calcObj.estB = 965.58;
                res = case3();
            } else if (obj.input > 55960 && obj.input < 265326) {
                res = .45 * obj.input - 8780.90;
            } else if (obj.input > 265326) {
                res = .45 * obj.input - 16740.68;
            }
            break;
    }
    obj.est = res;
    obj.res = obj.input - res;
}

function case2() {
    let y = (obj.input - calcObj.yA) / 10000;
    return ((calcObj.estA * y + 1400) * y);
}

function case3() {
    let y = (obj.input - calcObj.yA) / 10000;
    return ((calcObj.estA * y + 2397) * y + calcObj.estB);
}

function calcTax() {
    obj = readInput();
    obj.input = calcSplitting();

    calc();
    writeOutput();

    document.getElementsByClassName("resultContainer")[0].style.display = "block";
}
