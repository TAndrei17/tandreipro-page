import { useState, useEffect } from 'react';

type Device = {
	windowWidth: number;
	isMobile: boolean;
	isTablet: boolean;
	isDesktop: boolean;
};

const useDeviceType = (breakpoint: number = 768): Device => {
	const [width, setWidth] = useState<number>(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return {
		windowWidth: width,
		isMobile: width < breakpoint,
		isTablet: width >= breakpoint && width < 1024,
		isDesktop: width >= 1024,
	};
};

export default useDeviceType;
