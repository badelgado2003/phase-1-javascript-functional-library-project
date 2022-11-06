function myEach(collection, alert) {
    let array = Object.values(collection)
    for(let e of array) {
        alert(e)
    }
    return collection
}

function myMap(collection, callback) {

    let arr = Object.values(collection)
    let newArr = []
    for(let e of arr) {
        newArr.push(callback(e))
    }
    return newArr
}

function myReduce(collection, callback, ...acc) {
    let arr = Object.values(collection)
    let newAcc;
    let i;
    let total = 0
    if(acc.length > 0) {
        newAcc = acc[0]
        i = 0
    } else {
        newAcc = arr[0]
        i = 1
    }
    
    for(i; i< arr.length; i++) {
        newAcc = callback(newAcc, arr[i], collection)
    }
    return newAcc
}

function myFind(collection, predicate) {
    let arr = Object.values(collection)
    let find = arr.find(predicate)
    return find
}

function myFilter(collection, predicate) {
    let arr = Object.values(collection)
    let filter = arr.filter(predicate)
    return filter
}

function mySize(collection) {
    let arr = Object.values(collection)
    let total = arr.length
    return total
}

function myFirst (array, n) {
    let first = array.slice(0, n)
    let firstArr = array[0]
    if(n == undefined) {
      return firstArr
    } else {
      return first
    }
}

function myLast(array, n) {
    let last = array.slice(-n, 4)
    let lastArr = array[3]
    if(n == undefined) {
      return lastArr
    } else {
      return last
    }
}

function myKeys (object) {
    let obj = Object.keys(object)
    return obj
}

function myValues(object) {
    let value = Object.values(object)
    return value
}