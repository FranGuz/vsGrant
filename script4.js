var Character = {
    name : "player",
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
    name : "Grant",
    health : 10,
    generateAttackDamage :  function(){
        return(Math.floor((Math.random() * 3)+1));
    },
    win : 0,
}

var Chirp = {
    name : "Chirp",
    health : 6,
    generateAttackDamage :  function(){
        return(Math.floor((Math.random() * 2)+1));
    },
    win : 0,
}


function killCount (enemy, winCount) {
    console.log("You beat "+enemy+ " "  +winCount+" times!");
}

function playerStats() {
    username.innerText = Character.name;
    document.getElementById("health").value = Character.health;
    document.getElementById("heal").value = Character.healsRemaining;
    document.getElementById("winsgrant").value = Grant.win;
    winschirp.innerText = Chirp.win;
    }
function enemyStats() {
    namegrant.innerText = Grant.name;
    document.getElementById("healthgrant").value = Grant.health;
    namechirp.innerText = Chirp.name;
    document.getElementById("healthchirp").value = Chirp.health;
    }
var action = document.getElementById("buttons");
function start(){
    startGame();
    
}
function startGame(){
    document.getElementById("buttons").style.visibility = "visible";
    Character.name=prompt ("Hero name");
    document.getElementById("startgame").style.display = "none";
    startCombat();
}
function startCombat(action){
    playerStats();
    enemyStats();
    function gameover() {
        happen.innerText=("Gameover you beat Grant " +Grant.win+ " times and Chirp " +Chirp.win+" times.");
        document.getElementById("buttons").style.visibility = "hidden"
    }
        if (action === "attack" ){
            hit = Character.generateAttackDamage();
            damage = Grant.generateAttackDamage();
            damageChirp = Chirp.generateAttackDamage();
            hitChirp = Character.generateAttackDamage();
            Grant.health-=hit;
            Chirp.health-=hitChirp;
            Character.health-=damage;
            Character.health-=damageChirp;
            enemyStats();
            playerStats();
            happen.innerText =("Grant did " + damage + " damage! Chirp did "+ damageChirp +" damage! " + Character.name+"'s health is "+ Character.health + ". Bam! " +Character.name+" did " + hit + " damage to Grant and " +hitChirp + 
            " to Chirp! Grant's health is " + Grant.health + " and Chirp's health is "+ Chirp.health)

        }else if (action === "heal") { 
            if (Character.healsRemaining < 1 ){
                alert ("Out of healing. Please choose attack or quit")
            }
            else {
                healing=Character.heal();
                Character.health += healing;
                damage = Grant.generateAttackDamage();
                Character.health-=damage;
                damageChirp = Chirp.generateAttackDamage();
                Character.health-=damageChirp;
                playerStats();
                enemyStats();
                happen.innerText =("Grant did " + damage + " damage! Chirp did "+ damageChirp +" damage! " + Character.name+"'s health is "+ Character.health + ". "+Character.name+" healed for " + healing +"! Health is now " + Character.health)
            }
        }if (action === "quit") {
            gameover()
        }if (Character.health <= 0) {
            gameover()
        }if (Grant.health <=0) {
            Grant.win ++;
            killCount ("Grant",Grant.win);
            playerStats();
            enemyStats();
            Grant.health = 10;
        }if (Chirp.health <=0) {
            Chirp.win++;
            killCount ("Chirp",Chirp.win);
            playerStats();
            enemyStats();
            Chirp.health = 6;
        }if (Grant.win===5){
            happen.innerText=("You Win! You beat Grant " +Grant.win+ " times and Chirp " +Chirp.win+" times! Congrats!");
            document.getElementById("buttons").style.visibility = "hidden"
        }
    }
    start()