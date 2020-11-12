import React, { Fragment } from 'react';
import './LandingPage.css';
import Profile from './Profile/Profile';
import SidePublication from './SidePublication/SidePublication';

const LandingPage = () => {
	return (
		<Fragment>
			<div className='landing-container'>
				<Profile />
				<SidePublication />
			</div>
		</Fragment>
	);
};

export default LandingPage;
