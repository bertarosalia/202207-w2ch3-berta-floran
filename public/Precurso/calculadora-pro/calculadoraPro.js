    let newNumber; 
    const numberList=[];
    let resultSum;
    let resultRest;
    let resultMult;
    let resultDiv;
        
    function  calculadoraPro(){ 
      
    do { 
      newNumber = prompt("Ingrese un número o presione cancelar para detener"); 
      const newNumber1= parseFloat(newNumber);

      if (Number.isNaN(newNumber1) && newNumber !== null){
        alert("Valor no válido. Introduce un número")
        
       } else if (newNumber !== null){  
        numberList.push(newNumber1)
      }
       } while  (newNumber !== null);

       resultSum = [numberList[0]];
       resultRest= [numberList[0]];
       resultMult= [numberList[0]];
       resultDiv= [numberList [0]];
      
      if(numberList.length === 1){
        const raizCuadrada = Math.sqrt(parseFloat(numberList)).toFixed(3);
        console.log (`La raíz cuadrada de ${numberList}es ${raizCuadrada}`)
            
      } else {

        for (let i=1;i<numberList.length; i++){
        
          resultSum += numberList[i];
          resultRest -= numberList[i];
          resultMult *= numberList[i];
          resultDiv /= numberList[i];
               
        } 
        console.log (
          `El resultado de la suma es ${resultSum}
          El resultado de la resta es ${resultRest}
          El resultado de la multiplicación es ${resultMult}
          El resultado de la división es ${resultDiv}`);
      
      }  
    }  
  
  calculadoraPro();

  function newOperations(){

let moreNumbers = confirm ("¿Desea realizar más operaciones?");
 
        switch (moreNumbers){
        case true: calculadoraPro();
        break;
        case false: 
        alert("Hasta otra!")
        break
        default

        }   
  }
  newOperations();
  
 