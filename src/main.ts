import './styles/index.scss';
import { showModal, hiddenModal, uploadTask } from './modal-functions';

import {
	ADD_ACTIVITY,
	CLOSE_MODAL,
	SUBMIT_ACTIVITY,
	HTML_WEEK,
	RESET_BTN,
	FORM_MODAL,
} from './utils/htmlElements';

import { getWeek } from './handling-dates';
import { getData, resetEverything } from './behaviors';

document.addEventListener('DOMContentLoaded', () => {
	getData();
	HTML_WEEK.innerHTML = getWeek();
});

ADD_ACTIVITY.addEventListener('click', () => showModal());

FORM_MODAL.addEventListener('submit', event => event.preventDefault());

CLOSE_MODAL.addEventListener('click', () => hiddenModal());

SUBMIT_ACTIVITY.addEventListener('click', () => uploadTask());

RESET_BTN.addEventListener('click', () => resetEverything());
