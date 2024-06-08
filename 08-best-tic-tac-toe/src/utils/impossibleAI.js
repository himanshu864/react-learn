import { availableMoves, winCheck } from "./GameUtils";

// Heart of the algorithm : Backtracking Tree of future outcomes
// Minimize loss and Maximize Vistory!
// Calc all possible outcomes and allote them utility accordingly

// Utility = (remaining tiles + 1) * sign;
// sign : +ve for computer win, -ve for cp lose, 0 for draw
// We assume Player will move their best move, hence minimize score
// While we maximize our score.
function minMax(grid, player) {
    let moves = availableMoves(grid);
    let score = winCheck(grid);
    if (score == 1) return (moves.length + 1) * (-1); // player win
    else if (score == 0) return moves.length + 1; // computer wins
    else if (score == -1) return 0; // draw

    // set initial score = -Infinity for computer to beat it
    let bestScore = (player ? Infinity : -Infinity);

    for (const move of moves) {
        // make move
        grid[Math.floor(move / 3)][move % 3] = player;
        // Recursively call minMax and determine the score
        const currScore = minMax(grid, player ? 0 : 1);
        // backtrack
        grid[Math.floor(move / 3)][move % 3] = -1;

        // make current player choose best score for himself
        if (player) bestScore = Math.min(bestScore, currScore);
        else bestScore = Math.max(bestScore, currScore);
    }
    return bestScore;
}

// AI function to make best possible move
export default function impossibleAI(newGrid) {
    let bestMove = null;
    let bestScore = -100;
    let moves = availableMoves(newGrid);

    let grid = JSON.parse(JSON.stringify(newGrid));

    // checks which move has best score for computer
    for (const move of moves) {
        grid[Math.floor(move / 3)][move % 3] = 0;
        const score = minMax(grid, 1);
        grid[Math.floor(move / 3)][move % 3] = -1;

        if (score > bestScore) {
            bestScore = score;
            bestMove = move;
        }
    }
    return bestMove;
}
