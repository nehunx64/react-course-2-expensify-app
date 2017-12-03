import moment from 'moment';
import getVisibleExpenses from '../../selectors/expenses';
import expensesFixtures from '../fixtures/expenses';

const expenses = expensesFixtures;

test('should filter by text value', () => {
    const filters = {
        text: 'p',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([ expenses[3], expenses[1] ])
});

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };

    const result = getVisibleExpenses(expenses, filters);
    
    expect(result).toEqual([ expenses[3], expenses[2], expenses[0] ]);
});

test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined, //moment(0).subtract(3, 'days'),
        endDate: moment(0).add(2, 'days')
    };

    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([ expenses[0], expenses[1] ]);
});

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined, 
        endDate: undefined
    };

    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([expenses[3], expenses[2], expenses[0], expenses[1]]);
});

test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined, 
        endDate: undefined
    };

    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[3], expenses[1], expenses[0]]);
    
});