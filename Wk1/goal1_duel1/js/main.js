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
    var player1Name = "Wolverine";
    var player2Name = "Nightwing";

    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var player1Health = 100;
    var player2Health = 100;

   //base round
    var round = 1;


//FUNCTIONS

//fight function: executed for the purpose of taking away the player HP (Health)
function fight(){

    console.log('in the fight function');   // for troubleshooting purposes
    alert(player1Name + ":" + player1Health + " *VS* " + player2Name + ":" + player2Health); // calls an alert displaying player 1 and 2's names and their starting HP



    for (var i = 0; i < 10; i++){           //if 'i' is less than 10, add 1 to i
        console.log(i);

    }


    //winnerCheck();                         //runs winnerCheck function

}


//winnerCheck function: executed each time after fight function is run to end or continue fight function/rounds
function winnerCheck(){

}

/* PROGRAM START */

console.log('program starts');     //for troubleshooting purposes when checking code in browser

fight();

})();