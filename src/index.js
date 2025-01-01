import React from "react";
import { createRoot } from "react-dom/client"; // Import from react-dom/client for React 18
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./components/UserContext";
import App from "./App";

function Root() {
  return (
    <Router>
      <UserProvider>
        <App />
      </UserProvider>
    </Router>
  );
}

// For React 18
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

// If you're using React 17 or earlier, use this instead:
// ReactDOM.render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
