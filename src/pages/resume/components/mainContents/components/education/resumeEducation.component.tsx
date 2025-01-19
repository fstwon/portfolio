import { EdcuationItem } from './educationItem/educationItem.component';
import './resumeEducation.style.scss';

export function ResumeEducation() {
	return (
		<section className='resume_main_contents_secion project'>
			<div className='resume_main_contents_title'>EDUCATION</div>
			<div className='resume_main_contents_list resume_main_education_list'>
				<EdcuationItem />
			</div>
		</section>
	);
}
