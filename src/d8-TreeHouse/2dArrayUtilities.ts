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

export function getScenicScore(grid: number[][], row: number, col: number): number {
    let value: number = grid[row][col];

    // Above
    let aboveDistance: number = 0;
    for (let i = row - 1; i >= 0; i--) {
        if (grid[i][col] >= value) {
            aboveDistance++;
            break;
        }
        else {
            aboveDistance++;
        }
    }

    // Below
    let belowDistance: number = 0;
    for (let i = row + 1; i < grid.length; i++) {
        if (grid[i][col] >= value) {
            belowDistance++;
            break;
        }
        else {
            belowDistance++;
        }
    }

    // Left
    let leftDistance: number = 0;
    for (let i = col - 1; i >= 0; i--) {
        if (grid[row][i] >= value) {
            leftDistance++;
            break;
        }
        else {
            leftDistance++;
        }
    }

    // Right
    let rightDistance: number = 0;
    for (let i = col + 1; i < grid[0].length; i++) {
        if (grid[row][i] >= value) {
            rightDistance++;
            break;
        }
        else {
            rightDistance++;
        }
    }

    return (aboveDistance * belowDistance * leftDistance * rightDistance);
}