import type { Personal } from '@constants/aboutMe';
import icons from '@constants/icons';
import './AboutMeStyle.css';

const AboutMeSection = ({ data }: { data: Personal }) => {
	return (
		<div className="aboutMe-container" style={data.id === 0 ? {} : { marginTop: 10 }}>
			<img src={icons.checkPoint} className="checkPoint-icon" />
			<div className="content-container">
				<h2 className="aboutMe-title">{data.title}</h2>
				<p className="aboutMe-description">{data.description}</p>
			</div>
		</div>
	);
};

export default AboutMeSection;
