let a = 10;
while (true){
    let b = prompt("Guess a number", "Hint number is between 8 -15");
    if(b != a){
        console.log("Try again");
    }
    else {
        console.log("You guessed a right number");
        break;
    }
}



