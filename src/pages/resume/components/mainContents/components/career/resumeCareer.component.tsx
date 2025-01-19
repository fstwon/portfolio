import { CareerItem } from './components/careerItem/careerItem.component';
import './resumeCareer.style.scss';

export function ResumeCareer() {
	return (
		<section className='resume_main_contents_secion career'>
			<div className='resume_main_contents_title'>CAREER</div>
			<div className='resume_main_contents_list resume_main_career_list'>
				<CareerItem />
			</div>
		</section>
	);
}
