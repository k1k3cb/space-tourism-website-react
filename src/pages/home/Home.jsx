import { StyledContainer, StyledExplore, StyledH1, StyledH5, StyledText, StyledTextDiv } from './styles';

const Home = () => {
	return (
		<StyledContainer>
			<StyledTextDiv>
				<StyledH5>SO, YOU WANT TO TRAVEL TO</StyledH5>
				<StyledH1>SPACE</StyledH1>
				<StyledText>
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</StyledText>
			</StyledTextDiv>
			<StyledExplore>EXPLORE</StyledExplore>
		</StyledContainer>
	);
};

export default Home;
