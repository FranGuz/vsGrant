var name="Jimmy"

var userhp=40;
var granthp=10;
var wingrant=0;
var winchirpus=0;
var start = null;
var playing = true;
var chirpushp = 8;
var chirpusbase = 8;
var grantbase = 10;

function getDamage (target){
    return(target-Math.floor((Math.random() * 5)+1));
}

function gameover() {
    console.log("gameover you beat Grant " +wingrant+ " times and Chirpus " + winchirpus + "times.");
    playing=false;
}

function killCount (enemy, winCount) {
    console.log("You beat "+enemy+ " "  +winCount+" times!");
}

function startGame(){
    while (start =! "yes" || "no"){
        start = prompt("Do you want to play?")
        if (start === "yes") {
        name=prompt ("Character name?")
        startCombat();
        break;
        } else if (start === "no") {
        alert ("bye");
        break;
        } else {
         alert("please enter a yes or no");
        }
    }
}
function startCombat(){
    while (playing === true){
        var attack = prompt("Would you like to attack or quit?")
        if (attack === "attack" ){
            userhp = getDamage(userhp)
            granthp = getDamage(granthp)
            chirpushp = getDamage(chirpushp)
            console.log("Ouch! " + name+"'s health is "+ userhp);
            console.log("Bam! Grant's health is "+ granthp);
            console.log ("Pow! Chirpus's health is " + chirpushp)
        }else if (attack ==="quit") {
            gameover()
        } else {
            alert("Please enter 'attack' or 'quit'")
        }if (userhp <= 0) {
            gameover()
        }if (granthp <=0) {
            wingrant ++
            killCount ("Grant",wingrant)
            granthp = grantbase
        }if (chirpushp <=0) {
            winchirpus++
            killCount ("Chirpus",winchirpus)
            chirpushp = chirpusbase
        }if (wingrant===3){
            console.log("You Win!");
            playing=false;
        }
    }
}
startGame()