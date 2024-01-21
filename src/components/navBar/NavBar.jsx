import { MENU } from '../../constants/menu';
import { StyledNav, StyledNavLink, StyledSpan, StyledUl } from './styles';

const NavBar = () => {
	return (
		<StyledNav>
			<StyledUl>
				{MENU.map(menuItem => {
					// console.log(menuItem);
					return (
						<li key={menuItem.id}>
							<StyledSpan>{menuItem.number}</StyledSpan>
							<StyledNavLink to={menuItem.path} active='active'>
								{menuItem.name}
							</StyledNavLink>
						</li>
					);
				})}
			</StyledUl>
		</StyledNav>
	);
};

export default NavBar;
