const ComplexContextCodeOut = () => {
  const getText = () => {
    let arr = [
      "import * as React from 'react';",
      " ",
      "export interface UserInterface {",
      "    id: number;",
      "    login: string;",
      "    email: string;",
      "}",
      " ",
      "export const defaultUserInfo: UserInterface = {",
      "    id: 0,",
      "    login: 'nobody',",
      "    email: 'default@default.com',",
      "},",
      " ",
      "// Set up the storage here with useState",
      "export const useUserStore = (initial: UserInterface) => React.useState<UserInterface | null>(initial);",
      "type UseUserStoreType = ReturnType<typeof useUserStore>;",
      "// Just a reminder that creating a context of UseUserStoreType returns an ",
      "// array with the following 2 elements",
      "type UserStoreType = UseUserStoreType[0];",
      "type SetUserStoreType = UseUserStoreType[1];",
      " ",
      "const UserContext = React.createContext<UseUserStoreType | null>(null);",
      " ",
      "export const useUserContext = () => React.useContext(UserContext)!;",
      " ",
      "export const UserProvider = ({ children }: { children: React.ReactNode }) => (",
      "    <UserContext.Provider value={useUserStore(defaultUserInfo)}>",
      "        {children}",
      "    </UserContext.Provider>",
      ");"
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
              Contents of UserStore.tsx
            </div>
            <hr style={{ marginRight: 5 }} />
            {getText()}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default ComplexContextCodeOut;