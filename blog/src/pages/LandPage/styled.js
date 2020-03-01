import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 70vh;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
`;

export const Welcome = styled.div`
	figure {
		width: 100%;
		height: auto;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;

		img {
			width: 256px;
			height: 256px;
		}
	}

	h1 {
		margin: -1rem;
		color: white;
		font-size: 58px;
	}

	h3 {
		margin: 2rem;
		color: #eee;
		font-size: 24px;
		text-align: center;
		font-weight: lighter;
	}
`;

export const SocialLinks = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-evenly;
	align-items: center;

	height: 50px;

	a {
		color: ${props => props.theme.colors.secondary};
		text-decoration: none;
		cursor: inherit;
		width: 100%;
		height: 100%;

		display: flex;
		justify-content: center;
		align-items: center;
		* {
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}
		*:hover {
			cursor: pointer;
			color: ${props => props.theme.colors.primary};
			box-shadow: 0 0 8px ${props => props.theme.colors.primary};
			transition: 0.2s all ease-in-out;
		}
	}
`;

export const Posts = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CardsContainer = styled.div`
	width: 1200px;
	height: 100%;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
	align-items: center;
`;
