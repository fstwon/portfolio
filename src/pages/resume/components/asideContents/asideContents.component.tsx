import { ResumeContact } from "./contact/resumeContact.component";
import { ResumeSkillset } from "./skillset/resumeSkillset.component";

export function AsideContents() {
  return (
    <aside className='resume_aside_container'>
      <ResumeContact />
      <ResumeSkillset />
    </aside>  
  )
}