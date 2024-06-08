export const initialGrid = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
];

export const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

export function availableMoves(grid) {
    return grid.flat().filter(cell => cell == -1).length;
}

export function winCheck(grid) {
    if (availableMoves(grid) == 0) return -1; // draw
    for (const line of combinations) {
        if (line.every((i) => grid[Math.floor(i / 3)][i % 3] === 1)) return 1; // Player wins
        if (line.every((i) => grid[Math.floor(i / 3)][i % 3] === 0)) return 0; // Computer wins
    }
    return 2; // nothing
}
