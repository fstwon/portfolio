import { ReactNode } from 'react';
import './projectInfo.style.scss';

interface IProps {
	children: ReactNode;
}

export function ProjectInfo({ children }: IProps) {
	return <div className='resume_project_info_container'>{children}</div>;
}

export function CompanyTitle({ children }: IProps) {
	return <span className='resume_project_company_title'>{children}</span>;
}

export function ProjectPeriod({ children }: IProps) {
	return <span className='resume_project_period'>{children}</span>;
}
