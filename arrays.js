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
  console.log(array[index])
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1)
  return array
}
