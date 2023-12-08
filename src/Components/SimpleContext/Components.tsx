import { useUserContext } from './context';

interface SidebarProps {}

export function Sidebar({}: SidebarProps) {
  const user = useUserContext();
  const isSubscribed = user.isSubscribed ? "true" : "false";
  return (
    <div style={{padding: 5, border: "1px solid black", width: "50%"}}>
      <div style={{borderBottom: "1px solid black"}}>Sidebar</div>
      <div>User Name: {user.name}</div>
      <div>Subscription Status: {isSubscribed}</div>
    </div>
  );
}

interface ProfileProps {}

export function Profile({}: ProfileProps) {
  const user = useUserContext();

  return (
    <div style={{padding: 5, border: "1px solid black", textAlign: "center", width: "50%"}}>
      <div style={{borderBottom: "1px solid black"}}>
        Profile
      </div>
      User Name: {user.name}
    </div>
  );
}