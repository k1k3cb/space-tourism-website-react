import { v4 } from 'uuid';

export const MENU = [
	{ id: v4(), number: '00', name: 'HOME', path: '/' },
	{ id: v4(), number: '01', name: 'DESTINATION', path: '/destination' },
	{ id: v4(), number: '02', name: 'CREW', path: '/crew' },
	{ id: v4(), number: '03', name: 'TECHNOLOGY', path: '/technology' }
];
