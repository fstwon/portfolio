import { ISvgIcon } from '..';
import { ReactComponent as BlogIconSVG } from './blogIcon.svg';
import classnames from 'classnames';

export function BlogIcon({ className }: ISvgIcon) {
	return <BlogIconSVG className={classnames('svg-icon', className)} />;
}
