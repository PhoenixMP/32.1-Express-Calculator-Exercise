function mean(arr) {
    if (arr.length === 0) {
        return 0
    }
    let sum = 0;
    arr.forEach(val => {
        sum += val
    });
    return sum / arr.length
}

function median(arr) {
    if (arr.length === 0) {
        return 0
    }
    arr.sort();
    const mid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return (arr[mid - 1] + arr[mid]) / 2;
    } else {
        return arr[mid];
    }
}

function mode(arr) {
    if (arr.length === 0) {
        return 0
    }
    let count = {};
    for (num of arr) {
        if (count[num]) {
            count[num] += 1;
        } else {
            count[num] = 1;
        }
    }
    let values = Object.values(count);
    const sortedValues = [...values.sort()];
    const highestValue = sortedValues[sortedValues.length - 1];
    let mode = [];
    for (key in count) {
        if (count[key] === highestValue) {
            mode.push(+key);
        }
    }
    if (mode.length === 1) {
        return mode[0]
    }
    return mode
}

function makeArray(nums) {
    let arr = []
    for (num of nums) {
        let changedNum = Number(num);
        if (Number.isNaN(changedNum)) {
            return new Error(`${num} is not a valid number`)
        }
        arr.push(changedNum);
    }
    return arr
}

module.exports = {
    mean,
    median,
    mode,
    makeArray
};
