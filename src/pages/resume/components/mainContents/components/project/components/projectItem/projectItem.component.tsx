import { ReactNode } from 'react';
import { CompanyLogo } from '../../../companyLogo/companyLogo.component';
import {
	CompanyTitle,
	ProjectInfo,
	ProjectPeriod,
} from './componets/companyName/projectInfo.component';
import { ProjectDesc } from './componets/projectDesc/projectDesc.component';
import {
	TechBadge,
	TechBadges,
} from './componets/techBadges/techBadges.component';
import { ProjectTitle } from './componets/title/projectTitle.component';
import {
	WorkShortDesc,
	WorkShortDescItem,
} from './componets/workShortDesc/workShortDesc.component';
import './projectItem.style.scss';

interface IProjectListItem {
	children: ReactNode;
}

export function ResumeProjectItem() {
	return (
		<article className='resume_project_item'>
			<CompanyLogo />
			<span className='resume_project_list'>
				<ResumeProjectListItem>
					<ProjectTitle>게임 추천 AI Chatbot 웹 페이지 개발</ProjectTitle>
					<ProjectInfo>
						<CompanyTitle>(주) 미니맵</CompanyTitle>
						<ProjectPeriod>2023.03 ~ 2023.04</ProjectPeriod>
					</ProjectInfo>
					<ProjectDesc>
						"미니맵" 플랫폼의 북미 런칭 이전 홍보 및 유저 확보를 목적으로
						제작했으며, 해외 Product Hunt 사이트에서 첫 런칭 시 144개의 Upvote를
						획득
					</ProjectDesc>
					<TechBadges>
						<TechBadge>JavaScript</TechBadge>
						<TechBadge>TypeScript</TechBadge>
						<TechBadge>React.js</TechBadge>
					</TechBadges>
					<WorkShortDesc>
						<WorkShortDescItem>
							배포 전 개발 단계에서 데이터 타입 에러를 사전 방지하기 위해
							TypeScript 도입 제안 및 적용
						</WorkShortDescItem>
						<WorkShortDescItem>
							VAC 패턴과 Atomic 패턴 기반으로 폴더 구조 설계 및 컴포넌트 구현
						</WorkShortDescItem>
						<WorkShortDescItem>
							React.js Context API와 Custom hook을 활용한 상태관리 구현
						</WorkShortDescItem>
					</WorkShortDesc>
				</ResumeProjectListItem>
				<ResumeProjectListItem>
					<ProjectTitle>게임 및 게임 관련 상품 판매 페이지 개발</ProjectTitle>
					<ProjectInfo>
						<CompanyTitle>(주) 미니맵</CompanyTitle>
						<ProjectPeriod> 2022.10 ~ 2022.11</ProjectPeriod>
					</ProjectInfo>
					<ProjectDesc>
						기존 "미니맵" 플랫폼의 인디 게임 개발사와 협업하여 게임 홍보, 게임
						판매 및 관련 상품 판매를 위한 페이지 신규 개발
					</ProjectDesc>
					<TechBadges>
						<TechBadge>JavaScript</TechBadge>
						<TechBadge>React.js</TechBadge>
					</TechBadges>
					<WorkShortDesc>
						<WorkShortDescItem>
							React.js Context API와 Custom Hook을 사용하여 상품 수량/금액
							카운터 컴포넌트 구현
						</WorkShortDescItem>
						<WorkShortDescItem>
							스토어 메인 페이지의 메인 배너와 서브 배너의 캐러셀 슬라이드
							컴포넌트 구현
						</WorkShortDescItem>
						<WorkShortDescItem>
							스토어 메인 페이지에서 게임 상품 호버 시 미리보기 영상 및 이미지
							재생 구현
						</WorkShortDescItem>
						<WorkShortDescItem>
							할인 상품의 남은 시간을 표시하는 컴포넌트 구현
						</WorkShortDescItem>
					</WorkShortDesc>
				</ResumeProjectListItem>
				<ResumeProjectListItem>
					<ProjectTitle>미니맵 서비스 웹/앱 리뉴얼 개발</ProjectTitle>
					<ProjectInfo>
						<CompanyTitle>(주) 미니맵</CompanyTitle>
						<ProjectPeriod>2021.05 ~ 2022.05</ProjectPeriod>
					</ProjectInfo>
					<ProjectDesc>
						기존 jQuery로 개발되어 운영 중이던 웹/앱을 React.js로 기술 스택
						변경을 위한 플랫폼 신규 개발
					</ProjectDesc>
					<TechBadges>
						<TechBadge>JavaScript</TechBadge>
						<TechBadge>TypeScript</TechBadge>
						<TechBadge>React.js</TechBadge>
					</TechBadges>
					<WorkShortDesc>
						<WorkShortDescItem>
							Custom hook을 활용한 API 데이터 상태 관리 구현
						</WorkShortDescItem>
						<WorkShortDescItem>
							React.js Context API를 활용한 페이지 단위 상태 관리 구현
						</WorkShortDescItem>
						<WorkShortDescItem>
							이미지 및 아이콘 리소스의 Lazy loading 최적화 구현
						</WorkShortDescItem>
					</WorkShortDesc>
				</ResumeProjectListItem>
			</span>
		</article>
	);
}

function ResumeProjectListItem({ children }: IProjectListItem) {
	return <div className='resume_project_list_item'>{children}</div>;
}
