import { ISvgIcon } from '..';
import { ReactComponent as BrowserIconSVG } from './browserIcon.svg';
import classNames from 'classnames';

export function BrowserIcon({ className }: ISvgIcon) {
	return <BrowserIconSVG className={classNames('svg-icon', className)} />;
}
