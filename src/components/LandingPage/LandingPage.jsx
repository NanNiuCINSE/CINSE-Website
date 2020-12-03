import React from 'react';
import './LandingPage.css';
import MainSection from './MainSection/MainSection';
import NewsSection from './NewsSection/NewsSection';
import LabPhoto from './LabPhoto/LabPhoto';

const LandingPage = () => {
	return (
		<div className='landing-main-container'>
			<MainSection />
			<NewsSection />
			<LabPhoto />
		</div>
	);
};

export default LandingPage;
