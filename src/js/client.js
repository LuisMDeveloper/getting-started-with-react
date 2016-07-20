import React from "react";
import ReactDOM from "react-dom";

import MessageBox from "./components/MessageBox"

let message = 'Hello Luis';

const app = document.getElementById('app');
ReactDOM.render(<MessageBox titleMessage={message}/>, app);
