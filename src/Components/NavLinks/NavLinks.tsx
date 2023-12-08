import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavLinks = () => {
  const [demoName, setDemoName] = useState<string>('');
  let navigate = useNavigate();

  const handleRunDemo = () => {
    var element = document.getElementById("demos") as HTMLSelectElement;
    var demoName = element!.value;
    if (demoName === "" || demoName === undefined) {
      alert('You must first select a demo');
      return;
    }
    navigate(`/${demoName}`);
  }

  return (
    <div style={{marginTop: 15, display: "block", marginLeft: "auto", marginRight: "auto"}}>
      <label>Choose a demo:</label>

      <select name="demos" id="demos" style={{marginLeft: 5, marginRight: 5}}>
        <option value="">Select a demo</option>
        <option value="simple_context">Simple Context</option>
        <option value="complex_context">Complex Context</option>
        <option value="usememo">useMemo</option>
        <option value="usecallback">useCallback</option>
        <option value="custom_hook">Custom Hook</option>
        <option value="redux">Redux</option>
      </select>
      <div style={{marginTop: 15, marginBottom: 15}}>
        <button onClick={handleRunDemo} style={{display: "block", marginLeft: "auto", marginRight: "auto"}}>Run Demo</button>
      </div>
    </div>
  );
}

export default NavLinks;