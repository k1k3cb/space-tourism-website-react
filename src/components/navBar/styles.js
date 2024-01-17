import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_FAMILY, FONT_SIZE } from '../../styles/fonts';

export const StyledNav = styled.nav`
	width: 830px;
	height: 96px;
	background-color: ${COLORS.dark};
	/* backdrop-filter: blur(40.774227142333984px); */
	color: ${COLORS.secondary};
	font-family: ${FONT_FAMILY.text};
	font-size: ${FONT_SIZE.navText};
	font-weight: 400;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const StyledUl = styled.ul`
	display: flex;
	gap: 50px;
`;

export const StyledSpan = styled.span`
	font-weight: 700;
	letter-spacing: 2.7px;
	margin-right: 10px;
`;
