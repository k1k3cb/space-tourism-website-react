import { v4 } from 'uuid';

const MOON = {
	name: 'MOON',
	text: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
	data: [
		{ title: 'AVG. DISTANCE', content: '384,400 KM' },
		{ title: 'EST. TRAVEL TIME', content: '3 DAYS' }
	],
	image: 'assets/destination/image-moon.webp'
};

const MARS = {
	name: 'MARS',
	text: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
	data: [
		{ title: 'AVG. DISTANCE', content: '255 MIL. KM' },
		{ title: 'EST. TRAVEL TIME', content: '9 MONTHS' }
	],
	image: 'assets/destination/image-mars.webp'
};

const EUROPA = {
	name: 'EUROPA',
	text: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
	data: [
		{ title: 'AVG. DISTANCE', content: '628 MIL. KM' },
		{ title: 'EST. TRAVEL TIME', content: '3 YEARS' }
	],
	image: 'assets/destination/image-europa.webp'
};

const TITAN = {
	name: 'TITAN',
	text: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
	data: [
		{ title: 'AVG. DISTANCE', content: '1.6 BIL. KM' },
		{ title: 'EST. TRAVEL TIME', content: '7 YEARS' }
	],
	image: 'assets/destination/image-titan.webp'
};

export const DESTINATION = [MOON, MARS, EUROPA, TITAN];

export const DESTINATION_TABS = [
	{ id: v4(), text: 'MOON' },
	{ id: v4(), text: 'MARS ' },
	{ id: v4(), text: 'EUROPA' },
	{ id: v4(), text: 'TITAN' }
];
