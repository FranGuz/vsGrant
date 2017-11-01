
var start = null;
var playing = true;


function getDamage (){
    return(Math.floor((Math.random() * 3)+1));
}


function killCount (enemy, winCount) {
    console.log("You beat "+enemy+ " "  +winCount+" times!");
}

function startGame(){
    while (start =! "yes" || "no"){
        start = prompt("Do you want to play?")
        if (start === "yes") {
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
    var Character = {
        name : prompt ("Hero name"),
        health : 40, 
        healsRemaining : 2,
        generateAttackDamage : function(){
            return(Math.floor((Math.random() * 6)+1));
        },
        heal: function (){
            this.healsRemaining--;
            return(Math.floor((Math.random() * (15-6))+6));
        }
    }
    
    var Grant = {
        health : 10,
        generateAttackDamage :  function(){
            return(Math.floor((Math.random() * 3)+1));
        },
        win : 0,
    }

    var Chirp = {
        health : 6,
        generateAttackDamage :  function(){
            return(Math.floor((Math.random() * 2)+1));
        },
        win : 0,
    }
    function gameover() {
        console.log("Gameover you beat Grant " +Grant.win+ " times and Chirp" +Chirp.win+"times.");
        playing=false;
    }
    while (playing === true){
        var attack = prompt("Would you like to attack, heal, quit?")
        if (attack === "attack" ){
            hit = Character.generateAttackDamage();
            damage = Grant.generateAttackDamage();
            damageChirp = Chirp.generateAttackDamage();
            hitChirp = Character.generateAttackDamage();
            Grant.health-=hit;
            Chirp.health-=hitChirp;
            console.log("Bam! " +Character.name+" did " + hit + " damage to Grant and " +hitChirp + 
            " to Chirp! Grant's health is " + Grant.health + " and Chirp's health is "+ Chirp.health);
            Character.health-=damage;
            console.log("Ouch! Grant did " + damage + " damage! "+ Character.name+"'s health is "+ Character.health);
            Character.health-=damageChirp;
            console.log("Ouch! Chirp did " + damageChirp + " damage! "+ Character.name+"'s health is "+ Character.health);
        }else if (attack === "heal") { 
            if (Character.healsRemaining < 1 ){
                alert ("Out of healing. Please choose attack or quit")
            }
            else {
                healing=Character.heal();
                Character.health += healing;
                console.log(Character.name+" healed for " + healing +"! Health is now " + Character.health);
                damage = Grant.generateAttackDamage();
                Character.health-=damage;
                console.log("Ouch! Grant did " + damage + " damage! "+ Character.name+"'s health is "+ Character.health);
                damageChirp = Chirp.generateAttackDamage();
                Character.health-=damageChirp;
                console.log("Ouch! Chirp did " + damageChirp + " damage! "+ Character.name+"'s health is "+ Character.health);
            }
        }else if (attack === "quit") {
            gameover()
        } else {
            alert("Please enter 'attack' 'heal' or 'quit'")
        }if (Character.health <= 0) {
            gameover()
        }if (Grant.health <=0) {
            Grant.win ++
            killCount ("Grant",Grant.win)
            Grant.health = 10
        }if (Chirp.health <=0) {
            Chirp.win++
            killCount ("Chirp",Chirp.win)
            Chirp.health = 6
        }if (Grant.win===5){
            console.log("You Win! You beat Grant " +Grant.win+ " times and Chirp " +Chirp.win+" times! Congrats!");
            playing=false;
        }
    }
}
startGame()