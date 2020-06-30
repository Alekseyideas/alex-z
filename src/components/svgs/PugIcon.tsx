import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const PUG_QUERY = graphql`
	query PUG_QUERY {
		img: file(relativePath: { eq: "pug.svg" }) {
			publicURL
		}
	}
`;

export const PugIcon = () => {
	const { img } = useStaticQuery(PUG_QUERY);

	return <img src={img.publicURL} alt="pug Icon" width={40} height={40} />;
};
