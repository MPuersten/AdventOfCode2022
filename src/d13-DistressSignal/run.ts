import * as fs from 'fs'

let signalPairText: string[] = (fs.readFileSync('./assets/d13/d13-sample.txt', 'utf-8')).split(/\r?\n/);
// let signalPairText: string[] = (fs.readFileSync('./assets/d12-input.txt', 'utf-8')).split(/\r?\n/);

for (let i = 0; i < signalPairText.length; i += 3) {
    let left: any[] = JSON.parse(signalPairText[i]);
    let right: any[] = JSON.parse(signalPairText[i + 1]);
}