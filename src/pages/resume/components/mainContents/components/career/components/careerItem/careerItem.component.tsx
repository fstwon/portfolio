import { CompanyLogo } from '../../../companyLogo/companyLogo.component';
import { CompanyName } from './components/companyName/companyName.component';
import { CompanyDes } from './components/companyDes/companyDes.component';
import { PeriodEmployment } from './components/periodEmployment/periodEmployment.component';
import './careerItem.style.scss';
import { Badge } from '../../../../../../../../components/badge/badge.component';
import { CareerProjectDes } from './components/projectDes/projectDes.component';
import { ProjectTitle } from './components/projectDes/components/projectDesTitle/projectDesTitle.component';
import { ProjectDesPeriod } from './components/projectDes/components/projectDesPeriod/projectDesPeriod.component';
import { ProjectDes } from './components/projectDes/components/projectDes/projectDes.component';

export function CareerItem() {
	return (
		<article className='resume_career_item'>
			<CompanyLogo />
			<div className='resume_career_item_des_container'>
				<CompanyName link='https://minimap.net/?l=kr'>(주) 미니맵</CompanyName>
				<CompanyDes>
					“게임 평가 및 유저의 게임 평가, 추천, 일지를 기록하며 다른 유저들과
					소통할 수 있는 커뮤니티 서비스”
				</CompanyDes>
				<PeriodEmployment>
					2021.04.19 ~ 2023.08.31 (총 2년 6개월)
				</PeriodEmployment>
				<Badge className='resume_career_item_badge'>웹 프론트엔드 개발</Badge>
				<div className='resume_career_item_project_container'>
					<div className='title'>참여 프로젝트</div>
					<CareerProjectDes>
						<ProjectTitle>게임 추천 AI Chatbot 프로젝트</ProjectTitle>
						<ProjectDesPeriod>2023.03 ~ 2023.04</ProjectDesPeriod>
						<ProjectDes>
							ChatGPT와 "미니맵" 플랫폼의 데이터베이스를 기반으로 게임을
							추천해주는 실시간 채팅 AI Chatbot 웹 페이지 개발
						</ProjectDes>
					</CareerProjectDes>
					<CareerProjectDes>
						<ProjectTitle>게임 및 게임 관련 상품 판매 페이지 개발</ProjectTitle>
						<ProjectDesPeriod>2022.10 ~ 2022.11</ProjectDesPeriod>
						<ProjectDes>
							기존 "미니맵" 플랫폼의 인디 게임 개발사와 협업하여 게임 홍보, 게임
							판매 및 관련 상품 판매를 위한 페이지 신규 개발
						</ProjectDes>
					</CareerProjectDes>
					<CareerProjectDes>
						<ProjectTitle>
							미니맵 서비스 웹/앱 리뉴얼 개발 프로젝트
						</ProjectTitle>
						<ProjectDesPeriod>2021.05 ~ 2022.05</ProjectDesPeriod>
						<ProjectDes>
							기존 jQuery로 개발되어 운영 중이던 웹/앱을 React.js로 기술 스택
							변경을 위한 플랫폼 신규 개발
						</ProjectDes>
					</CareerProjectDes>
				</div>
			</div>
		</article>
	);
}
