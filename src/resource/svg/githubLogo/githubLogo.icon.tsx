import { ISvgIcon } from '..';
import { ReactComponent as GithubLogoSVG } from './githubLogo.svg';
import classNames from 'classnames';

export function GitHubLogo({ className }: ISvgIcon) {
	return <GithubLogoSVG className={classNames('svg-icon', className)} />;
}
