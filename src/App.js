import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Members from './components/Members/Members';
import Footer from './components/Footer/Footer';
import Project from './components/Projects/Project';
import Logo from './components/Logo/Logo';
import MainNews from './components/MainNews/MainNews';
import Publication from './components/Publication/Publication';
import { Switch, Route } from 'react-router-dom';

// import Route from 'react-router-dom/Route';

const App = () => {
	return (
		<div className='main-container'>
			<Logo />
			<Header />
			<Switch>
				<Route path='/' component={LandingPage} exact />
				<Route path='/members' component={Members} exact />
				<Route path='/projects' component={Project} exact />
				<Route path='/news' component={MainNews} exact />
				<Route path='/publications' component={Publication} exact />
			</Switch>
			<Footer />
		</div>
	);
};

export default App;
