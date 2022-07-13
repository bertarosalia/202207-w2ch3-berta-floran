const askNumber1 =prompt("Introduce la primera cifra");
let number1= parseFloat(askNumber1);
const askNumber2 =prompt("Introduce la segunda cifra");
let number2= parseFloat(askNumber2);

 let resultSum;
 let resultRest;
 let resultMult;
 let resultDiv;
 
let results= [];

if (isNaN(number1) || isNaN(number2) && askNumber2 !== null){
    alert("Vuelva a introducir un valor numérico");
}
else if (number1 >0 && askNumber2 === null){
    let raizCuadrada = parseFloat(Math.sqrt(number1)).toFixed(3);
    console.log (`La raíz cuadrada de ${number1}es ${raizCuadrada}`);

}else{
    resultSum = number1 + number2;
    resultRest = number1 - number2;
    resultMult = number1 * number2;
    resultDiv= number1 / number2;
    results.push(resultSum,resultRest,resultMult,resultDiv);
 };

 if(Number.isInteger(resultSum)){
    results.push(resultSum);
}else{
    results.push(resultSum.toFixed(3));
};

if(Number.isInteger(resultRest)){
    results.push(resultRest);
}else{
    results.push(resultRest.toFixed(3));
};

if(Number.isInteger(resultMult)){
    results.push(resultMult);
}else{
    results.push(resultMult.toFixed(3));
};

if(Number.isInteger(resultDiv)){
    results.push(resultDiv);
}else{
    results.push(resultDiv.toFixed(3));
};

 console.log(`El resultado de la suma es ${resultSum}, el resultado de la resta es ${resultRest} , el resultado de la multiplicación es ${resultMult}, el resultado de la división es ${resultDiv}.`);

 