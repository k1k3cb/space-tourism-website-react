import NavBar from '../navBar/NavBar';
import { StyledHeader, StyledLine, StyledLogoContainer } from './styles';

const Header = () => {
	return (
		<StyledHeader>
			<StyledLogoContainer>
				<img src='/assets/icon_header.svg' alt='' />
				<StyledLine></StyledLine>
			</StyledLogoContainer>

			<NavBar />
		</StyledHeader>
	);
};

export default Header;
