import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Members from './components/Members/Members';
import { Switch, Route } from 'react-router-dom';
// import Route from 'react-router-dom/Route';

const App = () => {
	return (
		<div className='main-container'>
			<div className='logo-container'></div>
			<Header />

			<Switch>
				<Route path='/' component={LandingPage} exact />
				<Route path='/members' component={Members} exact />
			</Switch>
		</div>
	);
};

export default App;
