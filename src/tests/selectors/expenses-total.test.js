import React from 'react';
import getExpensesTotal from '../../selectors/expenses-total';
import expensesfixtures from '../fixtures/expenses';

const expenses = expensesfixtures;

test('should return 0 if no expenses', () => {

    const result = getExpensesTotal([]);
    expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
    const result = getExpensesTotal([expenses[0]]);
    expect(result).toBe(190);
});

test('should correctly add up multiple expenses', () => {
    const result = getExpensesTotal(expenses);
    expect(result).toBe(297470);
})