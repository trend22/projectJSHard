//Создать переменную num со значением 266219 (тип данных число)
let num = 266219;

//Вывести в консоль произведение (умножение) цифр этого числа
//Например: число 123, при помощи javaScript получить каждую цифру ( 1, 2, 3 )
// и перемножить их. Правильно использовать цикл или методы перебора.
const numString = num.toString();
const arr = numString.split('');
console.log( arr );
let resultMult = 1;

for ( let i = 0; i < arr.length; i++){
    let numFromArr = Number(arr[i]);
    resultMult *= numFromArr;
}

console.log( resultMult );

// Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
let resultMultInCube = resultMult ** 3;

//Вывести в консоль первые 2 цифры полученного числа
let twoNumsOfResult =  resultMultInCube.toString();
console.log(Number(twoNumsOfResult.substring(0, 2)));
