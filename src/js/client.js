import React from "react";
import ReactDOM from "react-dom";

import MessageBox from "./components/MessageBox";
import App from "./components/App";
import Dashboard from "./components/Dashboard";

let message = 'Hello Luis';

const app = document.getElementById('app');
//ReactDOM.render(<MessageBox titleMessage={message}/>, app);
ReactDOM.render(<Dashboard url="temp"/>, app);
