export function getCharacterPriority(character: string): number {
    let minPriority = 1;
    let maxPriority = 52;
    
    let priority: number;
    
    priority = character.charCodeAt(0);

    if (isUppercase(character)) {
        let upperCaseShift: number = 38;
        priority -= upperCaseShift;
    }
    else /*lowercase*/ {
        let lowerCaseShift: number = 96;
        priority -= lowerCaseShift;
    }

    if (priority < minPriority || priority > maxPriority) {
        throw Error("Invalid character (${priority}), must be 1-52");
    }

    return priority;
}

function isUppercase(character: string): boolean {
    return (character == character.toUpperCase());
}

