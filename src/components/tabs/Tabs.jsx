import { StyledTabNav } from './styles';

const Tabs = ({ activeTab, setActiveTab, tabs }) => {
	// console.log('tabActive ' + activeTab);

	return (
		<div>
			{tabs.map((tab, index) => {
				// console.log('tab: ', tab, 'tab: ', tab);
				return (
					<StyledTabNav
						key={tab.id}
						onClick={() => handleTabActive(index, setActiveTab)}
						$active={index === activeTab}
					>
						{tab.text}
					</StyledTabNav>
				);
			})}
		</div>
	);
};

const handleTabActive = (tabIndex, setTabActive) => {
	setTabActive(tabIndex);
	console.log('valor index: ' + tabIndex);
};

export default Tabs;
