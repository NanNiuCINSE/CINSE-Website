import React from 'react';
import './Members.css';
import * as MembersData from './Members.data';

const Members = () => {
	const { membersData } = MembersData;

	let memberDiv = membersData.map((member, index) => {
		return (
			<div className='card-container' key={index}>
				<div className='card-image'>
					<img className='profile-image' src={member.imageSource} alt='' />
				</div>
				<div className='card-info'>
					<h1 className='profile-name'>
						{member.firstname} {member.lastname}
					</h1>
					<p className='profile-position'>{member.title}</p>
					<div className='profile-body'>
						{member.description}
						<p className='profile-work'>
							Please explore the following articles to learn more about{' '}
							{member.firstname}'s work:
						</p>
						<ul>
							{member.research.map((item, index) => {
								return (
									<li key={index}>
										<a
											target='blank'
											className='profile-research'
											href={item.link}
										>
											<em>"{item.title}"</em>
										</a>
										, {item.published}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		);
	});

	return <div className='members-container'>{memberDiv}</div>;
};

export default Members;
