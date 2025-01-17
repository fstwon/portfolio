import { ReactNode, useState } from "react";
import { ResumePage } from "../../resume/resume.page";
import { ProjectPage } from "../../project/project.page";

interface IMainPageList {
  RESUME: string;
  // BLOG: string;
  PROJECT: string;
};

const MAIN_PAGE_ROUTES: IMainPageList = {
  RESUME: 'resume',
  // BLOG: 'blog',
  PROJECT: 'project'
};

const pageElementList: {[key: string]: ReactNode} = {
  resume: <ResumePage />,
  // blog: <BlogMainPage />,
  project: <ProjectPage />
};

export interface IMainPage {
  id: number,
  pageName: string;
  to: string;
  element: ReactNode
}

export function useMainPageList() {
  const [pageList] = useState<IMainPage[]>(() => {
    const pageNameList = Object.values(MAIN_PAGE_ROUTES);
    const pageList = pageNameList.map((pageName, index) => {
      let to = `/${pageName}`;

      if(pageName === MAIN_PAGE_ROUTES.RESUME) {
        to = '/';
      }
      return {
        id: index,
        pageName: pageName.toUpperCase(),
        to,
        element: pageElementList[pageName]
      }
    })
    return pageList;
  })

  return {
    pageList
  };
}