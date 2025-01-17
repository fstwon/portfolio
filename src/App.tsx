import { useSelector } from "react-redux";
import { RootState } from "./redux/Root.redux";
import { ReactNode, useEffect } from "react";
import { MainPage } from "./pages/main/main.page";
import { MainHeader } from "./pages/main/components/mainHeader/mainHeader.component";
import "./app.style.scss";

function App():ReactNode {
  const { IS_INIT_RENDER } = useSelector((state: RootState) => state.AppReducer);

  useEffect(() => {
    if(!IS_INIT_RENDER) {

    }
  }, [IS_INIT_RENDER])

  return (
    <div className="App" >
      <MainHeader />
      <MainPage />
      {/* footer */}
    </div>
  )
};

export default App;