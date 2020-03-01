import styled from "styled-components";

export const Container = styled.div`
	width: 350px;
	height: 500px;
	margin: 1rem 0;

	background: ${props => props.theme.colors.secondary};

	:hover {
		transform: scale(1.115);
		transition: all 0.2s ease-out;
	}
`;

export const Wrapper = styled.div`
	height: 100%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-evenly;
	align-items: center;
	margin: 0rem 1rem;
`;

export const PostTitle = styled.div`
	margin: -2rem 0;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
	width: 100%;
	align-items: center;
	h3 {
		color: ${props => props.theme.colors.text};
		font-weight: lighter;

		font-size: 20px;
	}

	p {
		color: #ddd;
		font-size: 12px;
	}
`;

export const PostDescription = styled.p`
	color: #eee;
	font-size: 18px;
	width: 100%;
	padding: 1rem;
`;

export const Thumbnail = styled.div`
	height: 200px;
	width: 300px;

	img {
		width: 100%;
		height: 100%;
	}
`;

export const Link = styled.a`
	text-decoration: none;
	cursor: pointer;
	color: ${props => props.theme.colors.primary};

	:hover {
		color: ${props => props.theme.colors.primaryHover};
		transition: all 0.125s ease-in-out;
	}
`;
