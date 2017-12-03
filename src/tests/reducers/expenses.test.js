import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expensesFixtures from '../fixtures/expenses';

test('should add default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by Id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: expensesFixtures[1]
    };
    const state = expensesReducer(expensesFixtures, action);

    expect(state).toEqual([expensesFixtures[0], expensesFixtures[2], expensesFixtures[3]]);
});

test('should not remove expense when id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: { ...expensesFixtures, id: 10 }
    };
 
    const state = expensesReducer(expensesFixtures, action);    
    expect(state).toEqual([...expensesFixtures]);
});

test('should add an expense', () => {
    const newexpense = {
        description: 'test',
        note: 'test',
        amount: 1000,
        createdAt: moment(0)
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: newexpense
    };

    const state = expensesReducer(expensesFixtures, action);
    expect(state).toEqual([...expensesFixtures, newexpense]);
});

test('should edit an expense by Id', () => {
    const updates = {
        description: 'edited',
        note: 'edited',
        amount: 100,
        createdAt: moment(0).valueOf()
    };

    const action = {
        type: 'EDIT_EXPENSE',
        id: expensesFixtures[1].id,
        updates 
    };
    const state = expensesReducer(expensesFixtures, action);

    expect({...state[1]}).toEqual({ ...expensesFixtures[1], ...updates });
});

test('should not edit expense when id not found', () => {
    const updates = {
        description: 'edited',
        note: 'edited',
        amount: 100,
        createdAt: moment(0).valueOf()
    };

    const action = {
        type: 'EDIT_EXPENSE',
        id: { ...expensesFixtures, id: 10 },
        updates
    };
 
    const state = expensesReducer(expensesFixtures, action);    
    expect(state).toEqual([...expensesFixtures]);
});
