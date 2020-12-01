import React from 'react';
import './NewsSection.css';
import * as NewsData from './NewsSection.data';

const NewsSection = () => {
	const newsItems = NewsData.newsSectionData.map((newsItem, index) => (
		<div key={index} className='news-item'>
			<span className='news-date'> {newsItem.date}</span>
			<header className='news-headline'>
				<a className='news-headline-link' href={newsItem.link}>
					{newsItem.headline}
				</a>
			</header>
			<div className='news-content'>{newsItem.content}</div>
		</div>
	));

	return (
		<section className='section-container'>
			<header className='section-header'>News</header>
			<div className='news-container'>{newsItems}</div>
			<button className='sidepubButton news-more-button'> More News</button>
		</section>
	);
};

export default NewsSection;
