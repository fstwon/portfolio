import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './linkButton.style.scss';

export interface ILinkButtonProps {
	children: ReactNode;
	to: string;
	className: string;
	target?: string | undefined;
}

interface ITarget {
	_blank: string;
}

export const target: ITarget = {
	_blank: '_blank',
};

export function LinkButton({
	children,
	to,
	className,
	target,
}: ILinkButtonProps): ReactNode {
	return (
		<NavLink
			className={classNames(className, 'c_link_button')}
			to={to}
			target={target}
		>
			{children}
		</NavLink>
	);
}

export function HoverStyleLinkButton({
	className,
	children,
	to,
	target,
}: ILinkButtonProps) {
	return (
		<LinkButton
			className={classNames(className, 'c_link_hover_style_button_container')}
			to={to}
			target={target}
		>
			<div className='link_hover_style_button_label'>{children}</div>
		</LinkButton>
	);
}
