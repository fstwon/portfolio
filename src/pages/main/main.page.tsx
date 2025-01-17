import { Navigate, Route, Routes } from "react-router-dom";
import { IMainPage, useMainPageList } from "./hooks/useMainPageList.hook";
import { ReactNode } from "react";
import "./main.style.scss";

type TclassName = string;
const className:TclassName = 'main_page_container';

export function MainPage():ReactNode {
  const { pageList } = useMainPageList();
  
  return (
    <main className={className}>
      <Routes>
        {
          pageList.map(({id, to, element}:IMainPage) => {
            return (
              <Route  key={id} path={to} element={element} />
            )
          })
        }
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </main>
  )
}