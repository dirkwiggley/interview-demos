import { UserProvider, defaultUserInfo, useUserContext, useUserStore } from "./UserStore";
import Dashboard from "./Dashboard";
const UserStoreDemo = () => {

  return (
    <UserProvider>
        <Dashboard />
    </UserProvider>
  );
}

export default UserStoreDemo;