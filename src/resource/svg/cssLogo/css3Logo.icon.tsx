import { ISvgIcon } from '..';
import { ReactComponent as CSS3LogoSVG } from './css3Logo.svg';
import classNames from 'classnames';

export function CSS3Logo({ className }: ISvgIcon) {
	return <CSS3LogoSVG className={classNames('svg-icon', className)} />;
}
