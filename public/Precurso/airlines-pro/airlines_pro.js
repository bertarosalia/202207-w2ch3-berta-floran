let flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];
let wellcomeUser;
let task;
let role;

const wellcome = () => {
    do {
        wellcomeUser = prompt("Wellcome to our web. Write your name");
        if (wellcomeUser === null || wellcomeUser === undefined || !isNaN(wellcomeUser)) {
            alert(`You must enter a valid character`);
        } else {
            alert(`Hello ${wellcomeUser}`);
        }
    } while (wellcomeUser === null || wellcomeUser === undefined || !isNaN(wellcomeUser));
};

const askRole = () => {
        do {
        role = prompt(`Are you an user or an admin?`)
        if (role !== null && role.toLowerCase() === "admin") {
            tasksForAdmin();
        } else if (role !== null && role.toLowerCase() === "user") {
            tasksForUser();
        }else (prompt("Thanks for your visit"));
    } while (role !== "admin" && role !== "user" && role !== null);

};

const tasksForAdmin = () => {
     do {
        task = prompt(`What do you want to do?(create flights/delete flights)`);
        if(task){task = task.toLowerCase()}
    } while (task !== null && task !== "create" && task !== "delete");
       
    if (task === null) {
        alert(`Thanks for your visit`);
    } else if (task === "create" && flights.length < 15) {
        const newFlight = {};
        newFlight.id = flights.length
        newFlight.to = prompt("where is this flight going?");
        newFlight.from = prompt("where does this flight come from?");
        newFlight.cost = +prompt("how much does this flight cost?")
        if (newFlight.cost === isNaN){
            do {alert(`You have to enter a numerical value`)
        }while (newFlight.cost === isNaN);
    }
        newFlight.scale = confirm("Does this flight have scale?(accept/cancel)");
                
        flights.push(newFlight);
        askFlights(flights);
        return tasksForAdmin()

    } else if (task === "create" && flights.length >= 15) {
        alert("The program cannot have more than 15 flights");
        return tasksForAdmin()

    } else if (task === "delete") {
        
        const id = +prompt("Write the id of the flight that do you want to delete");
        let newFlightsWithoutDeleted = flights.filter((flight) => flight.id !== id);

       flights = newFlightsWithoutDeleted;
        askFlights(flights);
    }
    anotherTask();   
};  

const askFlights = (flights) => {
    flights.forEach((flight) => {
        console.table(`Flight ${flight.id} is flight from ${flight.from}, ​to: ${flight.to} costs ${flight.cost} € and ${(flight.scale === true ? "has scale" : "has no scale")}.`);
    });
};
 
tasksForUser = () => {
    let price = +prompt("Write the maximum price of the flight you want to buy");
const priceNum =parseFloat(price);
    const pricedFlights = flights.filter(flight => flight.cost <= priceNum);
for (let i =0; i<pricedFlights.length; i++){
    console.log(`Flight ${pricedFlights[i].id} is from ${pricedFlights[i].from}, ​to: ${pricedFlights[i].to} costs ${pricedFlights[i].cost} € and ${(pricedFlights[i].scale === true ? "has scale" : "has no scale")}.`);
}
    let boughtFlight = prompt("Which flight do you want to buy? (write the id)");
   /* if (boughtFlight.id === isNaN){
        alert("You have to enter a numerical value");
    }else */if (boughtFlight.id !== pricedFlights.id){
       alert(`You have to enter a flight of the list`);
    }else if (boughtFlight.id === pricedFlights.id){
        (alert (`You have just bought ${boughtFlight}. Thanks for your purchase`));
    }else (anotherTask());
   
};

const anotherTask = () =>{
    let continueTask = prompt("do you want to do another task?(yes/no)");
    if(task){task = task.toLowerCase()};
    if (continueTask === "yes" && role === "admin"){
tasksForAdmin();
    }else if (continueTask === "yes" && role === "user"){
        tasksForUser();
    }else(alert("Thanks you for your visit, come back soon"));
};

wellcome();
askRole();









       
        

   






