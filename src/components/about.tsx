import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { SectionS } from './styles';
import { EmailIcon } from './svgs/EmailIcon';
import { COLORS } from '../utils/colors';
import { PhoneIcon } from './svgs/PhoneIcon';
import { Skills } from './skills';

export const About = () => {
	return (
		<SectionS>
			<Container>
				<Row>
					<Col>
						<TitleSection>Hi There!</TitleSection>
						<p style={{ marginTop: '30px' }}>
							I am a developer with 5+ years of experience in building websites
							and applications for various companies. 2+ years of experience in
							web design. Responsible for working on a range of projects. I’m a
							team player and hard-working person, always focused on the result
							and quality of my work.
						</p>

						<Row>
							<Col>
								<WrapperIconTextS href="mailto:alekseyideas@gmail.com">
									<EmailIcon />
									<LabelS>Email: </LabelS>
									<span>alekseyideas@gmail.com</span>
								</WrapperIconTextS>
							</Col>
							<Col>
								<WrapperIconTextS href="tel:+380666632685" phone>
									<PhoneIcon />
									<LabelS>Phone: </LabelS>
									<span>+38 066 66 326 85</span>
								</WrapperIconTextS>
							</Col>
						</Row>
					</Col>
					<Col />
				</Row>
			</Container>
		</SectionS>
	);
};

const WrapperIconTextS = styled.a<{ phone?: boolean }>`
	display: flex;
	align-items: center;
	font-size: 14px;
	color: grey;
	svg {
		width: 20px;
		height: 20px;
		margin-right: 10px;
		fill: ${COLORS.primary};
	}

	${({ phone }) =>
		phone
			? `
	svg {
		width: 15px;
		height: 15px;
	}
		
		`
			: null}
`;

const LabelS = styled.span`
	color: ${COLORS.primary};
	margin-right: 4px;
`;
const TitleSection = styled.h2``;
