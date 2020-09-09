import React from 'react';
import './News.css';

import * as NewsData from './News.data';
const News = () => {
	const { newsData, newsHeader } = NewsData;
	const newsItems = newsData.slice(0, 5).map((item, index) => {
		return (
			<li className='news-item' key={index}>
				{item.news}
			</li>
		);
	});

	return (
		<aside className='news-section'>
			<div className='news-container'>
				<header className='news-header'>{newsHeader}</header>
				<div className='news'>
					<ul>{newsItems}</ul>
				</div>
			</div>
		</aside>
	);
};

export default News;
