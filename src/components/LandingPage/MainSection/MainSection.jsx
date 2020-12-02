import React from 'react';
import './MainSection.css';
import Profile from './Profile/Profile';
import SidePublication from './SidePublication/SidePublication';

const MainSection = () => {
	return (
		<section className='landing-container'>
			{/* 
			<SidePublication /> */}
			<div className='landing-wrapper'>
				<Profile />
				<SidePublication />
			</div>
		</section>
	);
};

export default MainSection;
