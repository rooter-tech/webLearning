import { useState } from "react";
import "./header.css";

function Header() {
  const [buttonText, setButtonText] = useState("Sign In");
  return (
    <div className="Header">
      <header class="header">
        <div class="header-item">
          <div class="header-child-container">
            <a href="" class="header-child">
              About
            </a>
            <a href="" class="header-child">
              Store
            </a>
          </div>
          <div class="header-child-container">
            <a href="" class="header-child">
              Gmail
            </a>
            <a href="" class="header-child">
              Images
            </a>
            <button class="sign-in-button">{buttonText}</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
