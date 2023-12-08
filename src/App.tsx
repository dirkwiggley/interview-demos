import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavLinks from './Components/NavLinks/NavLinks';
import SimpleContextDemo from './Components/SimpleContext/SimpleContextDemo';
import UserStoreDemo from './Components/ComplexContext/UserStoreDemo';
import UseMemoDemo from './Components/UseMemo/UseMemoDemo';
import UseCallbackDemo from './Components/UseCallback/UseCallbackDemo';
import CustomHookDemo from './Components/CustomHook/CustomHookDemo';
import ReduxDemo from './Components/Redux/ReduxDemo';
import NoDemoSelected from './Components/NoDemoSelected';
import { ShowCodeProvider } from './Components/NavLinks/ShowCodeContext';

function App() {
  return (
    <div>
      <ShowCodeProvider>
        <Router>
          <div style={{ display: "inline-grid", border: "2px solid black" }}>
            <header className="App-header" style={{ display: "inline-block", padding: 5 }}>
              <div style={{ textAlign: "center" }}>Demo of various React bits</div>
            </header>
            <NavLinks />
            <Routes>
              <Route path="/" element={<NoDemoSelected />} />
              <Route path="/simple_context" element={<SimpleContextDemo />} />
              <Route path="/complex_context" element={<UserStoreDemo />} />
              <Route path="/usememo" element={<UseMemoDemo />} />
              <Route path="/usecallback" element={<UseCallbackDemo />} />
              <Route path="/custom_hook" element={<CustomHookDemo />} />
              <Route path="/redux" element={<ReduxDemo />} />
            </Routes>
          </div>
        </Router>
      </ShowCodeProvider>
    </div>
  );
}

export default App;
