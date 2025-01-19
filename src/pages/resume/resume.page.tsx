import { ResumeAsideContents } from './components/asideContents/resumeAsideContents.component';
import { ResumeMainContents } from './components/mainContents/resumeMainContents.component';
import './resume.style.scss';

type TClassName = string;
const className: TClassName = 'main_resume_page_container';

export function ResumePage() {
	return (
		<section className={className}>
			<ResumeAsideContents />
			<ResumeMainContents />
		</section>
	);
}
