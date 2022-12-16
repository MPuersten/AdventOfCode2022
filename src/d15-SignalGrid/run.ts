import * as fs from 'fs'

// let signalHistoryText: string[] = (fs.readFileSync('./assets/d15/d15-sample-1.txt', 'utf-8')).split(/\r?\n/);
// let signalHistoryText: string[] = (fs.readFileSync('./assets/d15/d15-sample.txt', 'utf-8')).split(/\r?\n/);
let signalHistoryText: string[] = (fs.readFileSync('./assets/d15-input.txt', 'utf-8')).split(/\r?\n/);