export function areSurroundingElementsEvenOrLarger(grid: number[][], row: number, col: number): boolean {
    let value: number = grid[row][col];

    // Above
    let coveredAbove: boolean = false;
    for (let i = row - 1; i >= 0; i--) {
        if (grid[i][col] >= value) {
            coveredAbove = true;
            break;
        }
    }

    // Below
    let coveredBelow: boolean = false;
    for (let i = row + 1; i < grid.length; i++) {
        if (grid[i][col] >= value) {
            coveredBelow = true;
            break;
        }
    }

    // Left
    let coveredLeft: boolean = false;
    for (let i = col - 1; i >= 0; i--) {
        if (grid[row][i] >= value) {
            coveredLeft = true;
            break;
        }
    }

    // Right
    let coveredRight: boolean = false;
    for (let i = col + 1; i < grid[0].length; i++) {
        if (grid[row][i] >= value) {
            coveredRight = true;
            break;
        }
    }

    return (coveredAbove && coveredBelow && coveredLeft && coveredRight);
}

