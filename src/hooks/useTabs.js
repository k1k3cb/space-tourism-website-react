import { useState } from 'react';

const useTabs = tabs => {
	const [activeTab, setActiveTab] = useState(0);

	const handleTabActive = tabIndex => {
		setActiveTab(tabIndex);
		// console.log('valor index: ' + tabIndex);
	};

	return {
		activeTab,
		handleTabActive,
		tabs
	};
};

export default useTabs;
