'use strict'

//------------блок объявления переменных----------
let message = prompt('Введите сообщение', 'Привет! Меня зовут Николай и я алкоголик. Хотя нет, я программист!');

//--------------блок описания функций------------

const getStr = function (msg) {
    let messageShort = msg;

    if (isNaN(messageShort) || messageShort !== ''){
        messageShort = messageShort.trim();

        if(messageShort.length > 30) {
            messageShort = messageShort.slice(0, 29) + '...';
        }

        return messageShort;

    } else {
        return alert('Введена не строка');
    }

}

//------------блок функционала, или функциональный блок-------------------
message = getStr(message);

//------------блок вывода в консоль--------------
console.log(message);