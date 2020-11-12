import React from 'react';
import './Profile.css';
import * as ProfileData from './Profile.data';

const Profile = () => {
	const { profileData } = ProfileData;
	return (
		<div className='profile-main-container'>
			<header className='profile-header'>
				<div className='profile-holder'>
					<img
						className='profile-img'
						src={profileData.imageSource}
						alt='professor'
					/>
					<div className='prof-info'>
						<p className='profile-name'>{profileData.name}</p>
						<p className='profile-subtitle'>{profileData.title}</p>
					</div>
				</div>
			</header>
			<div className='profile-container'>
				<div className='profile-info'>{profileData.description}</div>
			</div>
		</div>
	);
};

export default Profile;
