import React, { Fragment } from 'react';
import './LandingPage.css';
import Header from '../Header/Header';
import Profile from '../../components/Profile/Profile';
import News from '../../components/News/News';

const LandingPage = () => {
	return (
		<Fragment>
			<div className='logo-container'></div>
			<Header />
			<div className='landing-container'>
				<Profile />
				<News />
			</div>
		</Fragment>
	);
};

export default LandingPage;
