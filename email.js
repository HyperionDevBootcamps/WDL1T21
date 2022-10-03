//An SMS Simulation

let userChoice = "";

while (userChoice != "quit") {
    userChoice = prompt("What would you like to do - read/mark spam/send/quit?");
    if (userChoice == "read") {
        //pass - Place your logic here
    } else if (userChoice == "mark spam") {
        //pass - Place your logic here
    } else if (userChoice == "send") {
        //pass - Place your logic here
    } else if (userChoice == "quit") {
        console.log("Goodbye");
    } else {
        console.log("Oops - incorrect input");
    }
}