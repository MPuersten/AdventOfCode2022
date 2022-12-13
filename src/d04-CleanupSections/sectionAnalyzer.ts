export function firstRangeContainsSecond(firstRange: number[], secondRange: number[]): boolean {
    return (firstRange[0] <= secondRange[0] && firstRange[1] >= secondRange[1]);
}

export function anyOverlap(firstRange: number[], secondRange: number[]): boolean {
    return (firstRange[0] <= secondRange[1] && secondRange[0] <= firstRange[1]);
}