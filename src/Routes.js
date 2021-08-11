import React from "react";
import Dashboard from "./module/container/Dashboard";
import { Route, BrowserRouter } from "react-router-dom";
import About from "./module/components/About";
import Research from "./module/components/Research";

const Routes = () => {
    return (
        <BrowserRouter>
            <Dashboard />
            <Route exact path="/home" />
            <Route exact path="/research" component={Research}/>
            <Route exact path="/aboutus" component={About} />
        </BrowserRouter>
    )
}

export default Routes;