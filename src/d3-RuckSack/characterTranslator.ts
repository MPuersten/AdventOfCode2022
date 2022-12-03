export function getCharacterPriority(character: string): number {
    let minPriority = 1;
    let maxPriority = 52;
    
    let priority: number;
    
    console.log(character);
    if (isUppercase(character)) {
        return 1;
    }
    else /*lowercase*/ {
        return 0;
    }

    if (priority < minPriority || priority > maxPriority) {
        throw Error("Invalid character (${priority}), must be 1-52");
    }

    return priority;
}

function isUppercase(character: string): boolean {
    return (character == character.toUpperCase());
}

