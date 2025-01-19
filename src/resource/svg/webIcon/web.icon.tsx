import { ISvgIcon } from '..';
import { ReactComponent as WebIconSVG } from './webIcon.svg';
import classNames from 'classnames';

export function WebIcon({ className }: ISvgIcon) {
	return <WebIconSVG className={classNames('svg-icon', className)} />;
}
