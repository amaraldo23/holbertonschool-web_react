// task_1/dashboard/src/App.jsx
import React from "react";
import { getCurrentYear, getFooterCopy } from "./utils";
import Notifications from "./Notifications";
import "./App.css";

function App() {
  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>
      <div className="App">
        <div className="App-footer">
          <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
        </div>
      </div>
    </>
  );
}

export default App;
