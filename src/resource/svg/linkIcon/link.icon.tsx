import { ISvgIcon } from '..';
import { ReactComponent as LinkIconSVG } from './linkIcon.svg';
import classNames from 'classnames';

export function LinkIcon({ className }: ISvgIcon) {
	return <LinkIconSVG className={classNames('svg-icon', className)} />;
}
