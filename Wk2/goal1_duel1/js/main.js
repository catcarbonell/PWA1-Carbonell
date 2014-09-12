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
    var Nightwing = ["Nightwing",20,100];            // Player 1 stats array: Nightwing, 20 damage points(dp), 100 health points(hp)
    var Wolverine = ["Wolverine",20,100];            // Player 2 stats array: Wolverine, 20 dp, 100 hp

    /*//player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var player1Health = 100;
    var player2Health = 100;

   //commented out the dp and hp since we're using these variables in an array
*/
   //base round
    var round = 0;                           //default round is 0, counts up as the fight progresses


//FUNCTIONS

//fight function: executed for the purpose of taking away the player HP (Health)
function fight(){

    console.log('in the fight function');   // for troubleshooting purposes
    alert(player1Name + ":" + player1Health + " *VS* " + player2Name + ":" + player2Health); // calls an alert displaying player 1 and 2's names and their starting HP

    for (var i = 0; i < 10; i++){           // if 'i' is less than 10, add 1 to i

        //Minimum damage dealt toward each player
        var minDamage1 = Nightwing[1] * .5; // utilizing the new array variable for Nightwing -- using the 1 index/dp
        var minDamage2 = Wolverine[1] * .5; // new damage dealer for Wolverine

        //Random Damage equation variables -- creates the random amount of damage dealt toward the players
        var f1 =  Math.floor(Math.random() * (Nightwing[1] - minDamage1) + minDamage1); // The equation for the random amount of total damage dealt by Nightwing
        var f2 =  Math.floor(Math.random() * (Wolverine[1] - minDamage2) + minDamage2); // The equation for the random amount of total damage dealt by Wolverine

        //inflict damage
        Nightwing[2] -= f1;                // Nightwing's hp index - the damage variables
        Wolverine[2] -= f2;                // Wolverine's hp index - the damage variables

       // Hero damage vs HP display
        console.log(Nightwing[0] + ":" + Nightwing[2] + " " + Wolverine[0] + ":" + Wolverine[2]); // calls an alert displaying player 1 and 2's names and their HP w/ the damage dealt




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