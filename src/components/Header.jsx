import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const[btnName, setBtnName] = useState("Logout")

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className="login"
            onClick={() => {
              btnName === "Logout" ? setBtnName("LOGGEDIN") : setBtnName("Logout")
            }}
          >{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;