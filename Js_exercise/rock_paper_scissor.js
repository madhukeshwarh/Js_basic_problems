const prompt=require('prompt-sync')();
function play() {
    const player1Selection = prompt("player1").toLowerCase();
    const player2Selection = prompt("player2").toLowerCase();

    if (!isValidSelection(player1Selection) || !isValidSelection(player2Selection)) {
        console.log("Invalid selection. Please enter rock, paper, or scissors.");
        return;
    }

    let result;
    if (player1Selection === player2Selection) {
        result = "It's a tie!";
    } else if (
        (player1Selection === 'rock' && player2Selection === 'scissors') ||
        (player1Selection === 'paper' && player2Selection === 'rock') ||
        (player1Selection === 'scissors' && player2Selection === 'paper')
    ) {
        result = "Player 1 wins! " + player1Selection + " beats " + player2Selection;
    } else {
        result = "Player 2 wins! " + player2Selection + " beats " + player1Selection;
    }

   console.log(result)
}

function isValidSelection(selection) {
    return ['rock', 'paper', 'scissors'].includes(selection);
}
console.log(play())