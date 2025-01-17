import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import "./linkButton.style.scss";

export interface ILinkButtonProps {
  children: ReactNode;
  to: string;
  className: string;
}

export function LinkButton({ children, to, className }: ILinkButtonProps):ReactNode {
  return (
    <NavLink className={classNames(className, 'c_link_button')} to={to}>
      {children}
    </NavLink>
  )
}

export function HoverStyleLinkButton({className, children, to}: ILinkButtonProps) {
  return (
    <LinkButton className={classNames(className, 'c_link_hover_style_button_container')} to={to} >
      <div className='link_hover_style_button_label' >
        {children}
      </div>
    </LinkButton>
  )
};