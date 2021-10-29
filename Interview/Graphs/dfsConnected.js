function maxRegion(grid) {
    const mapVisitedCells = new Map();
    let maxRegionLength = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) { // need to check only 1s
                const length = maxRegionsRecursion(i, j, grid, mapVisitedCells);
                maxRegionLength = Math.max(length, maxRegionLength);
            }
        }
    }

    return maxRegionLength;
}

function maxRegionsRecursion(i, j, grid, hash) {
    const key = '' + i + j;
    if (grid[i][j] === 1) {
        if (hash.has(key)) {
            return 0; // we used it already, ignore it
        } else {
            hash.set(key, true);
        }

        let count = 1;

        const nextI = i + 1;
        const nextJ = j + 1;
        const nextILeft = i - 1;
        const nextJLeft = j - 1;
        [nextILeft, nextI, i].forEach((val) => {
            if (val >= 0 && val < grid.length) {
                [nextJLeft, nextJ, j].forEach((valj) => {
                    if (valj >= 0 && valj < grid[0].length) {
                        if (val !== i || valj !== j) { // for [i][j] we already added 1 to count
                            count += maxRegionsRecursion(val, valj, grid, hash);
                        }
                    }
                });
            }
        });
        return count;
    } else {
        // ignore zero cells
        hash.set(key, true);
        return 0;
    }
}

//Solution 2

function maxRegion(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    
    let maxConnectedCount = 0;
    let currentConnectedCount;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            currentConnectedCount = 0;
            if (grid[i][j]) {
                dfs(i, j);
            }
            if (currentConnectedCount > maxConnectedCount) {
                maxConnectedCount = currentConnectedCount
            }
        }
    }

    function dfs(i, j) {
        grid[i][j] = 0;
        currentConnectedCount++;
        for (const [ai, aj] of adjacent(i, j)) {
            if (grid[ai][aj]) {
                dfs(ai, aj)
            }
        }
    }

    function* adjacent(i, j) {
        const directions = [
            [-1, 0], [-1,-1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1]
        ]
        for (const direction of directions) {
            const [di, dj] = direction;
            const aj = j + dj;
            const ai = i + di;
            if (grid[ai] && grid[ai][aj]) {
                yield [ai, aj]
            }
        }
    }

    return maxConnectedCount;
}


//Solution 3


function maxRegion(grid) {
    // Write your code here
    const visited = Array(grid.length)
        .fill(false)
        .map((_) => Array(grid[0].length).fill(false));

    let result = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === 1) {
                result = Math.max(traverse(row, col), result);
            } else {
                visited[row][col] = true;
            }
        }
    }
    return result;

    function traverse(row, col) {
        if (!grid[row] || !grid[row][col] || visited[row][col]) {
            return 0;
        } else {
            visited[row][col] = true;
            let depth = 0;
            const dr = [-1, +1, 0, 0, 1, -1, 1, -1];
            const dc = [0, 0, -1, +1, 1, -1, -1, 1];
            for (let i = 0; i < 8; i++) {
                let rr = row + dr[i];
                let cc = col + dc[i];
                depth += traverse(rr, cc);
            }
            return depth + 1;
        }
    }
}

