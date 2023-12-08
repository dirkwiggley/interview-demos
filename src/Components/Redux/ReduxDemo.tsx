import { Provider } from "react-redux";
import Counter from "./Counter"
import ReduxCodeOut from "./ReduxCodeOut";
import { demoStore } from "./demoStore";
import { useShowCodeContext } from "../NavLinks/ShowCodeContext";

const ReduxDemo = () => {
  const [showCode] = useShowCodeContext();
  
  return (
    <Provider store={demoStore}>
      <div style={{ borderTop: "2px solid black", textAlign: "center" }}>
        <h2>Redux Demo</h2>
        <Counter />
      </div>
      {showCode ? <ReduxCodeOut /> : null}
    </Provider>
  )
}

export default ReduxDemo;