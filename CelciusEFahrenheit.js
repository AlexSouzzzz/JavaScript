function FparaC(F) {
    var celsius = (F - 32) * (5 / 9)
    return celsius;
}
document.write("De Fahrenheit para Celsius é",FparaC(172));

function CparaF(C) {
    var fahrenheit = ((C) + 32) * (5 / 9)
    return fahrenheit;
}
    document.write("De celsius para Fahrenheit é",CparaF(80));