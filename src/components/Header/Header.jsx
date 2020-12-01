import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<Fragment>
			<div className='navigation'>
				<Link to='/' className='navigation-tabs'>
					Home
				</Link>
				<Link to='/members' className='navigation-tabs'>
					Members
				</Link>
				<Link to='/projects' className='navigation-tabs'>
					Projects
				</Link>
				<Link to='/news' className='navigation-tabs'>
					News
				</Link>
				<Link to='/publications' className='navigation-tabs'>
					Publications
				</Link>
				{/* <Link to='/tools' className='navigation-tabs'>
					Data/Tools
				</Link> */}
				<Link to='/contact' className='navigation-tabs'>
					Contact Us
				</Link>
			</div>
		</Fragment>
	);
};

export default Header;
