const favMovie = "avator";
let guess = prompt("guess a fav movie"); 

while((guess != favMovie) && (guess != "quit")){
    guess = prompt("wrong answer. please try again");
}
    if(guess == favMovie){
        console.log("congrats ypur answer is correct!")
    }else{
        console.log("you quit the game")
    }
