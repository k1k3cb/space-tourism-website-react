import Tabs from '../../components/tabs/Tabs';
import { CREW, CREW_TABS } from '../../constants/crew';
import useTabs from '../../hooks/useTabs';
import {
	StyledContainer,
	StyledLeftCol,
	StyledRightCol,
	StyledSectionTitle,
	StyledSectionTitleSpan,
	StyledText,
	StyledTitleName,
	StyledTitlePosition
} from './styles';

const Crew = () => {
	const { activeTab, handleTabActive } = useTabs(CREW_TABS);
	return (
		<StyledContainer>
			<StyledLeftCol>
				<StyledSectionTitle>
					<StyledSectionTitleSpan>02</StyledSectionTitleSpan> MEET THE CREW
				</StyledSectionTitle>
				<StyledTitlePosition>{CREW[activeTab].title}</StyledTitlePosition>
				<StyledTitleName>{CREW[activeTab].name}</StyledTitleName>
				<StyledText>{CREW[activeTab].text}</StyledText>
				<Tabs
					activeTab={activeTab}
					setActiveTab={handleTabActive}
					tabs={CREW_TABS}
				/>
			</StyledLeftCol>
			<StyledRightCol>
				<img src={CREW[activeTab].image} alt='' />
			</StyledRightCol>
		</StyledContainer>
	);
};

export default Crew;
