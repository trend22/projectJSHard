'use strict'

let askUser = prompt('Введите число');

//функция проверки на number
const isNumber = function (num) {
    while ( num === null) {
        num = prompt('Введите число');
    }    
    return !isNaN(parseFloat(num)) && isFinite(num);
}

//функция расширяющая проверку на число isNumber()
const answerInNumber = function (num, func) {
    let result = num;
    
    while (!func(result) || result === null) {
        result = prompt('Введите число');
        // if(result.trim() !== '' || result !== null) {
        //     result = result.trim();
        // }
    }

    result = result.trim();
    result = Number(result);
    return result;  
}

askUser = answerInNumber(askUser, isNumber);

console.log(askUser, typeof askUser);