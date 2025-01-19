import {
	MailIcon,
	GitHubLogo,
	BlogIcon,
	WebIcon,
} from '../../../../../../resource/svg';
import {
	LinkButton,
	target,
} from '../../../../../../components/linkButton/linkButton.component';
import './resumeContact.style.scss';
import { ReactNode } from 'react';

export function ResumeContact(): ReactNode {
	return (
		<section className='resume_aside_section contact'>
			<h2 className='resume_contact_jop_des'>
				<WebIcon className='resume_contact_jop_des_icon' />
				Web front-end developer
			</h2>
			<div className='resume_contact_name_container'>
				<h3 className='resume_contact_name'>
					장원일,{' '}
					<small className='resume_contact_name eng'>(Won Il Jang)</small>
				</h3>
			</div>
			<div className='resume_contact_icon_list'>
				<LinkButton
					className='resume_contact_icon_link'
					to='https://velog.io/@fstwon'
					target={target._blank}
				>
					<MailIcon className='resume_contact_icon mail' />
				</LinkButton>
				<LinkButton
					className='resume_contact_icon_link'
					to='https://github.com/fstwon'
					target={target._blank}
				>
					<GitHubLogo className='resume_contact_icon github' />
				</LinkButton>
				<LinkButton
					className='resume_contact_icon_link'
					to='https://velog.io/@fstwon'
					target={target._blank}
				>
					<BlogIcon className='resume_contact_icon blog' />
				</LinkButton>
			</div>
		</section>
	);
}
