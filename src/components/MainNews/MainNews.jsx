import React from 'react';
import * as MainNewsData from './MainNews.data';
import './MainNews.css';

const MainNews = () => {
	let { mainNews } = MainNewsData;

	let mainNewsContent = mainNews.map((newsItem, index) => {
		return (
			<section key={index} className='mainnews-section'>
				<header className='mainnews-section-header'>{newsItem.year}</header>
				<div className='mainnews-item-container'>
					{newsItem.news.map((item, index) => {
						return (
							<div key={index} className='mainnews-item'>
								<div className='mainnews-item-imgholder'>
									{item.newsImage !== null ? (
										<img className='mainnews-img' src={item.newsImage} />
									) : (
										<div></div>
									)}
								</div>
								<h2 className='mainnews-item-header'>{item.newsHeading}</h2>
							</div>
						);
					})}
				</div>
			</section>
		);
	});
	return (
		<div className='mainnews-container'>
			<div className='mainnews-wrapper'>
				<header className='mainnews-header'>News</header>
				{mainNewsContent}
			</div>
		</div>
	);
};

export default MainNews;
