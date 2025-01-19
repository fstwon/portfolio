import { ReactNode } from 'react';
import './projectDesTitle.style.scss';

interface IProps {
	children: ReactNode;
}

export function ProjectTitle({ children }: IProps) {
	return <div className='career_item_project_des_title'>{children}</div>;
}
