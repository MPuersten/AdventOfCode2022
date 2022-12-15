import * as fs from 'fs'

let signalHistoryText: string[] = (fs.readFileSync('./assets/d15-input.txt', 'utf-8')).split(/\r?\n/);