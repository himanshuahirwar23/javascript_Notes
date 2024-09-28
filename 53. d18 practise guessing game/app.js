const max = prompt("enter the maximum number");
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");


while(true){
    if(guess == "quit"){
        console.log("You quit the game")
        break;
    }
    if(guess == random){
        console.log("you won : the random number is",random);
        break;
    }
    else if (guess<random){
        guess = prompt("hint:your guess was too small please try again!");
    }
    else {
        guess = prompt("hint:your guess was too large please try again!");
    }
}