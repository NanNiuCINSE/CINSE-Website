import React from 'react';
import './Publication.css';
import * as PublicationData from './Publication.data';

const Publication = () => {
	const { publications } = PublicationData;
	const publicationElements = publications.map((publication, index) => {
		return (
			<section key={index} className='publication-section'>
				<header className='publication-section-header'>
					{publication.title}
				</header>
				<div className='publication-item-container'>
					<ul className='publication-item'>
						{publication.papers.map((paper, index) => {
							return (
								<li key={index} className='publication-listitem'>
									{paper.name}
								</li>
							);
						})}
					</ul>
				</div>
			</section>
		);
	});
	return (
		<div className='publication-container'>
			<div className='publication-wrapper'>
				<header className='publication-header'>Publications</header>
				{publicationElements}
			</div>
		</div>
	);
};
export default Publication;
