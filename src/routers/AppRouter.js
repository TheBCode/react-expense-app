import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";

import AddExpensePage from "../components/AddExpense";
import EditExpensePage from "../components/EditExpense";
import ExpenseDashboardPage from "../components/ExpenseDashboard";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFound";
import HelpExpensePage from "../components/HelpExpense";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpExpensePage} />
                <Route component={NotFoundPage} exact={false} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;
