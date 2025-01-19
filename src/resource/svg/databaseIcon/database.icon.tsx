import { ISvgIcon } from '..';
import { ReactComponent as DatabaseIconSVG } from './databaseIcon.svg';
import classNames from 'classnames';

export function DatabaseIcon({ className }: ISvgIcon) {
	return <DatabaseIconSVG className={classNames('svg-icon', className)} />;
}
