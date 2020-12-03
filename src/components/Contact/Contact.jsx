import React from 'react';
import './Contact.css';

const Contact = () => {
	return (
		<div className='contact-main-container'>
			<div className='contact-wrapper'>
				<header className='contact-header'>Contact Information</header>
				<div className='contact-container'>
					<div className='contact-image'>
						<img
							src='https://i.imgur.com/X2ls1J6.jpg'
							alt='Professor. Nan Niu'
						/>
					</div>
					<h2 className='contact-name'>
						Nan Niu, <em>Ph.D</em>
					</h2>
					<h3 className='contact-designation'>Associate Professor</h3>

					<div className='contact-info'>
						<p className='contact-dept'>
							<span className='dept-name'>
								{' '}
								Department of Electrical Engineering and Computer Science
							</span>
							<span className='dept-location'>
								{' '}
								832 Rhodes Hall, University of Cincinnati Cincinnati,
							</span>{' '}
							<span className='dept-zipcode'>OH 45221-0030 </span>
						</p>
						<div className='contact-options'>
							<p>
								{' '}
								<i class='fas fa-phone-alt'></i> (513)-556 0051
							</p>
							<p>
								{' '}
								<i class='fas fa-envelope'></i> nan.niu@uc.edu
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
