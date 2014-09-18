/*
Name: Cathleen Carbonell
Date: 9/19/2014
Assignment: Goal1: Assignment: Duel1
 */

//self-executing function
(function(){

    console.log("FIGHT!!"); //prints out the string, "FIGHT!!"

// DOM Pieces
    var Nightwing_dmg = document.querySelector("#Nightwing").querySelector("h2");     // selects the CSS Nightwing ID
    var Wolverine_dmg = document.querySelector("#Wolverine").querySelector("h2");     // selects the CSS Wolverine ID
    var roundtxt = document.querySelector("h1");                                   // selects the h1 element
    var button = document.getElementById("fight_btn");                            // selects the fight button

    button.addEventListener("click", fight(), false);

//VARIABLES
    //FIGHTER OBJECT ARRAYS:
    var fighters =[{
        name: Nightwing,    // Variable for the "Nightwing" object array, index0/index[0] name
        dp: 20,             // index0.dp
        hp: 100             // index0.hp
        },{
        name: Wolverine,    // Variable for the "Wolverine" object array, index1/index[1] name
        dp: 20,             // index1.dp
        hp: 100             // index1.hp
        }];

    var Nightwing = fighter.index0;
    var Wolverine = fighter.index1;

    /*//player name
    var Nightwing = ["Nightwing",20,100];            // Player 1 stats array: Nightwing, 20 damage points(dp), 100 health points(hp)
    var Wolverine = ["Wolverine",20,100];            // Player 2 stats array: Wolverine, 20 dp, 100 hp

    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var player1Health = 100;
    var player2Health = 100;

   //commented out the dp and hp since we're using these variables in an array
*/


   //base round
    var round = 1;                           //default round is 0, counts up as the fight progresses

//Text for round
    roundtxt.innerHTML = "Click FIGHT to START!";

//FUNCTIONS

//fight function: executed for the purpose of taking away the player HP (Health)
function fight(){

    console.log('in the fight function');   // for troubleshooting purposes
    //alert(Nightwing[0]+ ":" + Nightwing[2] + " *VS* " + Wolverine[0] + ":" + Wolverine[2]); // calls an alert displaying player 1 and 2's names and their starting HP

// alert("got here 1");
    for (var i = 0; i < 10; i++){           // if 'i' is less than 10, add 1 to i

        //Minimum damage dealt toward each player
        var minDamage1 = fighters.index0.dp * .5; // utilizing the new array variable for Nightwing -- using the 1 index/dp
        var minDamage2 = fighters.index1.dp * .5; // new damage dealer for Wolverine

        //Random Damage equation variables -- creates the random amount of damage dealt toward the players
        var f1 =  Math.floor(Math.random() * (fighters.index0.dp - minDamage1) + minDamage1); // The equation for the random amount of total damage dealt by Nightwing
        var f2 =  Math.floor(Math.random() * (fighters.index1.dp - minDamage2) + minDamage2); // The equation for the random amount of total damage dealt by Wolverine

        //inflict damage
       fighters.index0.hp -= f1;                // Nightwing's hp index - the damage variables
       fighters.index1.hp -= f2;                // Wolverine's hp index - the damage variables

       // Hero damage vs HP display
       // console.log(Nightwing[0] + ":" + Nightwing[2] + " " + Wolverine[0] + ":" + Wolverine[2]); // calls an alert displaying player 1 and 2's names and their HP w/ the damage dealt




    var results = winnerCheck();           //runs winnerCheck function
    console.log(results);                  // prints results from winnerCheck FN

    if(results === "no winner"){        //if there is no winner, this no winner within the round, this if-else statement is run
        round++;
        //alert(" ROUND "+ round + " OVER || " + Nightwing[0]+ ": " + Nightwing[2] + " *VS* " + Wolverine[0] + ": " + Wolverine[2]);
        roundtxt.innerHTML = " ROUND "+ round;
    }else{
        //alert(results);
        roundtxt.innerHTML = results;
        break;      // ends the if-else check
    } // end if-else statement

   }   //end for-loop

}   //end fight FN

//winnerCheck FN: executed each time after fight function is run to end or continue fight function/rounds
function winnerCheck(){
    console.log("in winnerCheck FN");   // for troubleshooting purposes, console.log

    var result = "no winner";       //Runs if both players lose the same amount of HP in the end

    if (Nightwing[2] < 1 && Wolverine[2] < 1) {
        result = "DOUBLE KO! No winner!";
    } else if(Nightwing[2]<1){     //Runs if Nightwing runs out of HP first
        result = Wolverine[0] + " WINS!!!"

    } else if(Wolverine[2]<1){     //Runs if Wolverine runs out of HP first
        result = Nightwing[0] + " WINS!!!"
    } //end if-else statement

   return result;   //  returns the winnerCheck result

}//end winnerCheck FN

/* PROGRAM START */

console.log('program starts');     //for troubleshooting purposes when checking code in browser console

fight(); //calls fight function

})(); //end of self-executing FN