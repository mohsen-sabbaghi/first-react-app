import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import Main from "../pages/Main";
import Details from "../pages/Details";

export default function Index() {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/main" component={Main}/>
            <Route path="/details/:id/:title" component={Details}/>
            <Route path="*">
                <div>404</div>
            </Route>
        </Switch>
    )
}