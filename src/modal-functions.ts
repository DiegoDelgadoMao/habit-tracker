import { $ID, notificationError, notificationSuccess } from './utils';

import { containerTable, MODAL, FORM_MODAL } from './utils/htmlElements';

import { activityStructure } from './tamplate';

import { addTask } from './behaviors';

import { v4 } from 'uuid';

export const showModal = (): void => MODAL.classList.add('show-modal');

export const hiddenModal = (): void => {
	FORM_MODAL.reset();
	MODAL.classList.remove('show-modal');
};

export const uploadTask = (): void => {
	const inputUser = $ID('input-user') as HTMLInputElement;

	let value: string = inputUser.value;
	if (!value.length) {
		notificationError('No agregaste ninguna tarea 🙁');
	} else {
		if (value.length > 20) value = value.slice(0, 20).padEnd(23, '.');
		const id = v4();

		containerTable.appendChild(
			activityStructure(
				{ id, task: value },
				{
					lun: false,
					mar: false,
					mie: false,
					jue: false,
					vie: false,
					sab: false,
					dom: false,
				}
			)
		);

		addTask(value, id);
		FORM_MODAL.reset();
		FORM_MODAL.focus();

		notificationSuccess('Tarea agregada con éxito 🥳');
	}
};
