import { DaysOfTheWeek, ExtraInfo } from './utils/fields.dto';
import { saveData, deleteTask } from './behaviors';

import trashIconImg from './assets/trash-icon.svg';

export const activityStructure = (
	extra: ExtraInfo,
	data: DaysOfTheWeek
): HTMLDivElement => {
	const { id, task } = extra;

	const containerChores = document.createElement('div');
	containerChores.classList.add('row-activities');

	const paragraph = document.createElement('p');
	paragraph.innerHTML = task;

	const trashIcon = document.createElement('img');
	trashIcon.setAttribute('src', trashIconImg);

	trashIcon.addEventListener('click', e => {
		const iconElement = e.target as HTMLImageElement;
		const parent = iconElement.parentElement as HTMLDivElement;
		deleteTask(id, parent);
	});
	containerChores.append(trashIcon);
	containerChores.append(paragraph);

	const transform = Object.entries(data);

	transform.forEach(element => {
		const input = document.createElement('input');
		input.setAttribute('type', 'checkbox');
		input.setAttribute('name', element[0]);
		input.setAttribute(`${element[1] ? 'checked' : 'value'}`, '');

		input.addEventListener('change', e => {
			const inputChecked = e.target as HTMLFormElement;
			let value = inputChecked.checked;
			let day = element[0];

			saveData(id, { value, day });
		});

		containerChores.append(input);
	});

	return containerChores;
};
