import "./body.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Body() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  function loginUser(username, password) {
    if (password === "QWERTY" && username !== "") {
      setIsLoggedIn(true);
      console.log(`You're logged in`);
    } else if (username === "") {
      alert("Username cannot be empty!");
    } else {
      alert("Wrong Password!");
    }
    console.log(
      "username, password, isLoggedIn",
      username,
      password,
      isLoggedIn
    );
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  function renderConditionally(isLoggedIn) {
    console.log("isLoggedIn", isLoggedIn);
    if (isLoggedIn) {
      return (
        <Router>
          <Routes>
            <Route
              path="/user"
              element={
                <div className="container">
                  <h1>Welcome {username}</h1>
                  <button className="search-button" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              }
            />
          </Routes>
        </Router>
      );
    } else {
      return (
        <Router>
          <Routes>
            <Route
              path="/login"
              element={
                <div className="container">
                  <img
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
                    alt="Google Logo"
                  />
                  <div className="searchBarContainer">
                    <input
                      className="searchbar"
                      type="text"
                      title="username"
                      value={username}
                      onChange={handleUsernameChange}
                      id="username"
                      placeholder="Enter your Username"
                    />
                  </div>
                  <div className="searchBarContainer">
                    <input
                      className="searchbar"
                      type="password"
                      title="password"
                      value={password}
                      onChange={handlePasswordChange}
                      id="password"
                      placeholder="Enter your Password"
                    />
                  </div>
                  <br />
                  <button
                    className="search-button"
                    onClick={() => loginUser(username, password)}
                  >
                    Login
                  </button>
                </div>
              }
            />
          </Routes>
        </Router>
      );
    }
  }

  return (
    <div className="App">
      <div className="center">{renderConditionally(isLoggedIn)}</div>
    </div>
  );
}

export default Body;
