import { ResumeAbout } from './components/about/resumeAbout.component';
import { ResumeCareer } from './components/career/resumeCareer.component';
import { ResumeEducation } from './components/education/resumeEducation.component';
import { ResumeProject } from './components/project/resumeProject.component';
import './resumeMainContents.style.scss';

export function ResumeMainContents() {
	return (
		<section className='resume_main_contents_container'>
			<ResumeAbout />
			<ResumeCareer />
			<ResumeProject />
			<ResumeEducation />
		</section>
	);
}
