function computerPlay(){
    //returns a random number between 0 and 2
    rnd = Math.floor(Math.random()*3);
    var selection;
    console.log(rnd);
    //if else to assign rock paper or scissors to the computer
    if(rnd="0"){
        //set selection as rock
        selection = "rock";
        //logging for testing purposes
        return selection;
    }
    if(rnd="1"){
        //set selection as paper
        selection = "paper";
        //logging for testing purposes
        //console.log(selection);
        return selection;
    }
    if(rnd="2"){
        //set selection as scissors
        selection = "scissors";
        //logging for testing purposes
        //console.log(selection);
       return selection;
    }
}

function playerSelection(){
    var userSelection = prompt("Choose rock paper or scissors");
    userSelection.toLowerCase();
    return userSelection
}

function play(){
    var playersChoice = playerSelection();
    console.log(playersChoice);
    var computerChoice = computerPlay();
    console.log(computerChoice);
    var result;

    if(playersChoice == "rock"){
        switch(computerChoice){
            case "rock":
                result = "tie you chose rock and computer chose rock";
                break;
            case "paper":
                result = "you loose you chose rock and computer chose paper";
                break;
            case "scissors":
                result = "you win you chose rock and computer chose scissors";
                break;
        }
    }
    
    if(playersChoice == "paper"){
        switch(computerChoice){
            case "rock":
                result = "you win you chose paper and computer chose rock";
                break;
            case "paper":
                result = "tie you chose paper and computer chose paper";
                break;
            case "scissors":
                result = "you loose you chose paper and computer chose scissors";
                break;
        }
    }

    if(playersChoice == "scissors"){
        switch(computerChoice){
            case "rock":
                result = "you loose you chose scissors and computer chose rock ";
                break;
            case "paper":
                result = "you win you chose scissors and computer chose paper";
                break;
            case "scissors":
                result = "tie you chose scissors and computer chose scissors";
                break;
        }
    }
    document.getElementById("result").innerHTML = result;
}