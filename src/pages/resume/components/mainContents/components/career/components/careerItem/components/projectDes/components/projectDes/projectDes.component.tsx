import { ReactNode } from 'react';
import './projectDes.style.scss';

interface IProps {
	children: ReactNode;
}

export function ProjectDes({ children }: IProps) {
	return <div className='career_item_project_des'>{children}</div>;
}
