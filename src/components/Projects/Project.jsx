import React from 'react';
import './Project.css';

const Project = () => {
	return (
		<div className='project-container'>
			<div className='project-wrapper'>
				<header className='project-header'>Research Project</header>
				<div className='research-project'>
					<header className='research-header'>
						Linking the Solo and Social Levels in Software Engineering
					</header>
					<div className='research-desc'>
						This is an NSF funded project that leverages a foraging-theoretical
						approach to understanding and improving the software developers’
						information seeking activities, such as requirements tracing, code
						refactoring, and software reuse.
						<p className='research-members'>
							<span className='research-member-header'>
								Project members include:
							</span>
							Xiaoyu Jin, Wentao Wang, Xuanyi Lin, Mona Assarandarban, Darius
							Cepulis, and Arushi Gupta.
						</p>
						<div className='research-publication'>
							<span className='research-member-header'>
								Publications produced as a result of this research include:
							</span>
							<ul className='research-publication-list'>
								<li>
									Darius Cepulis and Nan Niu, “Creating Socio-Technical Patches
									for Information Foraging: A Requirements Traceability Case
									Study”, IEEE Symposium on Visual Languages and Human-Centric
									Computing (VL/HCC 2018), Lisbon, Portugal, October 1-4, 2018,
									pages 17-21.
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='research-project'>
					<header className='research-header'>
						Automated Generation of Attacks Against x86-Based Embedded System
						Platforms
					</header>
					<div className='research-desc'>
						This is a DAGSI funded project that explores automated ways to
						generate attacks against x86-embedded system platforms.
						<p className='research-members'>
							<span className='research-member-header'>
								Project members include:
							</span>
							Tyler Westland and Dr. Rashmi Jha.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
