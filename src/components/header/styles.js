import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const StyledHeader = styled.header`
	display: flex;
	margin-top: 40px;
	position: absolute;
`;
export const StyledLogoContainer = styled.div`
	display: flex;
	align-items: center;
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
