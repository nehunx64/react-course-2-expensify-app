

const getExpensesTotal = (expenses) => {
    // if (expenses == undefined || expenses == null || expenses.length == 0)
    //     return 0;
    if (!expenses)
        return 0;

    var amounts = expenses.map((expense) => expense.amount);
    return amounts.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

export default getExpensesTotal;