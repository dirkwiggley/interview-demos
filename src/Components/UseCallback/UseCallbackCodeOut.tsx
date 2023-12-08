const UseCallbackCodeOut = () => {
  const getText = () => {
    let arr = [
      "import { useCallback, useState } from 'react';",
      " ",
      "import Search from './Search';",
      " ",
      "const allUsers = [",
      "  'john',",
      "  'alex',",
      "  'george',",
      "  'simon',",
      "  'james',",
      "];",
      " ",
      "interface DemoProps { }",
      " ",
      "export default function UseCallbackDemo({ }: DemoProps) {",
      "  const [users, setUsers] = useState(allUsers);",
      " ",
      "  const handleSearch = useCallback(",
      "    (text: string) => {",
      "      console.log(users[0]);",
      " ",
      "      const filteredUsers = allUsers.filter((user) =>",
      "        user.includes(text),",
      "      );",
      "      setUsers(filteredUsers);",
      "    },",
      "    [users],",
      "  );",
      " ",
      "  const shuffleArray = (array: Array<string>) => {",
      "    const newArray = [...array];",
      "    for (let i = newArray.length - 1; i > 0; i--) {",
      "      const j = Math.floor(Math.random() * (i + 1));",
      "      const temp = newArray[i];",
      "      newArray[i] = newArray[j];",
      "      newArray[j] = temp;",
      "    }",
      "    return newArray",
      "  }",
      " ",
      "  return (",
      "    <div style={{ borderTop: '1px solid black' }}>",
      "      <div className='tutorial' style={{ marginLeft: 5, marginTop: 15 }}>",
      "        <div className='align-center mb-2 flex'>",
      "          <button onClick={() => setUsers(shuffleArray(allUsers))} style={{ marginRight: 5, minHeight: '31px' }}>",
      "            Shuffle",
      "          </button>",
      " ",
      "          <Search onChange={handleSearch} />",
      "        </div>",
      "        <ul>",
      "          {users.map((user) => (",
      "            <li key={user}>{user}</li>",
      "          ))}",
      "        </ul>",
      "      </div>",
      "    </div>",
      "  );",
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
              Contents of UseCallbackDemo.tsx
            </div>
            <hr style={{ marginRight: 5 }} />
            {getText()}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default UseCallbackCodeOut;