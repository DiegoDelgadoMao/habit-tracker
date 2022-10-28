import { $ID } from './';
import { $ } from './';

export const ADD_ACTIVITY = $ID('add-activity') as HTMLButtonElement;

export const CLOSE_MODAL = $ID('close') as HTMLButtonElement;

export const SUBMIT_ACTIVITY = $ID('submit-activity') as HTMLButtonElement;

export const HTML_WEEK = $ID('week') as HTMLElement;

export const RESET_BTN = $ID('reset-btn') as HTMLElement;

export const containerTable = $ID('container-table') as HTMLDivElement;

export const MODAL = $('.modal') as HTMLDivElement;

export const FORM_MODAL = document.querySelector(
	'.form-activities'
) as HTMLFormElement;
