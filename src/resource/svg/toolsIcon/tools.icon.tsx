import { ISvgIcon } from '..';
import { ReactComponent as ToolsIconSVG } from './toolsIcon.svg';
import classNames from 'classnames';

export function ToolsIcon({ className }: ISvgIcon) {
	return <ToolsIconSVG className={classNames('svg-icon', className)} />;
}
