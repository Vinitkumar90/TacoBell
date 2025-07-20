import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Logout");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between h-24 items-center font-mono border-b-2 border-purple-200 shadow-md bg-purple-50">
      <Link to="/">
        <div className="ml-2 mix-blend-multiply">
          <img className="w-32 rounded-md"src={LOGO_URL} />
        </div>
      </Link>

      <div>
        <ul className="flex p-4 gap-14 text-l items-center">
          <li >
            User Status : {onlineStatus ? "✅":"🔴"}
          </li>
          <li >
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button
            className="w-18 px-2 py-1 mr-6 bg-purple-300 text-purple-900 rounded"
            onClick={() => {
              btnName === "Logout" ? setBtnName("Login") : setBtnName("Logout");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
