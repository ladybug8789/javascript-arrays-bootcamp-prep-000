var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, "string") {
  var newArray = ["string", ...array]
  return newArray
}

addElementToBeginningOfArray(chocolateBars, "mounds")