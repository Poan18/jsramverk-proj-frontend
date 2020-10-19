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
                    <Route path="/objects/buy/:name" component={BuyObject} />
                    <Route path="/objects/sell/:name" component={SellObject} />
                    <PrivateRoute path="/myPage" component={Login} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </Router>
    );
}

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        localStorage.getItem('User') ? <MyPage /> : <Redirect to='/login' />
    )} />
)

export default App;
