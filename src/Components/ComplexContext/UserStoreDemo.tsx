import { UserProvider, defaultUserInfo, useUserContext, useUserStore } from "./UserStore";
import Dashboard from "./Dashboard";
import ComplexContextCodeOut from "./ComplexContextCodeOut";
const UserStoreDemo = () => {
  return (
    <>
      <UserProvider>
        <Dashboard />
      </UserProvider>
      <ComplexContextCodeOut />
    </>
  );
}

export default UserStoreDemo;