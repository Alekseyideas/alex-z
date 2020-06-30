import React, { ReactElement } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss';

interface IProps {
	children: ReactElement | ReactElement[];
}
export const Layout: React.FC<IProps> = ({ children }) => {
	return <main>{children}</main>;
};
