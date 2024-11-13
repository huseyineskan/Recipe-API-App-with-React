import React from "react";
import "../css/header.css";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="#">RECIPE</a>
        </div>
        <nav>
          <a href="#">Link1</a>
          <a href="#">Link2</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
