import { ReactNode } from 'react';
import './workShortDesc.style.scss';

interface IProps {
	children: ReactNode;
}

export function WorkShortDesc({ children }: IProps) {
	return <ul className='resume_project_work_desc'>{children}</ul>;
}

export function WorkShortDescItem({ children }: IProps) {
	return <li className='resume_project_work_desc_item'>{children}</li>;
}
