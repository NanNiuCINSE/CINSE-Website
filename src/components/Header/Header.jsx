import React, { Fragment } from 'react';
import './Header.css';

const Header = () => {
	return (
		<Fragment>
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

export default Header;
