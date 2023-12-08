import { Profile, Sidebar } from './Components';

interface DashboardProps {}

export default function Dashboard({}: DashboardProps) {
  return (
    <div style={{marginTop: 10, display: "flex", width: "100%"}}>
      <Sidebar />
      <Profile />
    </div>
  );
}