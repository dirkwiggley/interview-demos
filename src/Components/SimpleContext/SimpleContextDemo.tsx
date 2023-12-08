import { useState } from 'react';

import { DashboardContext } from './context';
import Dashboard from './Dashboard';
import SimpleContextCodeOut from './SimpleContextCodeOut';
import { useShowCodeContext } from '../NavLinks/ShowCodeContext';

export interface User {
  isSubscribed: boolean;
  name: string;
}

interface DemoProps { }

export default function SimpleContextDemo({ }: DemoProps) {
  const [showCode] = useShowCodeContext();

  const [user] = useState<User>({
    isSubscribed: true,
    name: 'You',
  });

  return (
    <>
      <DashboardContext.Provider value={user}>
        <div style={{ borderTop: "2px solid black", textAlign: "center" }}>
          <Dashboard />
        </div>
      </DashboardContext.Provider>
      {showCode ? <SimpleContextCodeOut /> : null}
    </>
  );
}