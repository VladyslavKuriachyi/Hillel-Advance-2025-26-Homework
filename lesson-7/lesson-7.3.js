const array = [1, 3, 4, 6, 2, 5, 7];

function removeElementFilters(array, item) {
    return array.filter(element => element !== item);
}
let MyArray = [1, 3, 4, 6, 2, 5, 7]
let NewArray = removeElementFilters(MyArray, 1, 3, 4, 6, 2, 5, 7);
console.log(MyArray);