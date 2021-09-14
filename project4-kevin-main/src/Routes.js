import React from "react";
import Dashboard from "./module/container/Dashboard";
import { Route, BrowserRouter } from "react-router-dom";
import About from "./module/components/About";
import Research from "./module/components/Research";
import Home from "./module/components/Home";
import ResearchDetails from "./module/components/ResearchDetails";
import Footer from "./module/container/Footer";
const Routes = () => {
    return (
        <BrowserRouter>
            <Dashboard />
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/research" component={Research}/>
            <Route exact path="/research/:citationNumber" component={ResearchDetails}/>
            <Route exact path="/aboutus" component={About} />  
        <Footer />
            </BrowserRouter>
    )
}

export default Routes;