import { useMemo } from "react";
import { useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [isNumAllowed, setIsNumAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const PasswordGenerator = useMemo(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (isCharAllowed) str += "{}[]'?,)(_!@#$%&+-";
    if (isNumAllowed) str += "0987654321";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  },[length, isCharAllowed, isNumAllowed]);

  const copyModule = () => {
    window.navigator.clipboard.writeText(password);
  }

  return (
    <>
      <input type="text" value={password} readOnly />
      <button onClick={copyModule}>Copy</button>
      <input
        type="range"
        min={6}
        max={20}
        onChange={(e) => setLength(e.target.value)}
      />
      <label>Length: {length}</label>
      <input
        type="checkbox"
        defaultChecked={isNumAllowed}
        onChange={() => setIsNumAllowed((prev) => !prev)}
      />
      <label>Number</label>
      <input
        type="checkbox"
        defaultChecked={isCharAllowed}
        onChange={() => setIsCharAllowed((prev) => !prev)}
      />
      <label>Charaters</label>
    </>
  );
}

export default App;
