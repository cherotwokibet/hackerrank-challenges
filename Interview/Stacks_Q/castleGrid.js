

function minimumMoves(grid, startX, startY, goalX, goalY) {
    // Write your code here
    if (grid[startX][startY] === 'X' || grid[goalX][goalY] === 'X') return 0;
    const queue = [];
    const startCell = {
        position: { x: startX, y: startY },
        moves: 0
    }
    queue.push(startCell);
    // HASH MAP X_Y
    const visited = {};
    visited[`${startX}_${startY}`] = true;
    // console.log(visited);

    const markCellAsVisited = (x, y, moves, parent) => {
        const cellKey = `${x}_${y}`;
        if (grid[x][y] === 'X' || visited[cellKey]) return null;
        visited[cellKey] = true;
        const newCell = {
            position: { x, y },
            moves,
            parent
        }
        queue.push(newCell);
        return newCell;
    }
    while (queue.length > 0) {
        const currentCell = queue.shift();
        if (
            currentCell.position.x === goalX &&
            currentCell.position.y === goalY
        ) {
            // console.log('ni hapa :'+currentCell.moves);
            return currentCell.moves;
        }
        const { position } = currentCell;
        const moves = currentCell.moves + 1;
        // LEFT
        for (let y = position.y - 1; y >= 0; y--) {
            if (!markCellAsVisited(position.x, y, moves, currentCell)) break;
        }
        // TOP
        for (let x = position.x - 1; x >= 0; x--) {
            if (!markCellAsVisited(x, position.y, moves, currentCell)) break;
        }
        // RIGHT
        for (let y = position.y + 1; y < grid.length; y++) {
            if (!markCellAsVisited(position.x, y, moves, currentCell)) break;
        }
        // BOTTOM
        for (let x = position.x + 1; x < grid.length; x++) {
            if (!markCellAsVisited(x, position.y, moves, currentCell)) break;
        }
    }
    // return 0;

}

//Solution 2

function minimumMoves2(grid, startRow, startCol, goalRow, goalCol) {
    // initialize a 2d matrix to track visited nodes and its parents
    const visited = Array(grid.length).fill(false).map(_ => Array(grid[0].length).fill(false).map(_ => ({visited: false, parent: null})));

    visited[startRow][startCol].visited = true;
    console.log(visited);


    const rowQueue = [startRow];
    const colQueue = [startCol];

    let moves = 0;
    let parent = null;
    while  (rowQueue.length !== 0) {
        const row = rowQueue.shift();
        const col = colQueue.shift();
        if (row === goalRow && col === goalCol) {
            parent = visited[row][col].parent;
            break;
        }
        exploreNeighbours(row, col);
    }

    console.log(visited);
    while (parent !== null) {
        console.log(parent);
        moves++;
        parent = visited[parent[0]][parent[1]].parent;
    }

    return moves;

    function exploreNeighbours(row, col) {
        // north, south, east, west directon vectors
        const dc = [0, 0, -1, +1];
        const dr = [-1, +1, 0, 0];

        for (let i = 0; i < 4; i++) {
            let cc = col;
            let rr = row;
            while (true) {
                cc += dc[i];
                rr += dr[i];

                // stop at out of bounds
                if (cc < 0 || rr < 0) break;
                if (rr > grid.length - 1 || cc > grid[0].length - 1) break;

                // stop visited or blocked cells
                if (visited[rr][cc].visited) continue;
                if (grid[rr][cc] === 'X') break;

                colQueue.push(cc);
                rowQueue.push(rr);
                visited[rr][cc].visited = true;
                visited[rr][cc].parent = [row, col]; 
            }
        }
    }
}


const x = ['.X.','.X.','...'];

console.log(minimumMoves(x,0,0,0,2));

