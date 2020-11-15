import React from "react";
import ReactDOM, {render, hydrate} from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import "leaflet/dist/leaflet.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { store } from "./Redux/Store";

const rootElement = document.getElementById("root")

if (rootElement.hasChildNodes()) {
 hydrate(<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
</React.StrictMode>, rootElement) 
}else{
  render(<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>, rootElement)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
