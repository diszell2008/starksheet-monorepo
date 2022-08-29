import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AbisContextProvider } from "./contexts/AbisContext";
import { CellValuesContextProvider } from "./contexts/CellValuesContext";
import { CurrentSheetContextProvider } from "./contexts/CurrentSheetContext";
import contract from "./contract.json";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

function Root() {
  return (
    <CurrentSheetContextProvider>
      <CellValuesContextProvider>
        <AbisContextProvider initialContractAbis={contract.contractAbis}>
          <App />
        </AbisContextProvider>
      </CellValuesContextProvider>
    </CurrentSheetContextProvider>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
