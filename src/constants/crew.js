import { v4 } from 'uuid';

const DOUGLAS = {
	title: 'COMMANDER',
	name: 'DOUGLAS HURLEY',
	text: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
	image: 'assets/crew/image-douglas-hurley.webp'
};

const MARK = {
	title: 'MISSION SPECIALIST',
	name: 'MARK SHUTTLREWORTH',
	text: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
	image: 'assets/crew/image-mark-shuttleworth.webp'
};

const VICTOR = {
	title: 'PILOT',
	name: 'VICTOR GLOVER',
	text: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
	image: 'assets/crew/image-victor-glover.webp'
};

const ANOUSHES = {
	title: 'FLIGHT ENGINEER',
	name: 'ANOUSHES ANSARI',
	text: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.  ',
	image: 'assets/crew/image-anousheh-ansari.webp'
};

export const CREW = [DOUGLAS, MARK, VICTOR, ANOUSHES];

export const CREW_TABS = [
	{ id: v4(), text: '1' },
	{ id: v4(), text: ' 2' },
	{ id: v4(), text: '3' },
	{ id: v4(), text: '4' }
];
