import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";

import { Provider } from "./context";
import Pollution from "./components/Pollution";

ReactDOM.render(
  <Provider>
    <Pollution />
  </Provider>,
  document.getElementById("root")
);
