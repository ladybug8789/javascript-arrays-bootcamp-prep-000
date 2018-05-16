var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, "foo") {
  var newArray = ["food", ...chocolateBars]
  return newArray
}
