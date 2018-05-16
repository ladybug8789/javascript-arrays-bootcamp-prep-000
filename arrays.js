var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  [array.unshift(element)]
  return array
}

function addElementToEndOfArray(array, element) {
    var newArray = [...array, element]
    return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  [array.push(element)]
  return array
}

//return to this function
function accessElementInArray(array, index) {
  array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

//return to this function
function removeElementFromBeginningOfArray(array) {
  array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

//return to this function
function removeElementFromEndOfArray(array) {
  array.slice(0, array.length - 1)
  return array
}
