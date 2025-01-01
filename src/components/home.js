import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { getAuth, signOut } from "firebase/auth";
import { app } from "./firebase";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const history = () => navigate("/history");
  const did = () => navigate("/did");
  const uploaded = () => navigate("/uploaded");

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}

      {/* Main Content */}
      <div className="main-content">
        <h1>Welcome!</h1>
        {user ? (
          <div>
            <div>
              <p>Logged in as: {user.email}</p>
              <img src={user.photoURL} alt="Profile" className="profile-img" />
            </div>
            <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
              <button onClick={toggleSidebar}>
                {sidebarOpen ? "Close" : "Open"} Menu
              </button>
              {sidebarOpen && (
                <ul>
                  <li>
                    <button onClick={history}>History</button>
                  </li>
                  <li>
                    <button onClick={did}>DID</button>
                  </li>
                  <li>
                    <button onClick={uploaded}>Uploaded</button>
                  </li>
                  <li>
                    <button onClick={handleLogout}>Sign Out</button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        ) : (
          <p>Not logged in</p>
        )}
      </div>
    </div>
  );
}

export default Home;
