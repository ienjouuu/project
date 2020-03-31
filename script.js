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
    "saving": true,
    ChooseExpenses: function () {
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
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень');
        } else {
            console.log('ERROR');
        }
    },
    checkSavings: function () {
        if (appData.saving == true) {
            let save = +prompt('Какие сбережения?'),
                percent = +prompt('Каков процент?');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц ' + (appData.monthIncome).toFixed());
        } else {
            alert('Сбережений у вас болт :)');
        }
    },
    chooseOptExpenses: function () {
        let i = 0;
        while (i < 3) {
            let chooseOptExpenses = prompt('Статья необязательных расходов?');
            appData.optionalExpenses[i] = chooseOptExpenses;
            i++;
        }
    },
    chooseIncome: function () {

        let items = prompt("Перечислите доп доход через запятую", "");

        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Так не пойдет");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что то еще?"));
            appData.income.sort();
        }

        appData.income.forEach (function (itemmassive, i) {
            alert("А вот и данные: " + (i+1) + " - " + itemmassive);
        });

    }
};

for (let key in appData) {
    console.log("А вот и свойства: " + key + " - " + appData[key]);
}