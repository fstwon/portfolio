import { ReactNode } from 'react';
import './projectTitle.style.scss';

interface IProps {
	children: ReactNode;
}

export function ProjectTitle({ children }: IProps) {
	return <div className='resume_project_item_title_container'>{children}</div>;
}
