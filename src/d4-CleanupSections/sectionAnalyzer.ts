export function firstRangeContainsSecond(firstRange: number[], secondRange: number[]): boolean {
    return (firstRange[0] <= secondRange[0] && firstRange[1] >= secondRange[1]);
}

export function anyOverlap(firstRange: number[], secondRange: number[]): boolean {
    if (isValueInRange(firstRange[0], secondRange) ||
        isValueInRange(firstRange[1], secondRange) ||
        isValueInRange(secondRange[0], firstRange) ||
        isValueInRange(secondRange[1], firstRange)) {
            return true;
        }
    
    return false;
}

function isValueInRange(value: number, range: number[]){
    return (value >= range[0] && value <= range[1]);
}