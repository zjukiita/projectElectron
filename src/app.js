import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

/* Screens */
import Home from './Screens/Home';
import Register from './Screens/Register';
import Login from './Screens/Login'

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
            </Switch>
        </HashRouter>
    );
};

export default App;
