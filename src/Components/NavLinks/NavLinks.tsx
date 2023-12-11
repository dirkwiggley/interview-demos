import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShowCodeContext } from "./ShowCodeContext";

const NavLinks = () => {
  const [showCode, setShowCode] = useShowCodeContext();
  let navigate = useNavigate();

  const handleRunDemo = () => {
    var element = document.getElementById("demos") as HTMLSelectElement;
    var demoName = element!.value;
    if (demoName === "" || demoName === undefined) {
      alert("You must first select a demo");
      return;
    }
    navigate(`/${demoName}`);
  };

  const handleShowCodeSample = () => {
    setShowCode(!showCode);
  };

  return (
    <div
      style={{
        marginTop: 15,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <label>Choose a demo:</label>

      <select name="demos" id="demos" style={{ marginLeft: 5, marginRight: 5 }}>
        <option value="">Select a demo</option>
        <option value="simple_context">Simple Context</option>
        <option value="complex_context">Complex Context</option>
        <option value="usememo">useMemo</option>
        <option value="usecallback">useCallback</option>
        <option value="custom_hook">Custom Hook</option>
        <option value="redux">Redux</option>
      </select>
      <div style={{ display: "flex", marginTop: 15, marginBottom: 15 }}>
        <button
          onClick={handleRunDemo}
          style={{ display: "block", marginLeft: "auto", marginRight: 5 }}
        >
          Run Demo
        </button>
        <button
          onClick={handleShowCodeSample}
          style={{ display: "block", marginLeft: 5, marginRight: "auto" }}
        >
          {showCode ? "Hide Code Sample" : "Show Code Sample"}
        </button>
      </div>
    </div>
  );
};

export default NavLinks;
