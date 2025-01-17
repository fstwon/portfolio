import { ReactNode } from "react";
import { MainHeaderLogo } from "./components/mainHeaderLogo/mainHaederLogo.component";
import { MainHeaderLink } from "./components/mainHeaderLink/mainHeaderLink.component";
import { IMainPage, useMainPageList } from "../../hooks/useMainPageList.hook";
import classNames from "classnames";
import "./mainHeader.style.scss";

type TClassName = string;
const className:TClassName = 'main_header';

export function MainHeader():ReactNode {
  const { pageList } = useMainPageList();

  return (
    <header className={classNames(className)}>
      <div className='main_header_inner'>
        <MainHeaderLogo />
        <div className='main_header_link_list_container' >
          {pageList.map(({id, pageName, to}:IMainPage) => {
            return (
            <MainHeaderLink to={to} key={id} >
              {pageName}
            </MainHeaderLink>
            )
          })}
      </div>
      </div>
    </header>
  )
}