import { ReactNode } from 'react';
import './educationTitle.style.scss';

interface IProps {
	children: ReactNode;
}

export function EducationTitle({ children }: IProps) {
	return <div className='resume_edu_title'>{children}</div>;
}
