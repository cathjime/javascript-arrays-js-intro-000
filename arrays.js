var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = (array, element) => {
  return [element, ...array]
}

var destructivelyAddElementToBeginningOfArray = (array, element) => {
  array.unshift(element);
  return array
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
