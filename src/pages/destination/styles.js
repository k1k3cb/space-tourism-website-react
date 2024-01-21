import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const StyledContainer = styled.div`
	background-image: url('assets/destination/background-destination-desktop.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	color: ${COLORS.secondary};
	padding-inline: 150px;
`;
export const StyledLeftCol = styled.div`
	flex: 70%;
`;
export const StyledRightCol = styled.div`
	flex: 40%;
`;

export const StyledTitle = styled.h2`
	color: ${COLORS.secondary};
	font-family: Bellefair;
	font-size: 100px;
	font-weight: 400;
	margin-block: 40px;
`;
export const StyledSectionTitle = styled.h2`
	color: #fff;
	font-family: 'Barlow Condensed';
	font-size: 28px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 4.725px;
	text-transform: uppercase;
	margin-bottom: 80px;
`;

export const StyledSectionTitleSpan = styled.span`
	opacity: 0.25;
	margin-right: 24px;
`;
export const StyledText = styled.p`
	color: ${COLORS.primary};
	width: 444px;
	font-family: Barlow;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px;
	padding-bottom: 10px;
	border-bottom: 1px solid #383b4b;
`;

export const StyledFooterDiv = styled.div`
	display: flex;
	gap: 80px;
`;

export const StyledFooterTitle = styled.h4`
	font-family: 'Barlow Condensed';
	color: ${COLORS.primary};
	font-size: 14px;
	font-weight: 400;
	letter-spacing: 2.362px;
	text-transform: uppercase;
`;

export const StyledFooterText = styled.p`
	color: ${COLORS.secondary};
	font-family: Bellefair;
	font-size: 28px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	text-transform: uppercase;
`;
