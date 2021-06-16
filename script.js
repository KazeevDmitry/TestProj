let money = prompt("Ваш доход в месяц", ""),
    time = prompt("Дата в формате YYYY-MM-DD", "");
let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};
let a1 = prompt("Your required expense in this month?", ""),
    a2 = prompt("How much is it?", ""),
    a3 = prompt("Your required expense in this month?", ""),
    a4 = prompt("How much is it?", "");

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;
alert(appData.budget / 30);

alert(a1 + "  " + appData.expenses.a1);
alert(a3 + "  " + appData.expenses.a3);