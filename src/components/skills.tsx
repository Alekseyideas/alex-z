import React from 'react';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';
import { HtmlIcon } from './svgs/HtmlIcon';
import { CssIcon } from './svgs/CssIcon';
import { JsIcon } from './svgs/JsIcon';
import { SassIcon } from './svgs/SassIcon';
import { PugIcon } from './svgs/PugIcon';
import { ReactIcon } from './svgs/RectIcon';
import { AngularIcon } from './svgs/AngularIcon';
import { ReactRouterIcon } from './svgs/ReactRouterIcon';
import { SagaIcon } from './svgs/SagaIcon';
import { ReduxIcon } from './svgs/ReduxIcon';
import { SectionS } from './styles';

interface IProps {
	icon: React.ReactElement;
	title: string;
	id?: string;
}
export const IconBlock: React.FC<IProps> = ({ icon, title, id }) => {
	return (
		<IconTextWrapper id={id}>
			<IconWrapper>{icon}</IconWrapper>
			<TextWrapper>
				<p>{title}</p>
			</TextWrapper>
		</IconTextWrapper>
	);
};

export const Skills = () => {
	return (
		<SectionS>
			<Container>
				<h2>My Skills</h2>
				<Row>
					<WrapperS>
						<IconBlock icon={<HtmlIcon />} title="HTML5" />
						<IconBlock id="cssIcon" icon={<CssIcon />} title="CSS3" />
						<IconBlock icon={<JsIcon />} title="JS" />
						<IconBlock icon={<SassIcon />} title="Sass" />
						<IconBlock icon={<PugIcon />} title="Pug" />
						<IconBlock icon={<ReactIcon />} title="React" />
						<IconBlock icon={<ReactRouterIcon />} title="React Router" />
						<IconBlock icon={<ReduxIcon />} title="Redux" />
						<IconBlock icon={<SagaIcon />} title="Redux Saga" />
						<IconBlock icon={<AngularIcon />} title="AngularJS" />
					</WrapperS>
				</Row>
			</Container>
		</SectionS>
	);
};

const WrapperS = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
`;
const IconTextWrapper = styled.div`
	text-align: center;
	margin: 20px 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	&#cssIcon {
		svg {
			width: 80px;
			margin-top: -5px;
		}
	}
`;
const IconWrapper = styled.div`
	height: 70px;
	display: flex;
	align-items: center;
	img,
	svg {
		width: 50px;
		height: auto;
	}
`;

const TextWrapper = styled.p`
	background: white;
	width: 100px;
	margin-top: 10px;
	p {
		margin: 0;
		font-size: 13px;
	}
`;
