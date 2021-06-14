import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

/* Screens */
import Home from './Screens/Home';
import Register from './Screens/Register';
import Login from './Screens/Login';

// Developers Screens

import DevHome from './screens/Developer/DevHome';
import DevMovies from './screens/Developer/DevMovies';
import DevUsers from './screens/Developer/DevUsers';

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />

                {/* <Route exact path="/" component={DevHome}/>
                <Route path="/DevMovies" component={DevMovies}/>
                <Route path="/DevUsers" component={DevUsers}/> */}
            </Switch>
        </HashRouter>
    );
};

export default App;
