import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expensesfixtures from '../fixtures/expenses';

let editExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    params = { id: expensesfixtures[1].id};
    wrapper = shallow(<EditExpensePage 
        expense={expensesfixtures[1]} 
        editExpense={editExpense} 
        startRemoveExpense={startRemoveExpense}
        history={history} />);
});

test('should render editExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('Click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({id: expensesfixtures[1].id});
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expensesfixtures[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expensesfixtures[1].id, expensesfixtures[1]);
});