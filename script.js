'use strict';
//let arr = ['kek','lpl','ere'];
// console.log(arr[0]);
// confirm('Are u married?');
//prompt(gi

var money = prompt('Ваш бюджет на месяц?');
var time = prompt('Введите дату в формате YYYY-MM-DD');



let appData = {
    "budget": money,
    "timeData": time,
    "expenses": {},
    "optionalExpenses": {},
    "income": [],
    "saving": false
};

let expenses1 = prompt('Введите обязательную статью расходов в этом месяце');
let expenses2 = prompt('Во сколько обойдется');

appData.expenses[expenses1] = expenses2;
alert(money / 30);
console.log(appData);