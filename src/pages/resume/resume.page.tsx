import "./resume.style.scss";

type TClassName = string;
const className:TClassName = 'main_resume_page_container';

export function ResumePage() {
  return (
    <section className={className} >
      {/* section * 2 */}
      이력서, 경력 기술서 페이지 입니다. (작업 중)
    </section>
  )
}