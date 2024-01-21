import styled from 'styled-components';

export const StyledContainer = styled.div`
	background-image: url(public/assets/crew/background-crew-desktop.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	height: 100vh;
	display: flex;
	align-items: flex-end;
	padding-inline: 100px;
`;

export const StyledLeftCol = styled.div`
	flex: 60%;
	padding-bottom: 94px;
`;

export const StyledRightCol = styled.div`
	flex: 40%;
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
	margin-bottom: 170px;
`;

export const StyledSectionTitleSpan = styled.span`
	opacity: 0.25;
	margin-right: 24px;
`;
export const StyledTitlePosition = styled.div`
	color: #fff;

	font-family: Bellefair;
	font-size: 32px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	text-transform: uppercase;
	opacity: 0.5042;
`;
export const StyledTitleName = styled.div`
	color: #fff;

	font-family: Bellefair;
	font-size: 56px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	text-transform: uppercase;
	margin-top: 20px;
`;

export const StyledText = styled.div`
	width: 444px;
	color: #d0d6f9;
	font-family: Barlow;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px; /* 177.778% */
	margin-bottom: 120px;
	margin-top: 30px;
`;
