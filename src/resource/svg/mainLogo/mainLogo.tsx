import { ISvgIcon } from '..';
import { ReactComponent as MainLogoSVG } from './FSTWON.svg';
import classnames from 'classnames';

export function MainLogo({ className }: ISvgIcon) {
	return <MainLogoSVG className={classnames(className)} />;
}
