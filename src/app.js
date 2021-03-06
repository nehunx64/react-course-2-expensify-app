import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss'; 
import 'react-dates/lib/css/_datepicker.css';

import './firebase/firebase';

const store = configureStore();

// store.dispatch(addExpense({description: 'Water bill', amount: 4500, createdAt: -11000 }));
// store.dispatch(addExpense({description: 'Gas bill', amount: 2000, createdAt: 1000 }));
// store.dispatch(addExpense({description: 'Rent', amount: 109500, createdAt: -1000 }));

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });
// store.dispatch(setTextFilter('water'));
// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));    
});
