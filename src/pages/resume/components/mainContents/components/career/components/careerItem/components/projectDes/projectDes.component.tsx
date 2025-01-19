import { ReactNode } from 'react';
import './projectDes.style.scss';

/**
 * props
 *  proejct title
 *  project period
 *  project description
 */

interface IProps {
	children: ReactNode;
}

export function CareerProjectDes({ children }: IProps) {
	return <div className='career_project_des_container'>{children}</div>;
}
