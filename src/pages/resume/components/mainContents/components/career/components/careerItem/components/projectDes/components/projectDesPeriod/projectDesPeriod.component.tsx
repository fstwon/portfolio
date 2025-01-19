import { ReactNode } from 'react';
import './projectDesPeriod.style.scss';

interface IProps {
	children: ReactNode;
}

export function ProjectDesPeriod({ children }: IProps) {
	return <div className='career_item_project_des_period'>{children}</div>;
}
