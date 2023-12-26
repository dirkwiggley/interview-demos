import { Profile, Sidebar } from './Components';

export default function Dashboard() {
  return (
    <div style={{marginTop: 10, display: "flex", width: "100%"}}>
      <Sidebar />
      <Profile />
    </div>
  );
}