removeZeros = (arr) => {
    if (!arr.length) {
        return "Please pass an array with values"
    }

    zeroArray = [];

    for (i = arr.length -1; i >= 0; --i) {
      if (!arr[i]) {
        zeroArray.push(arr[i]);
        arr.splice(i, 1);
      }
    }

    return arr.concat(zeroArray)
}

module.exports = removeZeros