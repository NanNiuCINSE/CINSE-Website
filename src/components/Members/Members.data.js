import stud1 from '../../resources/Images/stud1.jpg';
import stud2 from '../../resources/Images/stud2.png';
import stud3 from '../../resources/Images/stud3.png';
export const membersData = [
	{
		firstname: 'Xuanyi',
		lastname: 'Lin',
		title: 'Ph.D Student',
		description: `Xuanyi Lin is interested in sustainable development of scientific
    software. His thesis title is: “Creating and Deploying Metamorphic
    Services for SWMM Community Based on Function as a Service (FaaS)
    Architecture”.`,
		research: [
			{
				link: 'https://ieeexplore.ieee.org/document/8533366',
				title: 'Exploratory Metamorphic Testing in Science Software',
				published: 'Computing in Science and Engineering',
			},
		],
		imageSource: stud1,
	},
	{
		firstname: 'Mona',
		lastname: 'Assarandarban',
		title: 'Ph.D Student (Former Members)',
		description: `Mona Assarandarban is interested in social information foraging
        theory applied in software and systems requirements engineering,
        including requirements traceability and requirements prioritization.`,
		research: [
			{
				link: 'https://ieeexplore.ieee.org/document/8506379',
				title: `Requirements Socio-Technical Graphs for Managing
                Practitioners’ Traceability Questions`,
				published: 'IEEE Trans. Comput. Social Systems',
			},
		],
		imageSource: stud2,
	},
	{
		firstname: 'Wentao',
		lastname: 'Wang',
		title: 'Ph.D Student',
		description: `Wentao Wang worked on secure requirements engineering in agile and
        open-source software development His Ph.D. thesis is on: “A Security
        Requirements Management Framework for Open-Source Software
        Projects”.`,
		research: [
			{
				link: 'https://ieeexplore.ieee.org/document/8610121',
				title: `Complementarity in Requirements Tracing`,
				published: 'IEEE Trans. Cybernetics',
			},
			{
				link: 'https://ieeexplore.ieee.org/document/8515085',
				title: `In-Place Traceability for Automated Production Systems: A Survey of PLC and SysML Tools`,
				published: 'IEEE Trans. Industrial Informatics',
			},
		],
		imageSource: stud3,
	},
];
