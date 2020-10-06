import React from 'react';
import './Logo.css';

const Logo = () => {
	return (
		<div className='logo-container'>
			<div className='logo-image'></div>
			<div className='logo-headers'>
				<header className='logo-sub-heading'>
					<span className='heading-college'>
						College of Engineering and Applied Science
					</span>{' '}
					<span className='heading-electrical'>
						Electrical Engineering and Computer Science Department
					</span>
				</header>
				<header className='logo-header'>SOFTWARE ENGINEERING LABORATORY</header>
			</div>
		</div>
	);
};

export default Logo;
