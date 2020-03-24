var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = (array, element) => {
  var newArr = [element, ...array]
  return newArr;
}

var destructivelyAddElementToBeginningOfArray = (array, element) => {
  return array.unshift(element);
}

function addElementToEndOfArray(array, element){
  var newArr = [...array, element]
  return newArr;
}

function destructivelyAddElementToEndOfArray(array, element){
  return array.push(element)
}

var accessElementInArray = (array, index) => {
  return array[index];
}

var  destructivelyRemoveElementFromBeginningOfArray = (array) => {
  return array.shift();
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop();
}

var removeElementFromEndOfArray = (array) => {
  var newArr = array.slice(-1);
  return newArr;
}
