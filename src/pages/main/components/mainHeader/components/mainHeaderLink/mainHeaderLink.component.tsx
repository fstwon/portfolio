import { ReactNode } from "react"
import { HoverStyleLinkButton } from "../../../../../../components/linkButton/linkButton.component";
import "./mainHeaderLink.style.scss";

interface IMainHeaderLinkProps {
  children: ReactNode;
  to: string;
}

export function MainHeaderLink({children, to}: IMainHeaderLinkProps): ReactNode {
  return (
    <HoverStyleLinkButton to={to} className='main_header_link'>
      {children}
    </HoverStyleLinkButton>
  )
}