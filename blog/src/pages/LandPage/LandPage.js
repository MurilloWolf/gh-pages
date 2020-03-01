import React from "react";
import logo from "../../public/imgs/logo.svg";
import post1 from "../../public/imgs/post1.jpg";
import post2 from "../../public/imgs/post2.jpeg";
import post3 from "../../public/imgs/post3.jpeg";
import post4 from "../../public/imgs/post4.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../components/Card";
import {
	faFacebook,
	faGithub,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {
	Container,
	Welcome,
	SocialLinks,
	CardsContainer,
	Posts,
} from "./styled";
const LandPage = () => {
	return (
		<>
			<Container>
				<Welcome>
					<figure>
						<img alt="logo do blog " src={logo} />
					</figure>
					<h1>Welcome to my personal blog</h1>
					<h3>Murillo Wolf</h3>
					<SocialLinks>
						<a
							href="https://www.facebook.com/murillo.wolfcavalheiro"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faFacebook} size={"3x"} />
						</a>
						<a
							href=" https://www.instagram.com/murillowolf "
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faInstagram} size={"3x"} />
						</a>
						<a
							href="https://github.com/MurilloWolf"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faGithub} size={"3x"} />
						</a>
					</SocialLinks>
				</Welcome>
			</Container>
			<Posts>
				<CardsContainer>
					<Card
						thumbnail={post1}
						date={"02/03/2020"}
						title={"Aprenda JavaScript"}
					/>
					<Card
						thumbnail={post2}
						date={"02/02/2020"}
						title={"Aprenda NodeJs"}
					/>
					<Card
						thumbnail={post3}
						date={"01/01/2020"}
						title={"Aprenda ReactJs"}
					/>
					<Card
						thumbnail={post4}
						date={"04/12/2019"}
						title={"Aprenda ReactNative"}
					/>
					<Card
						thumbnail={post1}
						date={"23/11/2019"}
						title={"Aprenda PHP"}
					/>
				</CardsContainer>
			</Posts>
		</>
	);
};

export default LandPage;
