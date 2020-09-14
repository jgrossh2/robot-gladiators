var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this 
//console.log(playerName, playerAttack, playerHealth);
// Game States
// "WIN" - Player robot has defeated all enemy robots
//  * Fight all enemy robots
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
//console.log(enemyNames.length);
//  for(var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index ");
// }
// console.log(enemyNames [0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);
var enemyHealth = 50;
var enemyAttack = 12;

// this creates a function named "fight"
//Alert users that they are starting the round
var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");
// fight function statements
}
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");
//if the player chooses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    //remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyNames + "." + enemyNames + " now has " + enemyHealth + " health remaining."
    );
    //check enemy's health
    if (enemyHealth <=0) {
        window.alert(enemyNames + " has died! ");
    } else {
        window. alert(enemyNames + " still has " + enemyHealth + " health left.");
    }

    //remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
        playerName + " attacked " + enemyNames + "." + enemyNames + " now has " + enemyHealth + " health remaining."
    );
    //check enemy's health
    if (enemyHealth <=0) {
        window.alert(enemyNames + " has died! ");
    } else {
        window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }
    //remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyNames + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining."
    );
    //check player's health
    if (playerHealth <=0) {
        window.alert(playerName + " has died! ");
    } else {
        window.alert(playerName + " still has " + playerHealth + "health left.");
    }
    //if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm user wants to skip 
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + "has decided to skip this fight. Goodbye!");
    //subtract money from playerMoney for skipping
    playerMoney = playerMoney -2;
    }
    // if no (false), ask question again by running fight () again
    else{
        fight();
    }
        window.alert(playerName + " has chosen to skip the fight!");
    } else {
        window.alert("You need to pick a valid option. Try again!");
    var confirmSkip = true;
        if (confirmSkip) {
            // do something
        }
    }

    //Subtract the value of 'playAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we now that it worked.
    console.log(
        playerName + " attacked " + enemyNames + " . " + enemyNames + " now has " + enemyHealth + " health remaining."
    );
    //Subtract the value of 'emnemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;
    //Log the resulting message to the console so we know that it worked.
    console.log(
        enemyNames + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining."
    );
    //put new code under this
    console.log(
         playerName + " attacked " + enemyNames + "." + enemyNames + " now has " + enemyHealth + " health remaining."
    );
    //put new code under this
    console.log(enemyNames + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining.")
    // check player's health
    if (playerHealth <=0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + "health left.")
    }
    // check enemy's health
    if (enemyHealth <=0) {
        window.alert(enemyNames + " has died!");
    }
    else {
        window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }
    for(var i = 0; i < enemyNames.length; i++) {
        fight(enemyNames[i]);
    }