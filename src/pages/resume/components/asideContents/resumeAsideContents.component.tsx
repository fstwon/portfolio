import { ReactNode } from 'react';
import { ResumeContact } from './components/contact/resumeContact.component';
import { ResumeSkillset } from './components/skillset/resumeSkillset.component';
import './resumeAsideContents.style.scss';

export function ResumeAsideContents(): ReactNode {
	return (
		<aside className='resume_aside_container'>
			<ResumeContact />
			<ResumeSkillset />
		</aside>
	);
}
