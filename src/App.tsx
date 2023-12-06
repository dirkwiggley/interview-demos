import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { demoStore } from './Components/Redux/demoStore';
import NavLinks from './Components/NavLinks/NavLinks';
import SimpleContextDemo from './Components/SimpleContext/SimpleContextDemo';
import UserStoreDemo from './Components/ComplexContext/UserStoreDemo';
import UseMemoDemo from './Components/UseMemo/UseMemoDemo';
import UseCallbackDemo from './Components/UseCallback/UseCallbackDemo';
import { UserProvider } from './Components/ComplexContext/UserStore';
import CustomHookDemo from './Components/CustomHook/CustomHookDemo';
import ReduxDemo from './Components/Redux/ReduxDemo';

function App() {
  return (
    <div>
      <Provider store={demoStore}>
        <UserProvider>
          <Router>
            <header className="App-header">
              Demo of various React bits
            </header>
            <NavLinks />
            <Routes>
              <Route path="/simple_context" element={<SimpleContextDemo />} />
              <Route path="/complex_context" element={<UserStoreDemo />} />
              <Route path="/usememo" element={<UseMemoDemo />} />
              <Route path="/usecallback" element={<UseCallbackDemo />} />
              <Route path="/custom_hook" element={<CustomHookDemo />} />
              <Route path="/redux" element={<ReduxDemo />} />
            </Routes>
          </Router>
        </UserProvider>
      </Provider>
    </div>
  );
}

export default App;
