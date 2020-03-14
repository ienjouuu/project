'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?');
    }
}

start();

let appData = {
    "budget": money,
    "timeData": time,
    "expenses": {},
    "optionalExpenses": {},
    "income": [],
    "saving": true
};


function ChooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце'),
            b = prompt('Во сколько обойдется');
        if (typeof (a) === 'string' && typeof (a) != null &&
            typeof (b) != null && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            console.log('bad');
        }

    }
}

ChooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень');
    } else {
        console.log('ERROR');
    }
}

detectLevel();

function checkSavings() {
    if (appData.saving == true) {
        let save = +prompt('Какие сбережения?'),
            percent = +prompt('Каков процент?');

        appData.monthIncome = save / 100 / 12 * percent;
        alert('Доход в месяц ' + (appData.monthIncome).toFixed());
    } else {
        alert('Сбережений у вас болт :)');
    }
}

checkSavings();

function chooseOptExpenses() {
    let i = 0;
    while (i<3) {
        let chooseOptExpenses = prompt('Статья необязательных расходов?');
        appData.optionalExpenses[i]= chooseOptExpenses;
        i++;
    }
}

chooseOptExpenses();
