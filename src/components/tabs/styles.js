import styled from 'styled-components';
import { FONT_FAMILY } from '../../styles/fonts';

export const StyledTabNav = styled.span`
	border-bottom: ${({ $active }) => ($active ? ' 3px solid #FFF ' : 'none')};
	cursor: pointer;
	color: #fff;
	font-family: ${FONT_FAMILY.text};
	font-size: 16px;
	font-weight: 400;
	letter-spacing: 2.7px;	
	padding-bottom: 15px;
	margin-right: 15px;
`;
