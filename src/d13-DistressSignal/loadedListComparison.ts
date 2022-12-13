export function isOrderedCorrectly(left: any, right: any): boolean {
    console.log('left');
    console.log(left);
    console.log('right');
    console.log(right);
    let leftType: string = typeof(left);
    let rightType: string = typeof(right);

    // Simple case for basic input
    if (leftType === 'number' && rightType === 'number') return (left <= right);
    else if (leftType === 'object' && rightType === 'object') {
        console.log('both are objects');
        // Compare elements that are there
        let allAreOrderedCorrectly: boolean = true;
        let valuesOrderedCorrectly: boolean = true;
        
        for (let i = 0; i < Math.min(left.length, right.length); i++) {
            console.log('entered loop');
            if (typeof(left[i]) !== 'number' || typeof(right[i]) !== 'number') {
                console.log(`One is object`);
                // edge case for identical arrays
                // if (left[i].length === right[i].length) {
                //     let areAllNumbers = true;
                //     for (let j = 0; j < left[i].length; i++) {
                //         areAllNumbers = (typeof(left[i][j]) === 'number' && typeof(right[i][j]) === 'number')
                //     }

                //     if (areAllNumbers) {
                //         for (let j = 0; j < left[i].length; j++) {
                //             if (left[i][j] > right[i][j]) return false;
                //         }
                //     }
                //     else isOrderedCorrectly(left[i], right[i]);
                // }
                allAreOrderedCorrectly = isOrderedCorrectly(left[i], right[i]) && allAreOrderedCorrectly;
                if(i === Math.min(left.length, right.length) - 1 || !allAreOrderedCorrectly) return allAreOrderedCorrectly;
            }
            else if (typeof(left[i]) === 'number' || typeof(right[i]) === 'number') {
                console.log(left[i]);
                console.log(right[i]);
                if (left[i] < right[i]) return true;
                valuesOrderedCorrectly = valuesOrderedCorrectly && (left[i] === right[i]);
                console.log(`Updated valuesOrderedCorrectly: ${valuesOrderedCorrectly}`);
                // if (left[i] < right[i]) return true;
                // else if (left[i] > right[i]) return false;
            }

            // console.log(typeof(left[i]));
            // console.log(typeof(right[i]));
        }
        if (!valuesOrderedCorrectly){
            console.log('Values not ordered correctly.');
            return false;
        } 

        // When elements are equal decide based on list length
        console.log('Deciding with list lengths');
        console.log(`left: ${left.length}, right: ${right.length}`);
        console.log(left);
        console.log(right);
        return (left.length <= right.length);
    }
    else if (leftType === 'object' && rightType !== 'object') {
        return isOrderedCorrectly(left, [right]);
    }
    else if (leftType !== 'object' && rightType === 'object') {
        return isOrderedCorrectly([left], right);
    }
    else {
        // Programming / Input Error
        console.log(left);
        console.log(right);
        console.log(`An error occurred, left type: ${leftType}, right type: ${rightType}`);
    }
    
    throw Error();
}