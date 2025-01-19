import { ReactNode } from 'react';
import {
	BrowserIcon,
	DatabaseIcon,
	HTML5Logo,
	JsLogo,
	ToolsIcon,
} from '../../../../../../resource/svg';
import { CSS3Logo } from '../../../../../../resource/svg/cssLogo/css3Logo.icon';
import './resumeSkillset.style.scss';

export function ResumeSkillset(): ReactNode {
	return (
		<section className='resume_aside_section skill-set'>
			<ul className='resume_skill-set_list'>
				<li className='resume_skill-set front-end'>
					<h4 className='resume_skill-set_title'>
						<BrowserIcon className='resume_skill-set_title_icon' />
						Front-end
					</h4>
					<div className='resume_skill-set_icon_list front-end'>
						<HTML5Logo className='resume_skill-set_icon' />
						<CSS3Logo className='resume_skill-set_icon' />
						<JsLogo className='resume_skill-set_icon' />
					</div>
				</li>
				<li className='resume_skill-set back-end'>
					<h4 className='resume_skill-set_title'>
						<DatabaseIcon className='resume_skill-set_title_icon' />
						Back-end
					</h4>
					<div className='resume_skill-set_icon_list back-end'>
						<HTML5Logo className='resume_skill-set_icon' />
						<CSS3Logo className='resume_skill-set_icon' />
						<JsLogo className='resume_skill-set_icon' />
					</div>
				</li>
				<li className='resume_skill-set tools'>
					<h4 className='resume_skill-set_title'>
						<ToolsIcon className='resume_skill-set_title_icon' />
						Tools
					</h4>
					<div className='resume_skill-set_icon_list tools'>
						<HTML5Logo className='resume_skill-set_icon' />
						<CSS3Logo className='resume_skill-set_icon' />
						<JsLogo className='resume_skill-set_icon' />
					</div>
				</li>
			</ul>
		</section>
	);
}
