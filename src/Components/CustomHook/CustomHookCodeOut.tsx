const CustomHookCodeOut = () => {
  const getText = () => {
    let arr = [
      "import { useEffect, useState } from 'react';",
      "import { User, fetchUsers } from './utils';",
      "import { useDebounce } from './CustomHook';",
      "import SearchBar from './SearchBar';",
      " ",
      "interface DemoProps { }",
      " ",
      "export default function SimpleContextDemo({ }: DemoProps) {",
      "  const [loading, setLoading] = useState(false);",
      "  const [search, setSearch] = useState('');",
      "  const [users, setUsers] = useState<User[]>([]);",
      "  const debouncedSearch = useDebounce(search);",
      " ",
      "  // Swap this in to show performance with",
      "  // the debounce hook",
      "  useEffect(() => {",
      "    const loadUsers = async () => {",
      "      setLoading(true);",
      " ",
      "      const users = await fetchUsers(debouncedSearch);",
      "      setUsers(users);",
      " ",
      "      setLoading(false);",
      "    };",
      "    loadUsers();",
      "  }, [debouncedSearch])",
      " ",
      "  // Swap this in to show performance without debounce hook",
      "  // useEffect(() => {",
      "  //   const loadUsers = async () => {",
      "  //     setLoading(true);",
      " ",
      "  //     const users = await fetchUsers(search);",
      "  //     setUsers(users);",
      " ",
      "  //     setLoading(false);",
      "  //   };",
      "  //   loadUsers();",
      "  // }, [search])",
      " ",
      "  return (",
      "    <div style={{borderTop: '1px solid black'}}>",
      "      <div style={{marginTop: 20, marginLeft: 10}}>",
      "        <SearchBar onChange={setSearch} />",
      "        {loading && <div>Loading...</div>}",
      "        {!loading &&",
      "          users.map((user) => {",
      "            return <div key={user.id}>{user.name}</div>;",
      "          })}",
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
    <div style={{ borderTop: "1px solid black", borderLeft: "1px solid black" }}>
      <div style={{ marginTop: 10, marginBottom: 10, marginLeft: 5, marginRight: 5, display: "block" }}>
        <pre>
          <code>
            <div>
              Contents of CustomHookDemo.tsx
            </div>
            <hr />
            {getText()}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default CustomHookCodeOut;