import { UserProvider } from "./UserStore";
import Dashboard from "./Dashboard";
import ComplexContextCodeOut from "./ComplexContextCodeOut";
import { useShowCodeContext } from "../NavLinks/ShowCodeContext";
const UserStoreDemo = () => {
  const [showCode] = useShowCodeContext();
  
  return (
    <>
      <UserProvider>
        <Dashboard />
      </UserProvider>
      {showCode ? <ComplexContextCodeOut /> : null}
    </>
  );
}

export default UserStoreDemo;