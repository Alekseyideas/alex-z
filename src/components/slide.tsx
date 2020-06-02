import * as React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const Slide = () => {
	return (
		<SlideWrapperS>
			<Container>
				<SlideTitleS>Hi, I'm Aleksey Zelenskiy</SlideTitleS>
				<SlideSubtitleS>I`m Full Stack Developer</SlideSubtitleS>
			</Container>
		</SlideWrapperS>
	);
};

const SlideWrapperS = styled.section`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background: black;
	font-size: 50px;
`;

const SlideTitleS = styled.h1`
	color: white;
	font-size: 1em;
`;
const SlideSubtitleS = styled.h5`
	font-weight: 300;
	color: white;
	font-size: 0.5em;
`;
