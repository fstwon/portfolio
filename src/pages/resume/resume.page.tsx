import { AsideContents } from "./components/asideContents/asideContents.component";
import "./resume.style.scss";

type TClassName = string;
const className:TClassName = 'main_resume_page_container';

export function ResumePage() {
  return (
    <section className={className} >
      <AsideContents />
    </section>
  )
}