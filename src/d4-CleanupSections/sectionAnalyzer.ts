export function firstRangeContainsSecond(firstRange: number[], secondRange: number[]): boolean {
    return (firstRange[0] <= secondRange[0] && firstRange[1] >= secondRange[1]);
}

export function anyOverlap(firstRange: number[], secondRange: number[]): boolean {
    if (valueInRange(firstRange[0], secondRange)) return true;
    if (valueInRange(firstRange[1], secondRange)) return true;
    if (valueInRange(secondRange[0], firstRange)) return true;
    if (valueInRange(secondRange[1], firstRange)) return true;
    
    return false;
}

function valueInRange(value: number, range: number[]){
    return (value >= range[0] && value <= range[1]);
}