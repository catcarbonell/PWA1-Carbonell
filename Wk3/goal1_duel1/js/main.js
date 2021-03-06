/*
Name: Cathleen Carbonell
Date: 9/19/2014
Assignment: Goal1: Assignment: Duel1
 */

//self-executing function
(function(){

    console.log("FIGHT!!"); //prints out the string, "FIGHT!!"

// DOM Pieces
    var champ1hp = document.querySelector("#champ1").querySelector("h2");     // DOM selector for champ1 HP, HTML reference div id = champ1, <h2>
    var champ2hp = document.querySelector("#champ2").querySelector("h2");     // DOM selector for champ2 HP
    var champ1name = document.querySelector("#champ1").querySelector("#champ1name");    // DOM selector for champ1 name
    var champ2name = document.querySelector("#champ2").querySelector("#champ2name");    // DOM selector for champ2 name
    var action_btn = document.querySelector("#fight_btn").querySelector("#action_btn"); // DOM selector for the END of FIGHT button
    var roundtxt = document.querySelector("h1");                                   // DOM selector for the round changer
    var button = document.getElementById("fight_btn");                            // DOM selector for initial FIGHT button
    var action_btnEvent = document.getElementById("action_btn");                // DOM selector for the END of FIGHT button

    button.addEventListener("click", fight, false);             //  Action event for the FIGHT button

//VARIABLES
    //FIGHTER OBJECT ARRAYS:
    var fighters =[{
        name: "Nightwing",    // Variable for the "Nightwing" object array, index0 or index[0] name
        dp: 20,             // index0.dp
        hp: 100             // index0.hp
        },{
        name: "Wolverine",    // Variable for the "Wolverine" object array, index1 or index[1] name
        dp: 20,             // index1.dp
        hp: 100             // index1.hp
        }];

// Re-defining variables for the fighters for future ease of reference
    var champ1 = fighters[0];   // Champ1 object
    var champ2 = fighters[1];   // Champ 2 object


console.log(champ1.name , champ2.name); // test print if champ1 and champ2 variables are working

    /*//player name -- commented out with the new DOM interactions
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
    var round = 0;                           //default round is 0, counts up as the fight progresses

//Text for round
    roundtxt.innerHTML = "Click FIGHT to START!";       // Initial middle text when starting the app
    champ1name.innerHTML = champ1.name;                 // Prints champ1's name on the page
    champ2name.innerHTML = champ2.name;                 // Prints champ2's name on the page
    champ1hp.innerHTML = champ1.hp;                     // Prints champ1's hp on the page
    champ2hp.innerHTML = champ2.hp;                     // Prints champ2's hp on the page

//FUNCTIONS
function dmgPrint(){
    champ1hp.innerHTML = champ1.hp;                     // Prints champ1 damage onto the web page app after clicking FIGHT btn
    champ2hp.innerHTML = champ2.hp;                     // Prints champ2 damage onto the web page app after clicking FIGHT btn
}

function fightReset(){                                  // Resets the app after the user is finished
    location.reload(true);                              // reloads the page
}

//fight function: executed for the purpose of taking away the player HP (Health)
function fight(){

    console.log('in the fight function');   // for troubleshooting purposes
    //alert(Nightwing[0]+ ":" + Nightwing[2] + " *VS* " + Wolverine[0] + ":" + Wolverine[2]); // calls an alert displaying player 1 and 2's names and their starting HP


    for (var i = 0; i < 10; i++){           // if 'i' is less than 10, add 1 to i

        //Minimum damage dealt toward each player
        var minDamage1 = champ1.dp * .5; // utilizing the new array variable for Nightwing -- using the 1 index/dp
        var minDamage2 = champ2.dp * .5; // new damage dealer for Wolverine

        //Random Damage equation variables -- creates the random amount of damage dealt toward the players
        var f1 =  Math.floor(Math.random() * (champ1.dp - minDamage1) + minDamage1); // The equation for the random amount of total damage dealt by Champ1
        var f2 =  Math.floor(Math.random() * (champ2.dp - minDamage2) + minDamage2); // The equation for the random amount of total damage dealt by Champ2

        //inflict damage
       champ1.hp -= f1;                // Champ1's hp index - the damage variables
       champ2.hp -= f2;                // Champ2's hp index - the damage variables

        console.log(round, f1, f2);

       // Hero damage vs HP display
       // console.log(Nightwing[0] + ":" + Nightwing[2] + " " + Wolverine[0] + ":" + Wolverine[2]); // calls an alert displaying player 1 and 2's names and their HP w/ the damage dealt

    var results = winnerCheck();           //runs winnerCheck function
    console.log(results);                  // prints results from winnerCheck FN

    if(results === "no winner"){        //if there is no winner, this no winner within the round, this if-else statement is run
        round++;
        //alert(" ROUND "+ round + " OVER || " + Nightwing[0]+ ": " + Nightwing[2] + " *VS* " + Wolverine[0] + ": " + Wolverine[2]);
        roundtxt.innerHTML = " ROUND "+ round + "<br><br>";     // Changes the round as the user clicks the FIGHT! button
        dmgPrint();
        // Calls the dmgPrint function
        break;
    }else{
        //alert(results);
        roundtxt.innerHTML = results;
        button.removeEventListener("click", fight, false);
        dmgPrint();
        action_btn.innerHTML = "RESET";
        action_btnEvent.addEventListener("click", fightReset, false);

        break;      // ends the if-else check
    } // end if-else statement

   }   //end for-loop

}   //end fight FN

//winnerCheck FN: executed each time after fight function is run to end or continue fight function/rounds
function winnerCheck(){
    console.log("in winnerCheck FN");   // for troubleshooting purposes, console.log

    var result = "no winner";       //Runs if both players lose the same amount of HP in the end

    if (champ1.hp < 1 && champ2.hp < 1) {
        result = "DOUBLE KO! No winner!";
    } else if(champ1.hp<1){     //Runs if champ1 runs out of HP first
        result = champ2.name + " WINS!!!"
    } else if(champ2.hp<1){     //Runs if champ2 runs out of HP first
        result = champ1.name + " WINS!!!"
    } //end if-else statement

   return result;   //  returns the winnerCheck result

}//end winnerCheck FN

/* PROGRAM START */

console.log('program starts');     //for troubleshooting purposes when checking code in browser console

//fight(); //calls fight function

})(); //end of self-executing FN