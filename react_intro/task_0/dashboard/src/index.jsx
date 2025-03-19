import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../../../task_1/dashboard/src/App';
import Notifications from "./Notifications";

ReactDOM.render(
  <React.StrictMode>
    <div className="root-notifications">
      <Notifications />
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);