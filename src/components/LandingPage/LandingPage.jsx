import React, { Fragment } from 'react';
import './LandingPage.css';
import Profile from '../../components/Profile/Profile';
import News from '../../components/News/News';
import Footer from '../../components/Footer/Footer';

const LandingPage = () => {
	return (
		<Fragment>
			<div className='landing-container'>
				<Profile />
				<News />
			</div>
			<Footer />
		</Fragment>
	);
};

export default LandingPage;
