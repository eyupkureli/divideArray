
function groupArrayElements(numberArray, num){  
    if (num < 2)                                     //no need to calculate
    return numberArray;

let arrLength = numberArray.length,
        resultArrays = [],
        indexNum = 0,
        childLength;

if (arrLength % num === 0) {                         //arrLength is divisible by num
    childLength = Math.floor(arrLength / num);
    while (indexNum < arrLength) {
        resultArrays.push(numberArray.slice(indexNum, indexNum += childLength));
    }
}else {
    num--;                                           //it defines number of arrays which has maximum same length
    childLength = Math.floor(arrLength / num);
    if (arrLength % childLength === 0)
    childLength--;                                    //it defines length of arrays which has maximum same length in order to provide num=3 condition

    while (indexNum < childLength * num) {
        resultArrays.push(numberArray.slice(indexNum, indexNum += childLength));
    }
    resultArrays.push(numberArray.slice(childLength * num));
}
return resultArrays;
}

let result = groupArrayElements([1,2,3,4,5], 3);
console.log(result);





