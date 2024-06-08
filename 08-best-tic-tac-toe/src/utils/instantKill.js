export default function instantKill(grid, x) {
    for (let i = 0; i < 3; i++) {
        // Check rows
        if (grid[i][0] == x && grid[i][1] == x && grid[i][2] == -1) return (3 * i + 2);
        if (grid[i][0] == x && grid[i][2] == x && grid[i][1] == -1) return (3 * i + 1);
        if (grid[i][1] == x && grid[i][2] == x && grid[i][0] == -1) return (3 * i);
        // Check columns
        if (grid[0][i] == x && grid[1][i] == x && grid[2][i] == -1) return (6 + i);
        if (grid[0][i] == x && grid[2][i] == x && grid[1][i] == -1) return (3 + i);
        if (grid[1][i] == x && grid[2][i] == x && grid[0][i] == -1) return (i);
    }
    // Check diagonals
    if (grid[0][0] == x && grid[1][1] == x && grid[2][2] == -1) return 8;
    if (grid[0][0] == x && grid[2][2] == x && grid[1][1] == -1) return 4;
    if (grid[1][1] == x && grid[2][2] == x && grid[0][0] == -1) return 0;
    if (grid[0][2] == x && grid[1][1] == x && grid[2][0] == -1) return 6;
    if (grid[0][2] == x && grid[2][0] == x && grid[1][1] == -1) return 4;
    if (grid[1][1] == x && grid[2][0] == x && grid[0][2] == -1) return 2;
    return -1;
}
