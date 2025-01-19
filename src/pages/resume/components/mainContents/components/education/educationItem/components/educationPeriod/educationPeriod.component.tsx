import { ReactNode } from 'react';
import './educationPeriod.style.scss';

interface IProps {
	children: ReactNode;
}

export function EducationPeriod({ children }: IProps) {
	return <div className='resume_edu_period'>{children}</div>;
}
