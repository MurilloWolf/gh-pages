import React from "react";

import {
	Container,
	PostTitle,
	Thumbnail,
	PostDescription,
	Wrapper,
	Link,
} from "./styles";

export default function Card(props) {
	return (
		<Container>
			<Wrapper>
				<Thumbnail>
					<img alt={props.title} src={props.thumbnail} />
				</Thumbnail>
				<PostTitle>
					<h3> {props.title} </h3>
					<p> {props.date}</p>
				</PostTitle>
				<PostDescription>
					is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy
					text ever since the 1500s
				</PostDescription>
				<Link href="#">Ler mais</Link>
			</Wrapper>
		</Container>
	);
}
