const SimpleContextCodeOut = () => {
  const getText = () => {
    let arr = [
      "import { createContext, useContext } from 'react';",
      "import { User } from './SimpleContextDemo';",
      " ",
      "export const DashboardContext = createContext<User | undefined>(undefined);",
      " ",
      "export function useUserContext() {",
      "  const user = useContext(DashboardContext);",
      " ",
      "  if (user === undefined) {",
      "    throw new Error('useUserContext must be used with a DashboardContext');",
      "  }",
      " ",
      "  return user;",
      "}"
    ];
    
    const newArr: Array<any> = [];
    arr.forEach((item, index) => {
      newArr.push(<div key={index} style={{ whiteSpace: "pre-wrap" }}>{item}</div>)
    });
    return (
      <>
        {newArr}
      </>
    )
  }


  return (
    <div style={{ borderTop: "2px solid black" }}>
      <div style={{ marginTop: 10, marginBottom: 10, marginLeft: 5, display: "block" }}>
        <pre>
          <code>
            <div>
              Contents of context.ts
            </div>
            <hr style={{ marginRight: 5 }} />
            {getText()}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default SimpleContextCodeOut;