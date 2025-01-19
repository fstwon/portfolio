import { ReactNode } from 'react';
import { MainLogo } from '../../../../../../resource/svg';
import { LinkButton } from '../../../../../../components/linkButton/linkButton.component';
import './mainHeaderLogo.style.scss';

export function MainHeaderLogo(): ReactNode {
	return (
		<LinkButton
			className='main_header_logo_link'
			to={'/'}
		>
			<span className='main_header_logo_container'>
				<MainLogo className='main_header_logo' />
			</span>
		</LinkButton>
	);
}
