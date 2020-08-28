import React, { Fragment } from 'react';
import './LandingPage.css';

const LandingPage = () => {
	return (
		<Fragment>
			<div className='logo-container'></div>
			<div className='navigation'>
				<div className='navigation-tabs'>Home</div>
				<div className='navigation-tabs'>Members</div>
				<div className='navigation-tabs'>Projects</div>
				<div className='navigation-tabs'>News</div>
				<div className='navigation-tabs'>Publications</div>
				<div className='navigation-tabs'>Data/Tools</div>
				<div className='navigation-tabs'>Contact Us</div>
			</div>
		</Fragment>
	);
};

export default LandingPage;
