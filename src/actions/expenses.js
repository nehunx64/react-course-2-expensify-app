import uuid from 'uuid';
import expenseDatabase from '../firebase/firebase';

// component calls action generator
// action generator returns an object
// component dispatches object to redux store
// redux store changes and notifies all subscribing components

// component calls action generator
// action generator returns function
// component dispatches function (?)
// function runs (has the ability to dispatch other functions and do whatever it wants)

// ADD_EXPENSE
const addExpense = (expense) => ({
    type: 'ADD_EXPENSE', 
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0    
         } = expenseData;
         const expense = { description, note, amount, createdAt };
         
         return expenseDatabase.push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
         });
    };
};

// REMOVE_EXPENSE
const removeExpense = ({id}) => ({ type: 'REMOVE_EXPENSE', expense: { id }});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export { addExpense, removeExpense, editExpense }