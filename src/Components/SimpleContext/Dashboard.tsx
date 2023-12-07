import { Profile, Sidebar } from './Components';

interface DashboardProps {}

export default function Dashboard({}: DashboardProps) {
  return (
    <div style={{margin: 10, display: "flex"}} >
      <Sidebar />
      <Profile />
    </div>
  );
}
