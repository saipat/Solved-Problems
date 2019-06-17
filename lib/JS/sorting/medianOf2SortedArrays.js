const medianOfTwoSortedArrays = (arr1, arr2) => {
    let i=0, j=0;
    let mergedArray = [];

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            mergedArray.push(arr1[i]);
            i++;
        }else{
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length){
        mergedArray.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        mergedArray.push(arr2[j]);
        j++;
    }

    const mid = Math.floor(mergedArray.length / 2);

    if(mergedArray.length % 2 === 0){
        return (mergedArray[mid-1] + mergedArray[mid]) / 2;
    }else{
        return mergedArray[mid];
    }

}

// test
console.log(medianOfTwoSortedArrays([1,2], [3,4]));
console.log(medianOfTwoSortedArrays([1,3], [2]));
