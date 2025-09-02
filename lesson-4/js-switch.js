let numOrStr = prompt('input number or string');
console.log(numOrStr)

if(numOrStr === null) {
    console.log('ви скасували')
} else if( numOrStr.trim() === '' ) {
    console.log('Empty String');
} else if ( isNaN( +numOrStr ) ) {
    console.log(' number is Ba_NaN')
} else {
    console.log('OK!')
}

let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch(numOrStr) {
    case "null":
        massage = 'ви скасували'
        break;
    case " numOrStr.trim() === ''":
        massage = 'Empty String';
        break;
    case " isNaN( +numOrStr )":
        massage = ' number is Ba_NaN'
        break;
    default:
        massage = 'OK'
}
console.log(message);