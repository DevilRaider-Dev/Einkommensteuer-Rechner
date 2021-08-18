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

let obj = { input: 0, year: 0, married: false, split: 0, est: 0, res: 0 };

function switchMarried() {

    if (readInput().married) {
        document.getElementById("incomeYear2Container").style.display = "flex";
    } else {
        document.getElementById("incomeYear2Container").style.display = "none";
    }
}

function readInput() {

    let input = Number(document.getElementById("incomeYear").value);
    let year = document.getElementById("taxYear").value;
    let married = false;

    if (document.getElementById("marriedYes").checked) {
        married = true;
    }

    obj.input = input;
    obj.year = year
    obj.married = married;

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

function calcTax() {

    obj = readInput();
    obj.split = calcSplitting();

    if (obj.input < 9745) {
        obj.res = obj.input;
        writeOutput();
    } else if(o9744) {

    }

    console.log(obj);

    document.getElementsByClassName("resultContainer")[0].style.display = "block";
}
