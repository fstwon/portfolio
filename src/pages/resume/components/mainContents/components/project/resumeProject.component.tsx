import { ResumeProjectItem } from './components/projectItem/projectItem.component';
import './resumeProject.style.scss';

export function ResumeProject() {
	return (
		<section className='resume_main_contents_secion project'>
			<div className='resume_main_contents_title'>PROJECT</div>
			<div className='resume_main_contents_list resume_main_project_list'>
				<ResumeProjectItem />
			</div>
		</section>
	);
}
