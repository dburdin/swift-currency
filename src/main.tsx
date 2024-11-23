import ReactDOM from "react-dom/client";

import { App } from "./components/App.tsx";

import "./styles/base/reset.scss";
import "./styles/base/general.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
