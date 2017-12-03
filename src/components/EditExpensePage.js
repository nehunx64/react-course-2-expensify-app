import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        //console.log('updated', expense);
        this.props.editExpense(this.props.match.params.id, expense);
        this.props.history.push('/');
    };
    onClick = () => {
        this.props.removeExpense({ id: this.props.match.params.id});
        this.props.history.push('/');               
    }

    render() {
        return (
            <div>
            <ExpenseForm
                expense={ this.props.expense }
                onSubmit={ this.onSubmit } />
            <br />
            <button onClick={ this.onClick }>Remove</button>
        </div>
        )
    };
}
// const EditExpensePage = (props) => {
//     return (
//         <div>
//             <ExpenseForm
//                 expense={props.expense}
//                 onSubmit={(expense) => {
//                     console.log('updated', expense);
//                     props.dispatch(editExpense(props.match.params.id, expense));
//                     props.history.push('/');
//             }} />
//             <br />
//             <button onClick={ () => {
//                 props.dispatch(removeExpense({ id:props.match.params.id}));
//                 props.history.push('/');               
//             }}>Remove</button>
//         </div>
//     );
// };

const mapDispatchToProps = (dispatch, props) => ({
    removeExpense: (id) => dispatch(removeExpense({id})),
    editExpense: (id, expense) => dispatch(editExpense(id, expense))
});

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((ex) => ex.id === props.match.params.id)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

