import React from 'react';
import Markdown from 'react-markdown';

import type { Personal } from '@constants/getPersonalSections';
import icons from '@constants/icons';

import './AboutMeStyle.css';

const AboutMeSection = ({ data, children }: { data: Personal; children?: React.ReactNode }) => {
	if (data.description.length < 1) {
		return <></>;
	}

	return (
		<div className="aboutMe-container" style={data.id === 0 ? {} : { marginTop: 10 }}>
			<img src={icons.checkPoint} className="checkPoint-icon" />
			<div className="content-container">
				<h2 className="aboutMe-title">{data.title}</h2>
				<div className="aboutMe-description">
					<Markdown>{data.description}</Markdown>
				</div>
				{children}
			</div>
		</div>
	);
};

export default AboutMeSection;
