'use strict'

const elemData = document.createElement('div');
const elemData2 = document.createElement('div');
const elemClassContainer = document.querySelector('.container');

const getNowDate = function() {
    let nowDate;
    let hours, minutes, seconds, date, month, month2, year, day;
    let endingOfSeconds, endingOfMinutes, endingOfHours;

    nowDate = new Date();

    year = nowDate.getFullYear().toString().padStart(2, '0');
    month = nowDate.getMonth();
    date = nowDate.getDate().toString().padStart(2, '0');
    day = nowDate.getDay();
    hours = nowDate.getHours().toString().padStart(2, '0');
    minutes = nowDate.getMinutes().toString().padStart(2, '0');
    seconds = nowDate.getSeconds().toString().padStart(2, '0');

    const getMonthName = function(monthName) {
        switch(true) {
            case monthName === 0:
                month = '01';
                month2 = 'января';
                break;
            case monthName === 1: 
                month = '02';
                month2 = 'февраля';
                break;
            case monthName === 2: 
                month = '03';
                month2 = 'марта';
                break;
            case monthName === 3: 
                month = '04';
                month2 = 'апреля';
                break;
            case monthName === 4: 
                month = '05';
                month2 = 'мая';
                break;
            case monthName === 5: 
                month = '06'; 
                month2 = 'июня';
                break; 
            case monthName === 6: 
                month = '07';
                month2 = 'июля';
                break;
            case monthName === 7: 
                month = '08';
                month2 = 'августа';
                break;
            case monthName === 8: 
                month = '09';
                month2 = 'сентября';
                break;
            case monthName === 9: 
                month = '10';
                month2 = 'октября';
                break;
            case monthName === 10: 
                month = '11';
                month2 = 'ноября';
                break;
            case monthName === 11: 
                month = '12';
                month2 = 'декабря';
                break;
            }
        }

    const getDayName = function(dayName) {
        switch(true) {
            case dayName === 0:
                day = 'Воскрессенье';
                break;
            case dayName === 1: 
                day = 'Понедельник';
                break;
            case dayName === 2: 
                day = 'Вторник';
                break;
            case dayName === 3: 
                day = 'Среда';
                break;
            case dayName === 4: 
                day = 'Четверг';
                break;
            case dayName === 5: 
                day = 'Пятница'; 
                break; 
            case dayName === 6: 
                day = 'Суббота';
                break;

            }
        }
    
    const getEndingOfSeconds = function(seconds) {
        
        switch(true) {
            case seconds[1] === '1': 
                endingOfSeconds = 'секунда';
                break;
            case (seconds[1] === '2' || seconds[1] === '3' || seconds[1] === '4') && seconds[0] !== '1': 
                endingOfSeconds = 'секунды';
                break;
            case seconds[1] === '5' || seconds[1] === '6' || seconds[1] === '7' || seconds[1] === '8' ||seconds[1] === '9' ||seconds[1] === '0': 
                endingOfSeconds = 'секунд';
            default:
                endingOfSeconds = 'секунд';
                break;
        }
    }

    const getEndingOfMinutes = function(minutes) {
        
        switch(true) {
            case minutes[1] === '1': 
                endingOfMinutes = 'минута';
                break;
            case (minutes[1] === '2' || minutes[1] === '3' || minutes[1] === '4') && minutes[0] !== '1': 
                endingOfMinutes = 'минуты';
                break;
            case minutes[1] === '5' || minutes[1] === '6' || minutes[1] === '7' || minutes[1] === '8' ||minutes[1] === '9' ||   minutes[1] === '0': 
                endingOfMinutes = 'минут';
                break;
            default:
                endingOfMinutes = 'минут';
                break;  
        }
    }

    const getEndingOfHours = function(hours) {
        
        switch(true) {
            case hours[1] === '1': 
                endingOfHours = 'час';
                break;
            case (hours[1] === '2' || hours[1] === '3' || hours[1] === '4') && hours[0] !== '1': 
                endingOfHours = 'часа';
                break;
            case hours[1] === '5' || hours[1] === '6' || hours[1] === '7' || hours[1] === '8' ||hours[1] === '9' ||   hours[1] === '0': 
                endingOfHours = 'часов';
                break;
            default:
                endingOfHours = 'часов';
                break;  
        }
    }

    getMonthName(month);
    getDayName(day);
    getEndingOfSeconds(seconds);
    getEndingOfMinutes(minutes);
    getEndingOfHours(hours);

    elemData.innerHTML = '<b>Время сейчас: </b>' + date + '.' + month + '.' + year + ' - ' + hours + ':' + minutes + ':' + seconds;  
    elemData2.innerHTML = '<b>Время сейчас: </b>' + day + ', ' + date + ' ' + month2 + ' ' + year + ' года, ' + hours + ' ' + endingOfHours + ' ' + minutes + ' ' + endingOfMinutes + ' ' + seconds + ' ' + endingOfSeconds;
    elemClassContainer.before(elemData);
    elemClassContainer.before(elemData2);

}

setInterval(getNowDate, 1000)

