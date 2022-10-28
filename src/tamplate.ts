import { DaysOfTheWeek, ExtraInfo } from './utils/fields.dto';
import { saveData } from './behaviors';

export const activityStructure = (
	extra: ExtraInfo,
	data: DaysOfTheWeek
): HTMLFormElement => {
	const { id, task } = extra;

	const formElement = document.createElement('form');
	formElement.setAttribute('name', 'miFormulario');
	formElement.classList.add('row-activities');

	const paragraph = document.createElement('p');
	paragraph.innerHTML = task;

	formElement.append(paragraph);

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

		formElement.append(input);
	});

	return formElement;
};
