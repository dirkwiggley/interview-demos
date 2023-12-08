import { useEffect, useState } from 'react';
import { User, fetchUsers } from './utils';
import { useDebounce } from './CustomHook';
import SearchBar from './SearchBar';
import CustomHookCodeOut from './CustomHookCodeOut';

interface DemoProps { }

export default function SimpleContextDemo({ }: DemoProps) {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const debouncedSearch = useDebounce(search);

  // Swap this in to show performance with
  // the debounce hook
  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);

      const users = await fetchUsers(debouncedSearch);
      setUsers(users);

      setLoading(false);
    };
    loadUsers();
  }, [debouncedSearch])

  // Swap this in to show performance without debounce hook
  // useEffect(() => {
  //   const loadUsers = async () => {
  //     setLoading(true);

  //     const users = await fetchUsers(search);
  //     setUsers(users);

  //     setLoading(false);
  //   };
  //   loadUsers();
  // }, [search])

  return (
    <div style={{display: "flex"}}>
    <div style={{borderTop: "1px solid black"}}>
      <div style={{marginTop: 20, marginLeft: 10}}>
        <SearchBar onChange={setSearch} />
        {loading && <div>Loading...</div>}
        {!loading &&
          users.map((user) => {
            return <div key={user.id}>{user.name}</div>;
          })}
      </div>
    </div>
    <CustomHookCodeOut />
    </div>
  );
}