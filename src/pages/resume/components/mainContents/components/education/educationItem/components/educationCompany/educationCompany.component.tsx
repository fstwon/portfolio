import { ReactNode } from 'react';
import './educationCompany.style.scss';

interface IProps {
	children: ReactNode;
}

export function EducationCompany({ children }: IProps) {
	return <div className='resume_edu_company'>{children}</div>;
}
