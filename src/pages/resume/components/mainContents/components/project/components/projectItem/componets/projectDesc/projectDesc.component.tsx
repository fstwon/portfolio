import { ReactNode } from 'react';
import './projectDesc.style.scss';

interface IProps {
	children: ReactNode;
}

export function ProjectDesc({ children }: IProps) {
	return <div className='resume_project_description'>{children}</div>;
}
