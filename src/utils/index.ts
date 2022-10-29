import Toastify from 'toastify-js';

export const $ = (element: string) => document.querySelector(element);
export const $ID = (element: string) => document.getElementById(element);

export const notificationError = (text: string): void => {
	Toastify({
		text,
		duration: 3000,
		gravity: 'top',
		position: 'right',
		stopOnFocus: true,
		className: 'error',
	}).showToast();
};

export const notificationSuccess = (text: string): void => {
	Toastify({
		text,
		duration: 3000,
		gravity: 'top',
		position: 'right',
		stopOnFocus: true,
		className: 'success',
	}).showToast();
};
