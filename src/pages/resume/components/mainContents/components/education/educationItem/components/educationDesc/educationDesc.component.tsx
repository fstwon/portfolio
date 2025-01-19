import { ReactNode } from 'react';
import './educationDesc.style.scss';

interface IProps {
	children: ReactNode;
}

export function EducationDesc({ children }: IProps) {
	return <ul className='resume_edu_desc'>{children}</ul>;
}

export function EducationDescItem({ children }: IProps) {
	return <li className='resume_edu_desc_item'>{children}</li>;
}
