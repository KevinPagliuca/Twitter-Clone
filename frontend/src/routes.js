import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Tweets from './pages/Tweets';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tweets" exact component={Tweets} />
            </Switch>
        </BrowserRouter>
    );
}
