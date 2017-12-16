import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseSummary = (props) => (
    <div>
    {
        props.count === 1 ? (
            <h1>Viewing {props.count} expense totalling {numeral(props.sum / 100).format('$0,0.00')}</h1>
        ) : (
            props.count > 1 ? (
                <h1>Viewing {props.count} expenses totalling {numeral(props.sum / 100).format('$0,0.00')}</h1>
            ) : ''
        )
    }
    </div>
);

const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters);
    return {
        count: expenses.length,
        sum: getExpensesTotal(expenses)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);