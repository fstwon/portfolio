import { useSelector } from "react-redux";
import { RootState } from "./redux/Root.redux";
import { useEffect } from "react";
import "./app.styles.scss";

function App() {
  const { IS_INIT_RENDER } = useSelector((state: RootState) => state.AppReducer);

  useEffect(() => {
    if(!IS_INIT_RENDER) {

    }
  }, [IS_INIT_RENDER])

  return (
    <div className="App" >
      <h1 className="very_first_text" >Hello World</h1>
    </div>
  )
};

export default App;