let money, time;

function start() {
    do {
        money = +prompt ("Ваш бюджет на месяц?", "");
        }
    while (isNaN(money) || money == "" || money == null);
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt ("Your required expense in this month?", ""),
                b = prompt ("How much is it?", "");
    
            if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
    
                appData.expenses[a] = b;
            } else {                            
                i--;
            }
        }
    },
    detectDayBudget: function() {                                            // Расчет дневного бюджета
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
    },
    detectLevel: function() {                                                // Расчет уровня достатка
        let levelStr;
        if (appData.moneyPerDay < 100) {
            levelStr = "Это минимальный уровень достатка!";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelStr =  "Это средний уровень достатка!";
        } else if (appData.moneyPerDay > 2000) {
            levelStr = "Это высокий уровень достатка!";
        } else {
            levelStr = "Ошибочка...!";
    
        }
        alert (levelStr);
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
                appData.monthIncome = save/100/12*percent;
                alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {                             // Функция для определения необязательных расходов

        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?  " + i);
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function () {

        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }

        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });

    }
       
};
