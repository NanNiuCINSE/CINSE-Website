import React, { Fragment } from 'react';
import './LandingPage.css';
import Profile from '../../components/Profile/Profile';
import News from '../../components/News/News';

const LandingPage = () => {
	return (
		<Fragment>
			<div className='landing-container'>
				<Profile />
				<News />
			</div>
		</Fragment>
	);
};

export default LandingPage;
