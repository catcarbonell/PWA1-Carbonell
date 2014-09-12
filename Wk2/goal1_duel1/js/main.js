/*
Name: Cathleen Carbonell
Date: 9/07/2014
Assignment: Goal1: Assignment: Duel1
 */

//self-executing function
(function(){

    console.log("FIGHT!!"); //prints out the string, "FIGHT!!"

//VARIABLES

    //player name
    var player1Name = "Nightwing";
    var player2Name = "Wolverine";

    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var player1Health = 100;
    var player2Health = 100;

   //base round
    var round = 0;


//FUNCTIONS

//fight function: executed for the purpose of taking away the player HP (Health)
function fight(){

    console.log('in the fight function');   // for troubleshooting purposes
    alert(player1Name + ":" + player1Health + " *VS* " + player2Name + ":" + player2Health); // calls an alert displaying player 1 and 2's names and their starting HP

    for (var i = 0; i < 10; i++){           //if 'i' is less than 10, add 1 to i

        //Minimum damage dealt toward each player
        var minDamage1 = player1Damage * .5;
        var minDamage2 = player2Damage * .5;

        //Random Damage equation variables -- creates the random amount of damage dealt toward the players
        var f1 =  Math.floor(Math.random() * (player1Damage - minDamage1) + minDamage1);
        var f2 =  Math.floor(Math.random() * (player2Damage - minDamage2) + minDamage2);

        //inflict damage
        player1Health -= f1;                // same as player1Health = player1Health - f1
        player2Health -= f2;

       // Hero damage vs HP display
        console.log(player1Name + ":" + player1Health + " " + player2Name + ":" + player2Health); // calls an alert displaying player 1 and 2's names and their HP w/ the damage dealt




    var results = winnerCheck();           //runs winnerCheck function
    console.log(results);

    if(results === "no winner"){        //if there is no winner, this no winner within the round, this if-else statement is run
        round++;
        alert(" ROUND "+ round + " OVER || " + player1Name + ":" + player1Health + " *VS* " +  player2Name + ":" + player2Health);
    }else{
        alert(results);
        break;
    } // end if-else statement

   }   //end for-loop

}   //end fight FN


//winnerCheck FN: executed each time after fight function is run to end or continue fight function/rounds
function winnerCheck(){
    console.log("in winnerCheck FN");

    var result = "no winner";       //Runs if both players lose the same amount of HP in the end

    if (player1Health < 1 && player2Health < 1) {
        result = "DOUBLE KO! No winner!";
    } else if(player1Health<1){     //Runs if player 1 runs out of HP first
        result = player2Name + " WINS!!!"

    } else if(player2Health<1){     //Runs if player 2 runs out of HP first
        result = player1Name + " WINS!!!"
    } //end if-else statement

   return result;

}//end winnerCheck FN

/* PROGRAM START */

console.log('program starts');     //for troubleshooting purposes when checking code in browser console

fight();

})(); //end of self-executing FN