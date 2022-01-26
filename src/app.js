import React from "react";
import ReactDOM from "react-dom"
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const store = configureStore();

// store.dispatch(addExpense({description: 'Gas Bill', amount: 10189}));
// store.dispatch(addExpense({description: 'Electric Bill', amount: 3700, createdAt: 1000}));
// store.dispatch(addExpense({description: 'Rent', amount: 145900}));
// store.dispatch(setTextFilter('gas'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses)


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

