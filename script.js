//Переменная lang может принимать 2 значения: 'ru' 'en'.
let lang = prompt('Выберите язык: ru - русский, en - английский');

//Написать условия при котором в зависимости от значения lang будут выводится 
//дни недели на русском или английском языке. Решите задачу
// a) через if,
if (lang === 'ru') {
    console.log('Дни недели: понедельник, вторник, среда, четверг, пятница, суббота и воскресенье');
} else {
    console.log('Days of week: Monday, Tuesday, Wednesday , Thursday , Friday , Saturday  и Sunday');
}
//b) через switch-case
switch(true) {
    case lang === 'ru':
        console.log('Дни недели: понедельник, вторник, среда, четверг, пятница, суббота и воскресенье');
        break
    case lang === 'en':
        console.log('Days of week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday и Sunday');
        break
}
//c) через многомерный массив без ифов и switch.
let daysOfWeek = {};
daysOfWeek.ru = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
daysOfWeek.en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let daysOfWeekPrint = lang === 'ru' ? daysOfWeek.ru : daysOfWeek.en;
console.log(daysOfWeekPrint);


//У нас есть переменная namePerson. Если значение этой переменной 
//“Артем” то вывести в консоль “директор”, если значение “Александр” 
//то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
 //Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
let namePerson = prompt('Выберите имя: "Артем" или "Александр" (имя записать без кавычек)');
console.log(namePerson === 'Артем' ? 'директор': (namePerson === 'Александр' ? 'преподаватель' : 'студент'));
