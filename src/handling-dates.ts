import { format } from 'date-fns';
import lastDayOfWeek from 'date-fns/lastDayOfWeek';
import startOfWeek from 'date-fns/startOfWeek';
import addDays from 'date-fns/addDays';

export const getWeek = (): string => {
	const today = new Date();

	let startWeek = startOfWeek(today);
	let startDayOfWeek = addDays(new Date(startWeek), 1);
	const DayStart = format(new Date(startDayOfWeek), 'dd');

	let endWeek = lastDayOfWeek(today);
	let endDayOfWeek = addDays(new Date(endWeek), 1);
	const DayEnd = format(new Date(endDayOfWeek), 'dd');

	const month = format(new Date(today), 'MMMM');

	return `Tu semana va del ${DayStart} al ${DayEnd} de ${month}`;
};
