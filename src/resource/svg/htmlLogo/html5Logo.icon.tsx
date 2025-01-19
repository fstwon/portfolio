import { ISvgIcon } from '..';
import { ReactComponent as HTML5LogoSVG } from './html5Logo.svg';
import classNames from 'classnames';

export function HTML5Logo({ className }: ISvgIcon) {
	return <HTML5LogoSVG className={classNames('svg-icon', className)} />;
}
