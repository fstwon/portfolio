import { ReactNode } from 'react';
import './companyDes.style.scss';

interface IProps {
	children: ReactNode;
}

export function CompanyDes({ children }: IProps) {
	return (
		<div className='resume_career_item_company_des_container'>{children}</div>
	);
}
