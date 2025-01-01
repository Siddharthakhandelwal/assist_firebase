import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Home from "./components/home";
import { app } from "./components/firebase";
import { UserContext } from "./components/UserContext";
import History from "./components/history";
import Uploaded from "./components/uploaded";
import DID from "./components/did";

function LoginPage({ onSignIn }) {
  return (
    <div>
      <p>hi</p>
      <div>
        <button onClick={onSignIn}>Sign in with Google</button>
      </div>
    </div>
  );
}

function App() {
  const provider = new GoogleAuthProvider();
  const { setUser } = React.useContext(UserContext);
  const navigate = useNavigate();
  const handleSignIn = async () => {
    try {
      console.log("Starting sign in process");
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      if (result) {
        console.log("User signed in:", result.user);
        setUser(result.user);
        navigate("/home");
      }
    } catch (popupError) {
      console.error("Popup sign in failed, trying redirect:", popupError);
      console.log("don't block the pop ups");
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage onSignIn={handleSignIn} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/uploaded" element={<Uploaded />} />
        <Route path="/did" element={<DID />} />
      </Routes>
    </div>
  );
}

export default App;
