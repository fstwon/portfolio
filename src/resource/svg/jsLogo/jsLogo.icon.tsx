import { ISvgIcon } from '..';
import { ReactComponent as JsLogoSVG } from './jsLogo.svg';
import classNames from 'classnames';

export function JsLogo({ className }: ISvgIcon) {
	return <JsLogoSVG className={classNames('svg-icon', className)} />;
}
