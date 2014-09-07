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



    winnerCheck();          //runs winnerCheck function

};


//winnerCheck function: executed each time after fight function is run to end or continue fight function/rounds
function winnerCheck(){

};

/* PROGRAM START */

console.log('program');     //for troubleshooting purposes when checking code in browser

fight();

})();