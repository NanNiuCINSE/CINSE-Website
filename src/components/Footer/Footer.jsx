import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div className='footer-container'>
			<div className='footer'>
				<p className='footer-text'>
					Department of Electrical Engineering and Computer Science
				</p>
				<p className='footer-text'>Software Engineering Laboratory</p>
				<p>527 ERC</p>
				<p>Cincinnati, Ohio 45221-0030</p>
				<p>Phone: +1 513 556 0051</p>
				<div className='footer-links'>
					<a href='https://www.uc.edu/alert.html'>Alerts</a>
					<a href='https://www.uc.edu/about/publicsafety/clery/annual-security-report.html'>
						Clery and HEOA Notice
					</a>
					<a href='http://uc.edu/about/policies/non-discrimination.html'>
						Notice of Non-Descrimination
					</a>
					<a href='#'>eAccessibility Concern</a>
					<a href='#'>Copyright Information</a>
					<p> &#169; 2020</p>
					<a href='https://www.uc.edu/'> University of Cincinnati</a>
				</div>
				<p className='footer-last-link'>
					This website offers many PDF files for download, which require{' '}
					<a href='https://get.adobe.com/reader/'> Adobe Reader </a> to view.
				</p>
			</div>
		</div>
	);
};

export default Footer;
