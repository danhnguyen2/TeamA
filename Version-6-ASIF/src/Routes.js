import React from 'react';
import Dashboard from './module/container/Dashboard';
import { Route, BrowserRouter } from 'react-router-dom';
import About from './module/components/About';
import ContactUs from './module/components/ContactUs';
import Research from './module/components/Research';
import Home from './module/components/Home';
import ResearchDetails from './module/components/ResearchDetails';
import Footer from './module/container/Footer';
const Routes = () => {
	return (
		<BrowserRouter>
			<Dashboard />
			<Route exact path='/' component={Home} />
			<Route exact path='/home' component={Home} />
			<Route exact path='/research' component={Research} />
			<Route
				exact
				path='/research/:citationNumber'
				component={ResearchDetails}
			/>
			<Route exact path='/aboutus' component={About} />
			<Route exact path='/contactus' component={ContactUs} />
			<Footer />
		</BrowserRouter>
	);
};

export default Routes;
