import { EducationCompany } from './components/educationCompany/educationCompany.component';
import {
	EducationDesc,
	EducationDescItem,
} from './components/educationDesc/educationDesc.component';
import { EducationPeriod } from './components/educationPeriod/educationPeriod.component';
import { EducationTitle } from './components/educationTItle/educationTitle.component';
import './educationItem.style.scss';

export function EdcuationItem() {
	return (
		<div className='resume_education_item'>
			<EducationCompany>코드스테이츠</EducationCompany>
			<EducationPeriod>2020.03 ~ 2020.08 (6개월)</EducationPeriod>
			<EducationTitle>
				Advance software engineering, Immersive program (20기) 웹 프로그래밍
				개발자 양성 기초 교육 과정 수료
			</EducationTitle>
			{/* 교육 설명 */}
			<EducationDesc>
				<EducationDescItem>
					HTML/CSS, JavaScript 기본 기술 및 기능 습득
				</EducationDescItem>
				<EducationDescItem>
					React.js 기반 웹 프로그래밍의 전반적인 지식 습득
				</EducationDescItem>
				<EducationDescItem>
					페어 프로그래밍을 통한 협업의 이해와 커뮤니케이션 능력 향상
				</EducationDescItem>
				<EducationDescItem>
					2인 팀 프로젝트 및 4인 기업 협업 팀 프로젝트 프론트 엔드 개발 참여
				</EducationDescItem>
			</EducationDesc>
		</div>
	);
}
