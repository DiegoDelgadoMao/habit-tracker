import { activityStructure } from './tamplate';
import { containerTable } from './utils/htmlElements';
import { TaskObject } from './utils/fields.dto';

enum STORAGE_NAME {
	CHORES = 'chores',
}

export const addTask = (task: string, id: string): void => {
	let response = localStorage.getItem(STORAGE_NAME.CHORES);
	if (response) {
		let result: TaskObject[] = JSON.parse(response);

		const newTask: TaskObject = {
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

		result.push(newTask);
		let newData = JSON.stringify(result);
		localStorage.setItem(STORAGE_NAME.CHORES, newData);
	} else {
		let taskObject: TaskObject = {
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
		let storage: TaskObject[] = [taskObject];
		const data = JSON.stringify(storage);
		localStorage.setItem(STORAGE_NAME.CHORES, data);
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
		let dataUpdate = data.map(task => {
			if (task.id === id) {
				return {
					...task,
					[change.day]: change.value,
				};
			}
			return task;
		});

		localStorage.setItem(STORAGE_NAME.CHORES, JSON.stringify(dataUpdate));
	}
};

export const resetEverything = (): void => {
	if (localStorage.length) {
		const CONTAINER_CHORES = document.querySelectorAll('.row-activities');
		CONTAINER_CHORES.forEach(element => {
			containerTable?.removeChild(element);
			localStorage.clear();
		});
	}
};
