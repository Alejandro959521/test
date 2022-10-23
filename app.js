// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
    
}

let dollarToEuro = function(dollarValue){
	let a =dollarValue * 0.89;
    return a;

}
var c = fromEuroToDollar ();

let euroToYen = function(euroValue){
    let b = euroValue * 124.15;
	return b;
}

const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a yenes
    let valueInYen = valueInDollar * 147.7;
    // retornamos el valor
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    // convertimos el valor a pounds
    let valueInPound = valueInYen * 0.006;
    // retornamos el valor
    return valueInPound;
}
// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar,fromDollarToYen,fromYenToPound };




