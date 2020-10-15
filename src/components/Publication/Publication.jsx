import React from 'react';
import './Publication.css';

const Publication = () => {
	return (
		<div className='publication-container'>
			<div className='publication-wrapper'>
				<header className='publication-header'>Publications</header>
				<section className='publication-section'>
					<header className='publication-section-header'>
						Recently Accepted
					</header>
					<div className='publication-item-container'>
						<ul className='publication-item'>
							<li className='publication-listitem'>
								Wentao Wang, Nan Niu, Mounifah Alenazi, Juha Savolainen,
								Zhendong Niu, Jing-Ru C. Cheng, and Li Da Xu, “Complementarity
								in Requirements Tracing”, IEEE Transactions on Cybernetics.
							</li>
							<li className='publication-listitem'>
								Xuanyi Lin, Michelle Simon, and Nan Niu, “Exploratory
								Metamorphic Testing for Scientific Software”, Computing in
								Science & Engineering.
							</li>
						</ul>
					</div>
				</section>
				<section className='publication-section'>
					<header className='publication-section-header'>
						Journal Articles
					</header>
					<div className='publication-item-container'>
						<ul className='publication-item'>
							<li className='publication-listitem'>
								Wentao Wang, Nan Niu, Mounifah Alenazi, and Li Da Xu, “In-Place
								Traceability for Automated Production Systems: A Survey of PLC
								and SysML Tools”, IEEE Transactions on Industrial Informatics,
								Volume: 15, Issue: 6, June 2019, pages 3155-3162.
							</li>
							<li className='publication-listitem'>
								Nan Niu, Sjaak Brinkkemper, Xavier Franch, Jari Partanen, and
								Juha Savolainen, “Requirements Engineering and Continuous
								Deployment”, IEEE Software, Volume: 35, Issue: 2, March/April
								2018, pages 86-90.
							</li>
							<li className='publication-listitem'>
								Ally S. Nyamawe, Hui Liu, Zhendong Niu, Wentao Wang, and Nan
								Niu, “Recommending Refactoring Solutions Based on Traceability
								and Code Metrics”, IEEE Access, Volume: 6, 2018, pages
								49460-49475.
							</li>
						</ul>
					</div>
				</section>
			</div>
		</div>
	);
};
export default Publication;
