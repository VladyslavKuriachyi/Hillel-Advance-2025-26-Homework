let myArray= [
    "123", "Vlad" , "45" , "76" , "Orange"
] ;
function myFunction(array){
    let sum = 0
    let count = 0
    for (let i = 0; i < array.length; i++) {
   let number = Number(array[i])
        if (!isNaN(number)) {
            sum += number
            count++
        }
    }
    return count === 0 ? 0 : sum / count ;
}
console.log(myFunction(myArray));
