// Create a 3x3 board using an array of 9 spots (0 to 8)
const prompt = require('prompt sync')();
let board = new Array(9);
for (let index = 0; index < 9; index++) {
    board[index] = ' ';
}

let current_player = 'X';
let move_count = 0;

while (true) {
    // Print the board in a nice 3x3 grid
    console.log(` ${board[0]} | ${board[1]} | ${board[2]} `);
    console.log('---+---+---');
    console.log(` ${board[3]} | ${board[4]} | ${board[5]} `);
    console.log('---+---+---');
    console.log(` ${board[6]} | ${board[7]} | ${board[8]} `);

    console.log(`Player ${current_player}, it's your turn!`);
    // Note: For simplicity, assume input is handled via prompt (synchronous input)
    let move = prompt("Pick a spot (1-9): ");

    // Convert the input to a number and adjust for 0-based indexing
    let move_index;
    try {
        move_index = 0;
        for (let index = 0; index < move.length; index++) {
            move_index = move_index * 10 + (move.charCodeAt(index) - 48);
        }
        move_index = move_index - 1;
    } catch (e) {
        console.log("Hey, pick a number between 1 and 9!");
        continue;
    }

    if (move_index < 0 || move_index > 8) {
        console.log("That spot doesn't exist! Choose 1 to 9.");
        continue;
    }
    if (board[move_index] !== ' ') {
        console.log("That spot's taken! Try another.");
        continue;
    }

    board[move_index] = current_player;
    move_count++;

    // Rows: 0-1-2, 3-4-5, 6-7-8
    if ((board[0] === current_player && board[1] === current_player && board[2] === current_player) ||
        (board[3] === current_player && board[4] === current_player && board[5] === current_player) ||
        (board[6] === current_player && board[7] === current_player && board[8] === current_player) ||
        // Columns: 0-3-6, 1-4-7, 2-5-8
        (board[0] === current_player && board[3] === current_player && board[6] === current_player) ||
        (board[1] === current_player && board[4] === current_player && board[7] === current_player) ||
        (board[2] === current_player && board[5] === current_player && board[8] === current_player) ||
        // Diagonals: 0-4-8, 2-4-6
        (board[0] === current_player && board[4] === current_player && board[8] === current_player) ||
        (board[2] === current_player && board[4] === current_player && board[6] === current_player)) {
        // Print the final board
        console.log(` ${board[0]} | ${board[1]} | ${board[2]} `);
        console.log('---+---+---');
        console.log(` ${board[3]} | ${board[4]} | ${board[5]} `);
        console.log('---+---+---');
        console.log(` ${board[6]} | ${board[7]} | ${board[8]} `);
        console.log(`Player ${current_player} wins! Nice one!`);
        break;
    }

    // Check for a draw
    if (move_count === 9) {
        console.log(` ${board[0]} | ${board[1]} | ${board[2]} `);
        console.log('---+---+---');
        console.log(` ${board[3]} | ${board[4]} | ${board[5]} `);
        console.log('---+---+---');
        console.log(` ${board[6]} | ${board[7]} | ${board[8]} `);
        console.log("It's a tie! Good game!");
        break;
    }

    if (current_player === 'X') {
        current_player = 'O';
    } else {
        current_player = 'X';
    }
}