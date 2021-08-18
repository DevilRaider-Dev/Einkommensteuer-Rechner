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

function readInput(){
    let input = document.getElementById("incomeYear").value;
    let year = document.getElementById("taxYear").value;
    let married = false;
    if(document.getElementById("marriedYes").checked){

    }
    console.log(input + " " + year)
}

function calcTax(){
    document.getElementsByClassName("resultContainer")[0].style.display = "block"
    readInput();
}
