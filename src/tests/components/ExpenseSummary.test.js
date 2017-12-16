import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expensesfixtures from '../fixtures/expenses';


test('should not render Expense summary with no expense', () => {
    const wrapper = shallow(<ExpenseSummary count={0} sum={0} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render Expense summary with one expense', () =>{
    const wrapper = shallow(<ExpenseSummary count={1} sum={500} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render Expense summary with expenses', () =>{
    const wrapper = shallow(<ExpenseSummary count={3} sum={240} />);
    expect(wrapper).toMatchSnapshot();
});
