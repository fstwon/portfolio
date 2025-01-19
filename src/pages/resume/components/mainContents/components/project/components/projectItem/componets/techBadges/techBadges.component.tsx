import { ReactNode } from 'react';
import { Badge } from '../../../../../../../../../../components/badge/badge.component';
import './techBadges.style.scss';

interface IProps {
	children: ReactNode;
}

export function TechBadges({ children }: IProps) {
	return <div className='resume_project_tech_badges'>{children}</div>;
}

export function TechBadge({ children }: IProps) {
	return <Badge className='resume_project_tech_badge'>{children}</Badge>;
}
