export interface TaskObject {
	id: string;
	task: string;
	lun: boolean;
	mar: boolean;
	mie: boolean;
	jue: boolean;
	vie: boolean;
	sab: boolean;
	dom: boolean;
}

export interface DaysOfTheWeek extends Omit<TaskObject, 'id' | 'task'> {}

export interface ExtraInfo extends Pick<TaskObject, 'id' | 'task'> {}
