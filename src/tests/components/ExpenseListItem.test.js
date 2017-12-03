import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expensesfixtures from '../fixtures/expenses';

test('should render ExpenseListItem with expense', () => {
    const wrapper = shallow(<ExpenseListItem expense={expensesfixtures[0]} />);
    expect(wrapper).toMatchSnapshot();
});
