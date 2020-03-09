'use strict';
//let arr = ['kek','lpl','ere'];
// console.log(arr[0]);
// confirm('Are u married?');
//prompt(gi

var money = +prompt('Ваш бюджет на месяц?');
var time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    "budget": money,
    "timeData": time,
    "expenses": {},
    "optionalExpenses": {},
    "income": [],
    "saving": false
};


for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце'),
        b = prompt('Во сколько обойдется');
    if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log('done');150
        appData.expenses[a] = b;
    } else {
        console.log('bad');
    }

}

appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень');
} else {
    console.log('ERROR');
}