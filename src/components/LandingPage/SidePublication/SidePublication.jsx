import React from 'react';
import './SidePublication.css';
import { Link } from 'react-router-dom';
import * as PublicationData from './SidePublication.data';

const SidePublication = () => {
	const { data, Header } = PublicationData;
	const publicationItems = data.slice(0, 5).map((item, index) => {
		return (
			<div className='sidepub-item' key={index}>
				<header>{item.title}</header>
				<div className='sidepub-authors'>
					{item.authors.map((author, index) => (
						<a key={index} href={author.link} className='sidepub-author'>
							{author.name}
						</a>
					))}
				</div>
				<button className='sidepub-explore'>
					<a target='blank' href='https://ieeexplore.ieee.org/document/9222252'>
						{' '}
						Explore{' '}
					</a>
				</button>
			</div>
		);
	});

	return (
		<aside className='sidepub-section'>
			<div className='sidepub-container'>
				<header className='sidepub-header'>{Header}</header>
				<div className='sidepub'>{publicationItems}</div>
				<Link to='/publications' className='sidepub-link'>
					<button className='sidepubButton'>Find All Publications</button>
				</Link>
			</div>
		</aside>
	);
};

export default SidePublication;
