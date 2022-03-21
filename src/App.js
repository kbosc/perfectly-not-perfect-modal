
import { Modal, useModal } from "./lib/Modal"
import React from "react";

function App() {
  const { isShowing, isToggle } = useModal();

  return (
    <div className="App">
      <button onClick={isToggle}>
        Click me
      </button>
      <Modal isShowing={isShowing} hide={isToggle} yourText="Employee Created!" />
    </div>
  );
}

export default App;
