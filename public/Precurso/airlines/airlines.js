let flights = [
    {id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false},
    {id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false},
    {id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true},
    {id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false},
    {id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false},
    {id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false},
    {id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false},
    {id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true},
    {id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true},
    {id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true},
    {id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false}
];
let wellcomeUser;

const wellcome = () => {
    do{ 
       wellcomeUser =prompt("Wellcome to our web. Write your name");
      if (wellcomeUser === null || wellcomeUser === undefined || !isNaN(wellcomeUser)){
      alert(`You must enter a valid character`);
    }else{alert(`Hello ${wellcomeUser}`);
    }
      }  while (wellcomeUser === null || wellcomeUser === undefined || !isNaN(wellcomeUser));
    };
     wellcome();

const askFlights = () =>{
    flights.forEach((flight) => {
   console.table(`Flight from ${flight.from}, ​​to: ${flight.to} costs ${flight.cost} € and ${(flight.scale === true? "has scale": "has no scale")}.`); 
  });
 };
 askFlights();

 let mediumCost = () =>{ 
    let mediumCostFlights;
   let flightsCost=0;
      
for (let i=0; i<flights.length; i++){
 flightsCost +=  flights[i].cost
}
mediumCostFlights= flightsCost/flights.length;
console.log(`- The average cost of flights is ${mediumCostFlights.toFixed(3)}`)
      };
   mediumCost();

const scaledFlights = () => {
  let numScales =0;
    const flightsScaled = [];
    const flightsWithScale = flights.filter((flight) => flight.scale === true);
      flightsWithScale.forEach((flight) => 
    flightsScaled.push(flight));
    
    for (let i=0; i<flights.length; i++)
    if (flights[i].scale ===true){
      numScales += flights[i].scale
      }else ("");
   console.log(`- There are ${numScales} flights with scale`) 
    console.log (`- Flights with scale are:`);
console.table((flightsScaled))
    };
    scaledFlights();

const lastFlights = ()=>{
    const lastFligthsFive=[];
    let lastFiveflights = flights.slice(flights.length -5);
    lastFiveflights.forEach((flight) =>{
      lastFligthsFive.push(flight.to);
    });
   console.log(`- The destinations of the last flights of the day are: 
${lastFligthsFive.toString()}`);
    };
    lastFlights();