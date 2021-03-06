//You can also log multiple values at once like this 
//console.log(playerName, playerAttack, playerHealth);
// Game States
// "WIN" - Player robot has defeated all enemy robots
//  * Fight all enemy robots
//"LOSE" - Player robot's health is zero or less

var fightOrSkip = function(){
    //ask user if they'd like to fight or skip using function
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    // Conditional recursive function call
    if (!promptFight) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    //if user picks "skip" confirm and then stop the loop
    promptFight = promptFight.toLowerCase();

    if (promptFight === "skip") {
        //confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping 
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            // shop();
            //return true is user wants to leave
            return true;
        }
    }
};
var fight = function(enemy) {
    //keep track of who goes first
    var isPlayerTurn = true;
    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }
    while (enemyHealth > 0 && playerInfo.health > 0) {
        if (isPlayerTurn) {
        if (fightOrSkip()) {
            //if true, leave fight by breaking loop
            break;
        }
        // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemyHealth = Math.max(0, enemyHealth - damage);
        console.log(
            playerInfo.name +
            " attacked " +
            enemy.name + 
            ". " +
            enemy.name +
            " now has " +
            enemyHealth +
            " health remaining."
        );

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemy.name + " has died! ");

            //award player money for winning
            playerInfo.money = playerInfo.money + 20;
            break;
        } else {
            window.alert(enemy.name + " still has " + enemyHealth + " health left.");
        }
        //player gets attacked first
        } else {
        var damage = randomNumber(enemy.attack-3, enemy.attack)
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
            enemy.name +
            " attacked " +
            playerInfo.name +
            ". " + 
            playerInfo.name +
            " now has " +
            playerInfo.health + 
            " health remaining."
        );

        //check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died! ");
            //leave while () loop if player is dead
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + "health left.");
        }
        }
        //switch turn order for next round
        isPlayerTurn = !isPlayerTurn;
    }
};
//function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min );

    return value;
};

//function to start a new game
var startGame = function () {
    // reset player stats
    playerInfo.reset();
    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Battlebots! Round " + (i + 1));

            var pickedEnemyObj = enemyInfo[i];

            enemyHealth = Math.floor(Math.random() *21) + 40;

            fight(pickedEnemyObj);
        
        //if player is still alive and we're not at the last enemy in the array
        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
            
            //if yes, take them to the store() function
            if (storeConfirm) {
            shop();
            }
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }

    };
    endGame()
}
//function to end the entire game
var endGame = function () {
    //if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
    // endGame();
};
var shop = function () {
    //ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, LEAVE the store? Please enter 1 for REFILL, 2 for UPGRADE,or 3 for LEAVE." 
    );
    //use switch to carry out action
    shopOptionPrompt = parseInt(shopOptionPrompt);
    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;
        case 2:
            playerInfo.upgradeAttack();
            break;
        case 3:
            window.alert("Leaving the store.");

            // do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};
//function to set name
var getPlayerName = function() {
    var name = "";
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }
    console.log("Your robot's name is " + name);
    return name;
};

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    }, // comma!
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }, //comma!
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
     },
     {
         name: "Amy Android",
         attack: randomNumber(10, 14)
     },
     {
         name: "Robo Trumble",
         attack: randomNumber(10, 14)
     }
    ];
var enemyHealth = 50;
var enemyAttack = 12;

//start the game when the page loads
startGame(pickedEnemyObj = randomNumber(40, 60));


