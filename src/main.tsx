
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
import { injectColorVariables } from "./utils/inject-colors";

// Inject color variables from registry-colors.ts
injectColorVariables();
createRoot(document.getElementById("root")!).render(<App />);  