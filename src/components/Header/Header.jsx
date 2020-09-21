import React, { Fragment } from 'react';
import './Header.css';

const Header = () => {
	return (
		<Fragment>
			<div className='navigation'>
				<a href='#' className='navigation-tabs'>
					Home
				</a>
				<a href='#' className='navigation-tabs'>
					Members
				</a>
				<a href='#' className='navigation-tabs'>
					Projects
				</a>
				<a href='#' className='navigation-tabs'>
					News
				</a>
				<a href='#' className='navigation-tabs'>
					Publications
				</a>
				<a href='#' className='navigation-tabs'>
					Data/Tools
				</a>
				<a href='#' className='navigation-tabs'>
					Contact Us
				</a>
			</div>
		</Fragment>
	);
};

export default Header;
