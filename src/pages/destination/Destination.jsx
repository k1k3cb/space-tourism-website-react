import {
	StyledContainer,
	StyledFooterDiv,
	StyledFooterText,
	StyledFooterTitle,
	StyledLeftCol,
	StyledRightCol,
	StyledSectionTitle,
	StyledSectionTitleSpan,
	StyledText,
	StyledTitle
} from './styles';
import Tabs from '../../components/tabs/Tabs';
import { DESTINATION, DESTINATION_TABS } from '../../constants/destination';
import useTabs from '../../hooks/useTabs';

const Destination = () => {
	const { activeTab, handleTabActive } = useTabs(DESTINATION_TABS);

	return (
		<StyledContainer>
			<StyledLeftCol>
				<StyledSectionTitle>
					<StyledSectionTitleSpan>01</StyledSectionTitleSpan> PICK YOUR DESTINATION
				</StyledSectionTitle>
				<img src={DESTINATION[activeTab].image} alt='' />
			</StyledLeftCol>
			<StyledRightCol>
				<Tabs
					activeTab={activeTab}
					setActiveTab={handleTabActive}
					tabs={DESTINATION_TABS}
				/>
				<StyledTitle>{DESTINATION[activeTab].name}</StyledTitle>
				<StyledText>{DESTINATION[activeTab].text}</StyledText>
				<StyledFooterDiv>
					<div>
						<StyledFooterTitle>
							{DESTINATION[activeTab].data[0].title}
						</StyledFooterTitle>
						<StyledFooterText>
							{DESTINATION[activeTab].data[0].content}
						</StyledFooterText>
					</div>
					<div>
						<StyledFooterTitle>
							{DESTINATION[activeTab].data[1].title}
						</StyledFooterTitle>
						<StyledFooterText>
							{DESTINATION[activeTab].data[1].content}
						</StyledFooterText>
					</div>
				</StyledFooterDiv>
			</StyledRightCol>
		</StyledContainer>
	);
};

export default Destination;
