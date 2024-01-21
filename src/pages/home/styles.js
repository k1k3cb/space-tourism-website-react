import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

export const StyledContainer = styled.div`
	background-image: url('assets/home/background-home-desktop.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	height: 100vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const StyledTextDiv = styled.div`
	width: 444px;
	margin-top: 200px;
	padding-left: 100px;
`;

export const StyledH5 = styled.h5`
	font-family: ${FONT_FAMILY.text};
	font-size: 20px;
	margin: 0;
	color: ${COLORS.primary};
`;

export const StyledH1 = styled.h1`
	font-family: ${FONT_FAMILY.heading};
	font-size: ${FONT_SIZE.h1};
	margin-block: 24px;
	color: ${COLORS.secondary};
`;

export const StyledText = styled.div`
	font-family: ${FONT_FAMILY.text};
	font-size: ${FONT_SIZE.bodyText};
	margin: 0;
	color: ${COLORS.primary};
	line-height: 32px;
`;

export const StyledExplore = styled.h4`
	font-family: ${FONT_FAMILY.heading};
	font-size: ${FONT_SIZE.h4};
	margin: 0;
	color: ${COLORS.dark};
	width: 274px;
	height: 274px;
	border-radius: 274px;
	background: ${COLORS.secondary};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 160px;
	margin-top: 300px;
	transition: all 0.8s ease;

	&:hover {
		border-radius: 50%;
		box-shadow: 0 0 0 60px ${COLORS.secondary}77;
	}
`;
