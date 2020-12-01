import React, { Fragment } from 'react';
import './LandingPage.css';
import Profile from './Profile/Profile';
import SidePublication from './SidePublication/SidePublication';
import NewsSection from './NewsSection/NewsSection';
import LabPhoto from './LabPhoto/LabPhoto';

const LandingPage = () => {
	return (
		<Fragment>
			<div className='landing-main-container'>
				<div className='landing-container'>
					<Profile />
					<SidePublication />
				</div>
				<NewsSection />
				<LabPhoto />
			</div>
		</Fragment>
	);
};

export default LandingPage;
