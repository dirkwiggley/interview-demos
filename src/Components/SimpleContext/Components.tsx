import { useUserContext } from './context';

interface SidebarProps {}

export function Sidebar({}: SidebarProps) {
  const user = useUserContext();
  const isSubscribed = user.isSubscribed ? "true" : "false";
  return (
    <div style={{padding: 5, border: "1px solid black"}}>
      <div>{user.name}</div>
      <div>Subscription Status: {isSubscribed}</div>
    </div>
  );
}

interface ProfileProps {}

export function Profile({}: ProfileProps) {
  const user = useUserContext();

  return <div style={{padding: 5, border: "1px solid black"}}>{user.name}</div>;
}