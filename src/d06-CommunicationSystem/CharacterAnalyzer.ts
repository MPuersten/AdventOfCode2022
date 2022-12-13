
export function FindNumCharsBeforeStringIsUnique(input: string, windowSize: number): number {
    if (windowSize <= 1) return 1;
    
    let slidingWindow: string[] = [];

    for (let i = 0; i < windowSize; i ++) {
        slidingWindow.push(input[i]);
    }

    if (isUnique(slidingWindow)) return slidingWindow.length;

    let characterCounter = windowSize;
    for (let i = windowSize; i < input.length; i++) {
        characterCounter++;
        slidingWindow.shift();
        slidingWindow.push(input[i]);

        if (isUnique(slidingWindow)) break;
    }

    return characterCounter;
}

function isUnique(input:string[]): boolean {
    for (let i = 0; i < input.length; i++) {
        if (input.indexOf(input[i]) !== i) {
            return false;
        }
         
    }

    return true;
}