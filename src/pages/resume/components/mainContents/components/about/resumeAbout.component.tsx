import './resumeAbout.style.scss';

export function ResumeAbout() {
	return (
		<section className='resume_main_contents_secion about'>
			<div className='resume_main_contents_title'>ABOUT</div>
			<p className='resume_main_contents_des'>
				<b>
					약 2년간 React 기반의 웹/앱 플랫폼 프론트엔드 개발, 운영 및 유지보수를
					담당
				</b>
				했습니다. 또한 <b>상품 판매 페이지</b>와 <b>AI 챗봇 프로젝트</b>의
				프론트엔드 개발에 참여했으며{' '}
				<b>
					Custom Hook과 Context API 등의 상태 관리 패턴, Flux 아키텍처에
					기반하여 컴포넌트를 구현한 경험
				</b>
				이 있습니다. 단순히 문제 해결을 위한 코드보다는, 코드 리뷰와 같은 협업
				과정에서 <b>'왜 이 코드를 작성했는지'를 명확히 설명할 수 있는 코드</b>를
				작성하는 것을 지향합니다.
			</p>
		</section>
	);
}
