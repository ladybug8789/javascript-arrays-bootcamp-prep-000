var chocolateBars ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, "mounds") {
    candyBars = ["mounds", ...chocolateBars]
    return candyBars
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, "mounds") {
    chocolateBars.unshift("mounds")
    return chocolateBars
}
