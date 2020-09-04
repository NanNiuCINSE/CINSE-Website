import React from 'react';
import './Profile.css';
import professor from '../../resources/Images/nan_main1.jpg';

const Profile = () => {
	return (
		<div className='profile-main-container'>
			<header className='profile-header'>
				<div className='profile-holder'>
					<img className='profile-img' src={professor} alt='professor' />
					<div className='prof-info'>
						<p className='profile-name'>Prof. Nan Niu</p>
						<p className='profile-subtitle'>Computer Science & Informatics</p>
					</div>
				</div>
			</header>
			<div className='profile-container'>
				<div className='profile-info'>
					Nan Niu is the Director of the Software Engineering Research
					Laboratory in the Department of Electrical Engineering and Computer
					Science (EECS) at the University of Cincinnati (UC). His current
					research interests focus on requirements engineering, model-driven
					engineering, scientific software development, and human-centric
					computing. He and his research group are tackling a variety of
					projects concerning the quality of the software and the productivity
					of the people who are building software.
				</div>
			</div>
		</div>
	);
};

export default Profile;
