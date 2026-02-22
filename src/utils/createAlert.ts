import { Bounce, toast } from 'react-toastify';

type AlertType = 'info' | 'success' | 'warning' | 'error';

const createAlert = (type: AlertType, message: string) => {
	return toast[type](message, {
		position: 'top-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'light',
		transition: Bounce,
	});
};

export default createAlert;
