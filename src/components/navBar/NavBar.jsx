import { NavLink } from 'react-router-dom';
import { MENU } from '../../constants/menu';
import { StyledNav, StyledSpan, StyledUl } from './styles';

const NavBar = () => {
	return (
		<StyledNav>
			<StyledUl>
				{MENU.map(menuItem => {
					// console.log(menuItem);
					return (
						<li key={menuItem.id}>
							<StyledSpan>{menuItem.number}</StyledSpan>
							<NavLink to={menuItem.path}>{menuItem.name}</NavLink>
						</li>
					);
				})}
			</StyledUl>
		</StyledNav>
	);
};

export default NavBar;
