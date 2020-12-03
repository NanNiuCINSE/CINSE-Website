import React from 'react';
import './LabPhoto.css';
import * as LabData from './LabPhoto.data';

const LabPhoto = () => {
	const labPhotosDiv = LabData.labData.map((item) => (
		<div key={item.key} className='lab-image-container'>
			<img className='lab-image' src={item.source} alt={item.alternate}></img>
			<div className='lab-image-title'> {item.caption}</div>
		</div>
	));
	return (
		<section className='section-container'>
			<header className='section-header'>Lab Photos</header>
			<div className='section-wrapper'>{labPhotosDiv}</div>
			<button className='sidepubButton more-button'> MORE PHOTOS</button>
		</section>
	);
};

export default LabPhoto;
