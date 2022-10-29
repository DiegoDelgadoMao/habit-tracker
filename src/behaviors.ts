import { activityStructure } from './tamplate';
import { containerTable } from './utils/htmlElements';
import { TaskObject } from './utils/fields.dto';
import { notificationSuccess } from './utils';

enum STORAGE_NAME {
	CHORES = 'chores',
}

export const addTask = (task: string, id: string): void => {
	let response = localStorage.getItem(STORAGE_NAME.CHORES);
	let newTask = {
		id,
		task,
		lun: false,
		mar: false,
		mie: false,
		jue: false,
		vie: false,
		sab: false,
		dom: false,
	};
	if (response) {
		let result: TaskObject[] = JSON.parse(response);

		result.push(newTask);
		let newData = JSON.stringify(result);
		localStorage.setItem(STORAGE_NAME.CHORES, newData);
	} else {
		let storage: TaskObject[] = [newTask];
		const data = JSON.stringify(storage);
		localStorage.setItem(STORAGE_NAME.CHORES, data);
	}
};

export const deleteTask = (id: string, element: HTMLDivElement): void => {
	containerTable.removeChild(element);

	const response = localStorage.getItem(STORAGE_NAME.CHORES) || '[]';
	let data: TaskObject[] = JSON.parse(response);

	if (data.length) {
		const updateData = data.filter(item => item.id !== id);
		localStorage.setItem(STORAGE_NAME.CHORES, JSON.stringify(updateData));
		notificationSuccess('Se eliminó correctamente 🎉');
	}
};

export const getData = (): void => {
	const response = localStorage.getItem(STORAGE_NAME.CHORES) || '[]';
	let data: TaskObject[] = JSON.parse(response);

	if (data.length) {
		data.forEach(element => {
			const { id, task, lun, mar, mie, jue, vie, sab, dom } = element;
			containerTable.appendChild(
				activityStructure({ id, task }, { lun, mar, mie, jue, vie, sab, dom })
			);
		});
	}
};

export const saveData = (
	id: string,
	change: { value: boolean; day: string }
): void => {
	const response = localStorage.getItem(STORAGE_NAME.CHORES);
	if (response) {
		const data: TaskObject[] = JSON.parse(response);

		let index = data.findIndex(task => task.id === id);
		let prevData = data[index];
		data[index] = {
			...prevData,
			[change.day]: change.value,
		};
		localStorage.setItem(STORAGE_NAME.CHORES, JSON.stringify(data));
	}
};

export const resetEverything = (): void => {
	if (localStorage.length) {
		const CONTAINER_CHORES = document.querySelectorAll('.row-activities');
		CONTAINER_CHORES.forEach(element => {
			containerTable?.removeChild(element);
			localStorage.clear();
		});
		notificationSuccess('Se limpió con éxito 🥳');
	}
};
