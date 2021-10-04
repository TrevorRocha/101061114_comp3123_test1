const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        let filterArray = mixedArray.filter(value => (typeof value === "string"))
        outputArray = filterArray.map(word => word.toString().toLowerCase())
        resolve(outputArray)
    })

}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

lowerCaseWords(mixedArray)
.then((value) => console.log(value))
.catch((error) => console.log(error));
