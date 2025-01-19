import { ISvgIcon } from '..';
import { ReactComponent as MailIconSVG } from './mailIcon.svg';
import classNames from 'classnames';

export function MailIcon({ className }: ISvgIcon) {
	return <MailIconSVG className={classNames('svg-icon', className)} />;
}
