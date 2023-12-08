import Counter from "./Counter"
import ReduxCodeOut from "./ReduxCodeOut";

const ReduxDemo = () => {

  return (
    <>
      <div style={{ borderTop: "2px solid black", textAlign: "center" }}>
        <h2>Redux Demo</h2>
        <Counter />
      </div>
      <ReduxCodeOut />
    </>
  )
}

export default ReduxDemo;