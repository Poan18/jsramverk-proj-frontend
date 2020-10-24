import React from 'react';
import { BrowserRouter as Router, Switch, Route ,Redirect } from "react-router-dom";

import Navigation from './components/Navigation';
import Register from './components/Register';
import Login from './components/Login';
import MyPage from './components/MyPage';
import BuyObject from './components/BuyObject';
import SellObject from './components/SellObject';
import Home from './components/Home';

function App() {
    return (
        <Router>
            <div>
                <Navigation />
                <Switch>
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/objects/buy/:name" component={BuyObject} />
                    <PrivateRoute path="/objects/sell/:name" component={SellObject} />
                    <PrivateRoute path="/myPage" component={MyPage} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </Router>
    );
}

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem('User') ? (
                <Component {...props} />
            ) : (
                <Redirect to='/login'/>
            )
    } />
)

export default App;
