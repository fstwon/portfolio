import { ReactNode } from 'react';
import './periodEmployment.style.scss';

interface IProps {
	children: ReactNode;
}

export function PeriodEmployment({ children }: IProps) {
	return (
		<div className='resume_career_item_period_empl_container'>{children}</div>
	);
}
