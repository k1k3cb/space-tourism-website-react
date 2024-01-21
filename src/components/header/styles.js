import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const StyledHeader = styled.header`
	display: flex;
	margin-top: 40px;
	position: absolute;
	justify-content: space-between;
	width: 100%;
	max-width: 1440px;
`;
export const StyledLogoContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: 50px;

	/* position: absolute;
    left: 83px;
    z-index: 8; */
`;

export const StyledLine = styled.div`
	width: 473px;
	height: 1px;
	opacity: 0.2515;
	background: ${COLORS.secondary};
`;
