export default function randomAI(grid) {
    let ok = [];
    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
            if (grid[i][j] == -1)
                ok.push(3 * i + j);

    let x = Math.floor(Math.random() * ok.length);
    return ok[x];
}
