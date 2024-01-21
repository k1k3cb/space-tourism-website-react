import Tabs from '../../components/tabs/Tabs';
import { TECHNOLOGY, TECHNOLOGY_TABS } from '../../constants/technology';
import useTabs from '../../hooks/useTabs';
import {
	StyledContainer,
	StyledLeftCol,
	StyledRightCol,
	StyledSectionTitle,
	StyledSectionTitleSpan,
	StyledSubTitle,
	StyledText,
	StyledTitle
} from './styles';

const Technology = () => {
	const { activeTab, handleTabActive } = useTabs(0);
	return (
		<StyledContainer>
			<StyledLeftCol>
				<StyledSectionTitle>
					<StyledSectionTitleSpan>03</StyledSectionTitleSpan>SPACE LAUNCH 101
				</StyledSectionTitle>
				<StyledSubTitle>THE TERMINOLOGY…</StyledSubTitle>
				<StyledTitle>{TECHNOLOGY[activeTab].title}</StyledTitle>

				<StyledText>{TECHNOLOGY[activeTab].text}</StyledText>
				<Tabs
					activeTab={activeTab}
					setActiveTab={handleTabActive}
					tabs={TECHNOLOGY_TABS}
				/>
			</StyledLeftCol>
			<StyledRightCol>
				<img src={TECHNOLOGY[activeTab].image} alt='' />
			</StyledRightCol>
		</StyledContainer>
	);
};

export default Technology;
