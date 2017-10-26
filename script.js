var name="Jimmy"

var userhp=40
var granthp=10
var win=0
var playing = null

playing = prompt("Do you want to play?")
    if (playing = "yes");{
        name=prompt ("Character name?")
        playing = true;
    }

while (playing === true){
        userhp -= Math.floor((Math.random() * 2)+1);
        granthp -= Math.floor((Math.random() * 2)+1);
        console.log(name+" 's health is "+ userhp);
        console.log("Grant's health is "+ granthp);
        if (userhp <= 0) {
            console.log("gameover you won "+win +" times");
            playing=false;
        }
        if (granthp <=0) {
            win += 1;
            granthp = 10;
            console.log("you have won "+ win +" times")
        }
        if (win===3){
            console.log("You Win!");
            playing=false;
        }
}