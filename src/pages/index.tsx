import React from 'react';
import SEO from '../components/seo';
import { Slide, About, Layout, Skills } from '../components';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Slide />
		<About />
		<Skills />
	</Layout>
);

export default IndexPage;
