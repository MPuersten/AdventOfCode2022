import * as fs from 'fs'
import { FindNumCharsBeforeStringIsUnique } from './CharacterAnalyzer';

let communication: string = fs.readFileSync('./assets/d6-input.txt', 'utf-8');
let numCharsBefore4Unique = FindNumCharsBeforeStringIsUnique(communication, 4);
let numCharsBefore14Unique = FindNumCharsBeforeStringIsUnique(communication, 14);

console.log("Num Chars before 4 unique: " + numCharsBefore4Unique);
console.log("Num Chars before 14 unique: " + numCharsBefore14Unique);