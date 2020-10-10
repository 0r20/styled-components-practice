import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import { IndexPage } from './pages/IndexPage';


export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={IndexPage} />
            </Switch>
        </BrowserRouter>
    );
}
