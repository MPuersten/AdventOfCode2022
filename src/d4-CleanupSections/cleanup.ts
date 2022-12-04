import * as fs from 'fs'

let cleanupText: string = fs.readFileSync('./assets/d4-input.txt', 'utf-8');

console.log(cleanupText);