import { ReactNode } from 'react';
import classNames from 'classnames';
import './badge.style.scss';

interface IProps {
	children: ReactNode;
	className: string;
}

export function Badge({ children, className }: IProps) {
	return (
		<span className={classNames('c_badge_container', className)}>
			{children}
		</span>
	);
}
