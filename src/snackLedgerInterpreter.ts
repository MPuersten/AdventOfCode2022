export default class SnackLedgerInterpreter {
    getCalorieLists(snackLedger: string): number[][]{
        let currentList: number = 0;
        let calorieLists: number[][] = [];

        calorieLists.push([]);
        
        let snackList = snackLedger.split(/\r?\n/);
        for (let i = 0; i < snackList.length; i++){
            if (snackList[i] === '') {
                calorieLists.push([]);
                currentList++;
            }
            else {
                calorieLists[currentList].push(parseInt(snackList[i]));
            }
        }

        return calorieLists;
    }
}