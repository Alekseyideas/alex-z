import * as React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image-es5';

const SLIDE_QUERY = graphql`
	query SLIDE_QUERY {
		bgImg: file(name: { eq: "main-bg" }, ext: { eq: ".jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1320) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

export const Slide = () => {
	const { bgImg } = useStaticQuery(SLIDE_QUERY);
	return (
		<SlideWrapperS
			Tag="section"
			className="res"
			fluid={bgImg.childImageSharp.fluid}
			backgroundColor="#000"
			style={{
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'cover',
			}}
		>
			<Container>
				<SlideTitleS>Hi, I'm Aleksey Zelenskiy</SlideTitleS>
				<SlideSubtitleS>I`m Full Stack Developer</SlideSubtitleS>
			</Container>
		</SlideWrapperS>
	);
};

const SlideWrapperS = styled(BackgroundImage)`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background: black;
	font-size: 50px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	text-align: center;
	&::after {
		filter: opacity(0);
	}
	&::before {
		filter: opacity(80%);
	}
`;

const SlideTitleS = styled.h1`
	color: white;
	font-size: 1em;
	margin: 0;
`;
const SlideSubtitleS = styled.h5`
	font-weight: 300;
	color: white;
	font-size: 0.5em;
	margin-top: 10px;
`;
